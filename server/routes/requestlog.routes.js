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
);

