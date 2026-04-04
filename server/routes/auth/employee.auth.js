const express = require("express");
const router = express.Router();

const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../middleware/verifyToken");
//const employee = require("../../models/EmployeeDetails");
const EmployeeDetail = require("../../models/EmployeeDetails");

router.post("/register", async (req, res) => {
  try {
   const {
    empId,
    hospitalId,
    name,
    age,
    gender,
    phone1,
    email,
    password,
    workLocation,
    designation,
    image,
    role,
    shift,
} = req.body

    const existing = await EmployeeDetail.exists({ email });
    if (existing) {
      return res.status(409).json({ message: "Employee Already Registered" });
    }

    const employee = await EmployeeDetail.create({
     empId,
    hospitalId,
    name,
    age,
    gender,
    phone1,
    email,
    password,
    workLocation,
    designation,
    image,
    role,
    shift,
    });

    const token = generateToken(employee._id, "Employee", "Employee");
    const { password: _, ...employeeData } = employee.toObject();

    res.status(201).json({
      success: true,
      token,
      data: employeeData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

//////////////////////////////////////////////////////////////////////////////
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1: Validate input FIRST
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 2: Normalize
    const normalizedEmail = email.toLowerCase();

    // 🔍 Step 3: Fetch hospital
    const employee = await EmployeeDetail.findOne({ email: normalizedEmail });

    // 4: Unified error (no info leak)
    if (!employee || !(await employee.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    //  5: Token
    const token = generateToken(employee._id, "Employee", "Employee");

    const { password: _, ...employeeData } = employee.toObject();

    res.status(200).json({
      success: true,
      token,
      data: employeeData,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


/////////////////////////////////////////////////////////////////////////////////////////////

router.post("/logout", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

module.exports=router;