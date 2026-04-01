const express = require("express");
const router = express.Router();
const Donor = require("../../models/Donor");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../middleware/verifyToken");

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone1,
      bloodGroup,
      gender,
      age,
      weight,
      address,
      cityOrVillage,
      district,
      state,
      pincode,
      idProof,
      idProofNo,
      image,
    } = req.body;

    const existing = await Donor.exists({ email });
    if (existing) {
      return res.status(409).json({ message: "Email is already registerd." });
    }

    const donor = await Donor.create({
      name,
      email,
      password,
      phone1,
      bloodGroup,
      gender,
      age,
      weight,
      address,
      cityOrVillage,
      district,
      state,
      pincode,
      idProof,
      idProofNo,
      image,
    });

    const token = generateToken(donor._id, "Donor", "Donor");
    const { password: _, ...donorData } = donor.toObject();

    res.status(201).json({
      success: true,
      token,
      data: donorData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
      // 1:Validate

      if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    //2 Normalise
    const normalizedEmail = email.toLowerCase();
    //3.FInd user

    const donor = await Donor.findOne({email: normalizedEmail });
    if (!donor || !(await donor.matchPassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    

    

    const token = generateToken(donor._id, "Donor", "Donor");
    const { password: _, ...donorData } = donor.toObject();

    res.status(200).json({
      success: true,
      token,
      data: donorData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////


router.post("/logout", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

////////////////////////////////////////////////////////////////////////////////////////////




module.exports = router;

//You fill a registration form
//Bank gives you back a receipt--DOnor data is that recepit
