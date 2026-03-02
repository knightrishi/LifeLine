const mongoose=require("mongoose")

const connectDB =async () =>{
try{
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log("DB CONNECTED");
}catch(error){
    console.error(`Error ${error.message}`);
    process.exit(1);    //for killing the server
}
}

module.exports = connectDB;