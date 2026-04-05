const express = require("express");
const router = express.Router();
const Hospital = require("../models/Hospital");
const verifyToken = require("../middleware/verifyToken");
const roleGuard = require("../middleware/roleGuard");


router.get('/', async (req, res) =>{
   try{ 
      const hospitals = await Hospital.find({}).select("-password")
        
        res.status(200).json({
            success: true,
            count:   hospitals.length,
            data:    hospitals
        })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
} )

// ── GET one hospital ─────────────────────────────────
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const hospital = await Hospital.findById(req.params.id).select("-password")
        
        if (!hospital) {
            return res.status(404).json({ message: "No hospital found" })
        }

        res.status(200).json({ success: true, data: hospital })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── UPDATE hospital ──────────────────────────────────
router.put("/:id", verifyToken, async (req, res) => {
    try {
        // Remove password from update — never update password here
        const { password, ...updateData } = req.body

        const hospital = await Hospital.findByIdAndUpdate(
           req.params.id,
            updateData,
            { new: true }  // ← returns updated document
        ).select("-password")

        if (!hospital) {
            return res.status(404).json({ message: "No hospital found" })
        }

        res.status(200).json({ success: true, data: hospital })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── DELETE hospital ──────────────────────────────────
router.delete("/:id", verifyToken, roleGuard("Admin"), async (req, res) => {
    try {
        const hospital = await Hospital.findByIdAndDelete(req.params.id)

        if (!hospital) {
            return res.status(404).json({ message: "No hospital found" })
        }

        res.status(200).json({ success: true, message: "hospital Removed" })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

module.exports = router