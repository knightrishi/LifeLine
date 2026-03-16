const jwt=require("jsonwebtoken")

function generateToken(id, role, entity){
    return jwt.sign(
        {id,role,entity},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRE || "7d"}
    )
}

module.exports= generateToken;