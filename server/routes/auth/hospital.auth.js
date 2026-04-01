const express = require("express");
const router = express.Router();
const Hospital = require("../../models/Hospital");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../middleware/verifyToken");

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone1,
      ownership,
      licence,
      accreditation,
      accCertificates,
      type,
      emgServices,
      address,
      cityOrVillage,
      district,
      state,
      pincode,
      location,
      hospitalID,
      hospitalHeadID,
      phoneNo1,
      phoneNo2,
      totalEmp,
      image,
    } = req.body;

    const existing = await Hospital.exists({ hospitalID });
    if (existing) {
      return res.status(409).json({ message: "Hospital Already Registered" });
    }

    const hospital = await Hospital.create({
      name,
      email,
      password,
      phone1,
      ownership,
      licence,
      accreditation,
      accCertificates,
      type,
      emgServices,
      address,
      cityOrVillage,
      district,
      state,
      pincode,
      location,
      hospitalID,
      hospitalHeadID,
      phoneNo1,
      phoneNo2,
      totalEmp,
      image,
    });

    const token = generateToken(hospital._id, "Hospital", "Hospital");
    const { password: _, ...hospitalData } = hospital.toObject();

    res.status(201).json({
      success: true,
      token,
      data: hospitalData,
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
    const hospital = await Hospital.findOne({ email: normalizedEmail });

    // 4: Unified error (no info leak)
    if (!hospital || !(await hospital.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    //  5: Token
    const token = generateToken(hospital._id, "Hospital", "Hospital");

    const { password: _, ...hospitalData } = hospital.toObject();

    res.status(200).json({
      success: true,
      token,
      data: hospitalData,
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