const mongoose=require("mongoose")

const connectDB =async () =>{
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI not found in .env");
        process.exit(1);
    }
try{
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`DB Connected: ${conn.connection.host}`)
}catch(error){
    console.error(`Error ${error.message}`);
    process.exit(1);    //for killing the server
}
}

module.exports = connectDB;