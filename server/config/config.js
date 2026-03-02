module.exports = {
  BLOOD_GROUPS: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],

  USER_ROLES: {
    DONOR: "donor",
    HOSPITAL: "hospital",
    BLOOD_BANK: "bloodBank",
    ADMIN: "admin",
  },

  REQUEST_STATUS: {
    PENDING: "pending",
    APPROVED: "approved",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    EXPIRED: "expired",
  },

  URGENCY_LEVELS: {
    ROUTINE: "routine",
    URGENT: "urgent",
    EMERGENCY: "emergency",
  },

  INVENTORY_STATUS: {
    SURPLUS: "surplus",     // Green on heatmap
    MODERATE: "moderate",   // Yellow on heatmap
    SHORTAGE: "shortage",   // Red on heatmap
  },

  // Donors can donate whole blood every 56 days (8 weeks)
  DONATION_COOLDOWN_DAYS: 56,

  // Min hemoglobin to be eligible (g/dL)
  MIN_HEMOGLOBIN: 12.5,
};