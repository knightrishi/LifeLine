const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    hospitalID: {         
        type: String,
        minlength: 6,
        maxlength: 14,
        required: true,
        unique: true
    },
    name: {               
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    hospitalHeadID: {     
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    type: {              
        type: String,
        enum: ["General", "Multi-specialty", "Super-specialty", "Clinic"],
        required: true
    },
    ownership: {         
        type: String,
        maxlength: 50,
        required: true,
    },
    licence: {            
        type: String,
        maxlength: 50,
        required: true
    },
    accreditation: {     
        type: String,
        maxlength: 50,
    },
    accCertificates: {     
        type: [String],
    },
    emgServices: {       
        type: String,
        maxlength: 150,
    },
    //AUTH
        email:{
        type:String,
        required:true,
        minlength:5,
        unique:true,
        lowercase:true
        },
        password:{
            type:String,
            minlength:6,
            required:true
        },

    //Address
    address: {
        type: String,
        maxlength: 150,
        required: true,
    },
    landmark: {
        type: String,
        maxlength: 50,
    },
    cityOrVillage: {
        type: String,
        maxlength: 50,
        required: true,
    },
    pincode: {
        type: String,
        minlength: 6,
        maxlength: 6,
        required: true
    },
    district: {
        type: String,
        maxlength: 50,
        required: true
    },
    state: {
        type: String,
        maxlength: 50,
        required: true
    },
   location: {
        type: { type: String, default: "Point" },
        coordinates: [Number], // [longitude, latitude]
        },
    image: {
        type: String,
        required: true
    },
    status: { 
        type: Number, 
        enum: [0, 1, 2], 
        default: 0 
    }, // 0=Inactive, 1=Active, 2=Suspended
    
    // Contact info
    phoneNo1: {
        type: String,
        maxlength: 15,
        required: true,
    },
    phoneNo2: {
        type: String,
        maxlength: 15,
    },
  
    totalEmp: {
        type: Number,
        max: 1000000,
    },
    reviews: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String }
    }],

});

const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;
