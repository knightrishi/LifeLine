const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    donarId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor",
        required: true,
    },
    lastDonation: {
        type: Date,
        required: true
    },
    lastDonationQuantity: {
        type: Number,
        min: 0,
        required: true
    },
    totalDonation: {
        type: Number,
        default: 0,
    },
    nextEligibleDate: {
        type: Date,
        required: true
    },
    placeName: {
        type: String,
        maxlength: 100,
        required: true,
    },
    location: {
        latitude: { type: Number },
        longitude: { type: Number },
    },
    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeDetail",
    },
    lifeSaved: {
        type: Number,
        default: 0,
    },
    remarks: {
        type: String,
        maxlength: 150
    },
    verifiedBy: {   //Employye Id Who takes the blood
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["Recorded", "Verified", "Rejected"],
        default: "Recorded"
    }

});

const DonorLog = mongoose.model("DonorLog", logSchema);
module.exports = DonorLog;