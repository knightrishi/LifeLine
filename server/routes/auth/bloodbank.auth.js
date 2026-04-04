const express = require("express");
const router = express.Router();

const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../middleware/verifyToken");
const BloodBank = require("../../models/BloodBank");

router.post("/register", async (req, res) => {
  try {
    const {
    bloodBankID, name, type, ownership,
    licence, email, password,
    address, cityOrVillage, pincode,
    district, state,location, phoneNo1, image,
    bankHeadID
} = req.body

    const existing = await BloodBank.exists({ bloodBankID });
    if (existing) {
      return res.status(409).json({ message: "BloodBank Already Registered" });
    }

    const bloodbank = await BloodBank.create({
      bloodBankID, name, type, ownership,
    licence, email, password,
    address, cityOrVillage, pincode,
    district, state,location, phoneNo1, image,
    bankHeadID
    });

    const token = generateToken(bloodbank._id, "BloodBank", "BloodBank");
    const { password: _, ...bloodbankData } = bloodbank.toObject();

    res.status(201).json({
      success: true,
      token,
      data: bloodbankData,
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
    const bloodbank = await BloodBank.findOne({ email: normalizedEmail });

    // 4: Unified error (no info leak)
    if (!bloodbank || !(await bloodbank.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    //  5: Token
    const token = generateToken(bloodbank._id, "BloodBank", "BloodBank");

    const { password: _, ...bloodbankData } = bloodbank.toObject();

    res.status(200).json({
      success: true,
      token,
      data: bloodbankData,
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