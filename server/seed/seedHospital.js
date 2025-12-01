// seed/seedHospital.js
const mongoose = require("mongoose");
const Hospital = require("../models/Hospital.js");

const hospitalsData = [
  {
    _id: new mongoose.Types.ObjectId(),
    hospitalID: "HSP1001",
    name: "Sanjeevani MultiCare Hospital",
    hospitalHeadID: new mongoose.Types.ObjectId(),
    type: "Multi-specialty",
    ownership: "Private",
    licence: "LIC-2025-MP-01",
    accreditation: "NABH",
    accCertificates: ["ISO9001", "QualityCare2024"],
    emgServices: "24x7 Emergency with ICU and Trauma Center",
    address: "Sector 5, Arera Colony",
    landmark: "Near DB Mall",
    cityOrVillage: "Bhopal",
    pincode: "462016",
    district: "Bhopal",
    state: "Madhya Pradesh",
    coordinates: { latitude: 23.2599, longitude: 77.4126 },
    image: "hospital1.jpg",
    phoneNo1: "9876543210",
    phoneNo2: "9753124680",
    email: "info@sanjeevani-mc.in",
    totalEmp: 250,
    reviews: [
      {
        userId: new mongoose.Types.ObjectId(),
        rating: 5,
        comment: "Excellent facilities and staff.",
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    hospitalID: "HSP1002",
    name: "CityCare General Hospital",
    hospitalHeadID: new mongoose.Types.ObjectId(),
    type: "General",
    ownership: "Government",
    licence: "LIC-2025-MP-02",
    accreditation: "NABH",
    accCertificates: ["CleanHealth2023"],
    emgServices: "24-hour Emergency & Ambulance Services",
    address: "Hamidia Road",
    landmark: "Opposite Old Bus Stand",
    cityOrVillage: "Bhopal",
    pincode: "462001",
    district: "Bhopal",
    state: "Madhya Pradesh",
    coordinates: { latitude: 23.2591, longitude: 77.4090 },
    image: "hospital2.jpg",
    phoneNo1: "9998877665",
    phoneNo2: "9823456712",
    email: "support@citycare.in",
    totalEmp: 320,
    reviews: [
      {
        userId: new mongoose.Types.ObjectId(),
        rating: 4,
        comment: "Good public healthcare facilities.",
      },
    ],
  },
  // 💡 Add more hospitals here as needed
];

async function seedHospitals() {
  try {
    // 1️⃣ Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/LifeLine");
    console.log("✅ MongoDB Connected");

    // 2️⃣ Clear old data
    await Hospital.deleteMany({});
    console.log("🧹 Cleared existing hospital data");

    // 3️⃣ Insert new data
    const result = await Hospital.insertMany(hospitalsData);
    console.log(`🏥 ${result.length} hospitals inserted successfully!`);

  } catch (err) {
    console.error("❌ Error seeding hospitals:", err);
  } finally {
    // 4️⃣ Close connection
    await mongoose.connection.close();
    console.log("🔒 Connection closed");
  }
}

// Run the seeder
seedHospitals();
