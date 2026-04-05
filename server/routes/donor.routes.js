const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");
const verifyToken = require("../middleware/verifyToken");
const roleGuard = require("../middleware/roleGuard");


router.get('/', verifyToken, roleGuard(["Admin", "Hospital"]), async (req, res) =>{
   try{ 
      const donors = await Donor.find({}).select("-password")
        
        res.status(200).json({
            success: true,
            count:   donors.length,
            data:    donors
        })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
} )

// ── GET one donor ─────────────────────────────────
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const donor = await Donor.findById(req.params.id).select("-password")
        
        if (!donor) {
            return res.status(404).json({ message: "No donor found" })
        }

        res.status(200).json({ success: true, data: donor })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── UPDATE donor ──────────────────────────────────
router.put("/:id", verifyToken, async (req, res) => {
    try {
        // Remove password from update — never update password here
        const { password, ...updateData } = req.body

        const donor = await Donor.findByIdAndUpdate(
           req.params.id,
            updateData,
            { new: true }  // ← returns updated document
        ).select("-password")

        if (!donor) {
            return res.status(404).json({ message: "No donor found" })
        }

        res.status(200).json({ success: true, data: donor })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── DELETE donor ──────────────────────────────────
router.delete("/:id", verifyToken, roleGuard("Admin"), async (req, res) => {
    try {
        const donor = await Donor.findByIdAndDelete(req.params.id)

        if (!donor) {
            return res.status(404).json({ message: "No donor found" })
        }

        res.status(200).json({ success: true, message: "Donor Removed" })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

module.exports = router