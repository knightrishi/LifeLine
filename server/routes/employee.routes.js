const express = require("express");
const router = express.Router();
const Employee = require("../models/EmployeeDetails");
const verifyToken = require("../middleware/verifyToken");
const roleGuard = require("../middleware/roleGuard");


router.get('/',verifyToken, roleGuard(["Admin", "Hospital"]) ,async (req, res) =>{
   try{ 
      const employees = await Employee.find({}).select("-password")
        
        res.status(200).json({
            success: true,
            count:   employees.length,
            data:    employees
        })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
} )

// ── GET one employee ─────────────────────────────────
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).select("-password")
        
        if (!employee) {
            return res.status(404).json({ message: "No employee found" })
        }

        res.status(200).json({ success: true, data: employee })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── UPDATE employee ──────────────────────────────────
router.put("/:id", verifyToken, async (req, res) => {
    try {
        // Remove password from update — never update password here
        const { password, ...updateData } = req.body

        const employee = await Employee.findByIdAndUpdate(
           req.params.id,
            updateData,
            { new: true }  // ← returns updated document
        ).select("-password")

        if (!employee) {
            return res.status(404).json({ message: "No employee found" })
        }

        res.status(200).json({ success: true, data: employee })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

// ── DELETE employee ──────────────────────────────────
router.delete("/:id", verifyToken, roleGuard("Admin"), async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id)

        if (!employee) {
            return res.status(404).json({ message: "No employee found" })
        }

        res.status(200).json({ success: true, message: "employee Removed" })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})

module.exports = router