
const Donor=require('../models/Donor')
//const Request=require('../models/RequestLog')

async function findMatchingDonors(request){
    try{
        const {requiredBloodType, location}=request;
        
        if (!location || !location.coordinates) {
            throw new Error("Invalid request location");
        }

        const donors=await Donor.find({
            bloodGroup: requiredBloodType,
            status: 1,
            nextEligibleDate: { $lte: new Date() },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: location.coordinates
                    },
                    $maxDistance: 20000
                }
            }
        })
        .limit(10);
        
        return donors;

    }catch(err){
  console.error("MatchService Error:", err);
    throw err;
    }
}
module.exports = findMatchingDonors;