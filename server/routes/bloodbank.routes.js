const express = require("express");
const router = express.Router();
const BloodBank = require("../models/BloodBank");
const verifyToken = require("../middleware/verifyToken");
const roleGuard = require("../middleware/roleGuard");


router.get('/', async (req, res) =>{
   try{ 
      const bloodbanks = await BloodBank.find({}).select("-password")
        
        res.status(200).json({
            success: true,
            count:   bloodbanks.length,
            data:    bloodbanks
        })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
} )

// ── GET one bloodbank ─────────────────────────────────
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const bloodbank = await BloodBank.findById(req.params.id).select("-password")
        
        if (!bloodbank) {
            return res.status(404).json({ message: "No bloodbank found" })
        }

        res.status(200).json({ success: true, data: bloodbank })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── UPDATE bloodbank ──────────────────────────────────
router.put("/:id", verifyToken, async (req, res) => {
    try {
        // Remove password from update — never update password here
        const { password, ...updateData } = req.body

        const bloodbank = await BloodBank.findByIdAndUpdate(
           req.params.id,
            updateData,
            { new: true }  // ← returns updated document
        ).select("-password")

        if (!bloodbank) {
            return res.status(404).json({ message: "No bloodbank found" })
        }

        res.status(200).json({ success: true, data: bloodbank })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── DELETE bloodbank ──────────────────────────────────
router.delete("/:id", verifyToken, roleGuard("Admin"), async (req, res) => {
    try {
        const bloodbank = await BloodBank.findByIdAndDelete(req.params.id)

        if (!bloodbank) {
            return res.status(404).json({ message: "No bloodbank found" })
        }

        res.status(200).json({ success: true, message: "bloodbank Removed" })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

module.exports = router