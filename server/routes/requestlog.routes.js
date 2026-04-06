const express = require("express");
const router = express.Router();
const RequestLog = require("../models/RequestLog");
const verifyToken = require("../middleware/verifyToken");
const roleGuard = require("../middleware/roleGuard");

router.post(
  "/",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  async (req, res) => {
    try {
      const {
        requiredComponent,
        requiredBloodType,
        requestedQuantity,
        unitType,
        urgencyLevel,
        address,
        location,
        neededBy,
      } = req.body;

      if (!requiredBloodType || !requestedQuantity || !address || !location) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }
      if (urgencyLevel && (urgencyLevel < 1 || urgencyLevel > 5)) {
        return res.status(400).json({
          success: false,
          message: "Urgency level must be between 1 and 5",
        });
      }

      const request = await RequestLog.create({
        requestedBy: req.user.id,
        requestedByEmp: req.user.id, // adjust if needed later
        requiredComponent,
        requiredBloodType,
        requestedQuantity,
        unitType,
        urgencyLevel,
        address,
        location,
        neededBy,
      });

      res.status(201).json({
        success: true,
        data: request,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
);router.get(
  "/",
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  async (req, res) => {
    try {
      let query = {};

      //  Role-based filtering
      if (req.user.role === "Hospital") {
        query.requestedBy = req.user.id;
      }

      //  Optional filters
      const { status, bloodType } = req.query;

      if (status) query.status = status;
      if (bloodType) query.requiredBloodType = bloodType;

      const requests = await RequestLog.find(query).sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        count: requests.length,
        data: requests,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  },
)


router.get(
  '/:id',
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  async (req, res) => {
    try {
      const { id } = req.params;

    //   //  Validate ID format (important)
    //   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Invalid request ID",
    //     });
    //   }

      const request = await RequestLog.findById(id);

      //  Not found
      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      //  Ownership check
      if (
        req.user.role === "Hospital" &&
        request.requestedBy.toString() !== req.user.id
      ) {
        return res.status(403).json({
          success: false,
          message: "Not authorized to view this request",
        });
      }

      res.status(200).json({
        success: true,
        data: request,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

router.put(
  '/:id',
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { status, fulfilledQuantity } = req.body;

    //   //  Validate ID
    //   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Invalid request ID",
    //     });
    //   }

      const request = await RequestLog.findById(id);

      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      // Ownership check
      if (
        req.user.role === "Hospital" &&
        request.requestedBy.toString() !== req.user.id
      ) {
        return res.status(403).json({
          success: false,
          message: "Not authorized",
        });
      }

      //Status transition validation
      const validTransitions = {
        Pending: ["Approved", "Rejected", "Cancelled"],
        Approved: ["Partially Fulfilled", "Fulfilled", "Cancelled"],
        "Partially Fulfilled": ["Fulfilled"],
      };

      if (status && !validTransitions[request.status]?.includes(status)) {
        return res.status(400).json({
          success: false,
          message: `Invalid status transition from ${request.status} to ${status}`,
        });
      }

      //  Update fields
      if (status) request.status = status;

      if (fulfilledQuantity !== undefined) {
        request.fullfilledQuantity = fulfilledQuantity;

        if (fulfilledQuantity >= request.requestedQuantity) {
          request.status = "Fulfilled";
          request.fulfilledAt = new Date();
        } else if (fulfilledQuantity > 0) {
          request.status = "Partially Fulfilled";
        }
      }

      await request.save();

      res.status(200).json({
        success: true,
        data: request,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

router.delete(
  '/:id',
  verifyToken,
  roleGuard(["Admin", "Hospital"]),
  async (req, res) => {
    try {
      const { id } = req.params;

    //   if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Invalid request ID",
    //     });
    //   }

      const request = await RequestLog.findById(id);

      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      //  Ownership check
      if (
        req.user.role === "Hospital" &&
        request.requestedBy.toString() !== req.user.id
      ) {
        return res.status(403).json({
          success: false,
          message: "Not authorized",
        });
      }

      //  Already cancelled
      if (request.status === "Cancelled") {
        return res.status(400).json({
          success: false,
          message: "Request already cancelled",
        });
      }

      request.status = "Cancelled";
      await request.save();

      res.status(200).json({
        success: true,
        message: "Request cancelled successfully",
        data: request,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);