const sendEmail = require("../utils/sendEmail");

async function notifyDonors(donors, request) {
  try {
    for (const donor of donors) {
    await sendEmail(
  donor.email,
  "🚨 Blood Donation Request",
  `
Hello ${donor.name},

The hospital urgently needs blood.

Blood Type: ${request.requiredBloodType}
Component: ${request.requiredComponent}
Quantity: ${request.requestedQuantity}
Address: ${request.address}

Please consider donating.

- LifeLine Team
  `
);
    }

    return true;

  } catch (err) {
    console.error("AlertService Error:", err);
    throw err;
  }
}

module.exports = notifyDonors;