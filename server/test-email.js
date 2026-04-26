require("dotenv").config();
const sendEmail = require("./utils/sendEmail");

async function test() {
  console.log("Attempting to send test email...");
  try {
    await sendEmail(
      "1205arnav.singh@gmail.com", 
      "LifeLine Test Email ",
      "Hello! If you are reading this, your Nodemailer is working perfectly!"
    );
    console.log(" SUCCESS! Check your inbox.");
  } catch (error) {
    console.error(" FAILED to send email.");
    console.error(error);
  }
}

test();
