const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require('./config/db.js');
const employeeAuthRoutes = require("./routes/auth/employee.auth.js")
const donorAuthRoutes = require("./routes/auth/donor.auth.js");
const hospitalAuthRoutes = require("./routes/auth/hospital.auth.js")
const bloodbankAuthRoutes = require("./routes/auth/bloodbank.auth.js")
const donorRoutes = require("./routes/donor.routes.js")
const hospitalRoutes = require("./routes/hospital.routes.js")
const bloodBankRoutes  = require("./routes/bloodbank.routes.js")
const employeeRoutes   = require("./routes/employee.routes.js")
const requestRoute=require('./routes/requestlog.routes.js')



connectDB();

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());
app.use(morgan("dev")); 
app.get("/", (req,res) => {
    res.json({
    success: true,
    message: "🩸 Life Line API is running!",
    version: "1.0.0",
    })
})



// Auth routes
app.use("/api/auth/donor", donorAuthRoutes);
app.use("/api/auth/hospital", hospitalAuthRoutes);
app.use("/api/auth/employee", employeeAuthRoutes)
app.use("/api/auth/bloodbank", bloodbankAuthRoutes)


//CRUD Routes
app.use("/api/donor", donorRoutes)
app.use("/api/hospital", hospitalRoutes)
app.use("/api/bloodbank",  bloodBankRoutes)
app.use("/api/employee",   employeeRoutes)
app.use("/api/request", requestRoute)




app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});