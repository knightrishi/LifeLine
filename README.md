# 🩸 Life Line – Smart Blood Donation Management System

> A full-stack MERN application that connects **blood donors, recipients, hospitals, ambulances, and NGOs** through a centralized platform for real-time blood donation, emergency requests, and inventory management.

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-02569B?style=for-the-badge)

---

## 📖 About the Project

**Life Line** is a web-based blood donation management platform built using the **MERN Stack**. The platform digitizes the complete blood donation workflow by connecting donors, hospitals, recipients, ambulances, and NGOs through a secure, centralized system.

It enables **real-time emergency blood requests**, **intelligent donor matching**, **inventory tracking**, and **predictive demand forecasting**, ensuring faster coordination and improved availability of blood during emergencies.

Designed with a cloud-backed architecture, Life Line is accessible from any browser and supports seamless communication between all stakeholders.

---

## ✨ Features

- 🩸 Real-time emergency blood request management.
- 👥 Smart donor matching based on blood group, location, and eligibility.
- 📅 Automatic donor scheduling with next eligible donation date calculation.
- 🔔 Email, SMS, and WhatsApp reminders for upcoming donation eligibility.
- 🏥 Hospital blood inventory management dashboard.
- 📊 Live inventory heatmap showing blood availability across hospitals.
- 📈 Predictive analytics to forecast blood demand and scarcity trends.
- 🔗 Public REST APIs for hospitals, ambulances, and NGOs to synchronize blood inventories.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **API** | RESTful APIs |
| **Authentication** | JWT *(or your authentication method)* |
| **Notifications** | Email, SMS, WhatsApp Integration |

---

## 🏗️ System Architecture

```text
                +-----------------------+
                |      React Client     |
                +-----------+-----------+
                            |
                            v
                +-----------------------+
                |  Express REST Server  |
                +-----------+-----------+
                            |
        -------------------------------------------
        |          |            |                 |
        v          v            v                 v
   Donor Service Recipient  Hospital Service   Public APIs
      Matching     Requests     Inventory      NGOs/Ambulances
        |              |            |                 |
        -----------------------------------------------
                            |
                            v
                   +------------------+
                   |     MongoDB      |
                   | Users • Blood    |
                   | Requests • Stock |
                   +------------------+

            Notification Service
      Email • SMS • WhatsApp Alerts
```

---

## ⚙️ Core Modules

### 👤 Donor Management
- Donor registration and authentication.
- Blood group and location-based donor profiles.
- Donation history and eligibility tracking.

### 🚑 Emergency Blood Requests
- Recipients can raise emergency blood requests.
- Nearby eligible donors are matched automatically.
- Request status is updated in real time.

### 🏥 Hospital Dashboard
- Manage blood stock inventory.
- Approve and fulfill blood requests.
- Track incoming and outgoing blood units.

### 📅 Smart Donation Scheduler
- Automatically calculates the donor's next eligible donation date.
- Sends reminders through Email, SMS, and WhatsApp before eligibility.

### 📊 Predictive Analytics
- Forecasts future blood demand using historical donation and request data.
- Detects potential blood shortages.
- Helps hospitals plan donation drives proactively.

### 🌍 Live Inventory Heatmap
- Visualizes blood availability across connected hospitals.
- Displays shortages and surplus blood groups using dynamic maps and charts.

---

## 🔌 REST API Highlights

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/donors/register` | Register a new donor. |
| `POST` | `/api/requests` | Create an emergency blood request. |
| `GET` | `/api/inventory` | Retrieve hospital blood inventory. |
| `PUT` | `/api/inventory/:id` | Update blood stock. |
| `GET` | `/api/heatmap` | Fetch live inventory heatmap data. |
| `GET` | `/api/public/inventory` | Public API for hospitals and NGOs. |

---

## 📂 Project Structure

```bash
life-line/
│── client/                 # React Frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
│── server/                 # Node + Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   └── config/
│
├── package.json
└── README.md
```

---

## 🚀 Key Highlights

- Full-stack **MERN** architecture.
- Intelligent donor eligibility scheduling.
- Real-time emergency blood request workflow.
- Predictive analytics for blood demand forecasting.
- Live inventory visualization across multiple hospitals.
- REST APIs for third-party healthcare integration.
- Cloud-ready and scalable backend design.

---

## 🎯 Use Cases

- Hospitals and blood banks.
- Emergency blood request management.
- Ambulance and NGO blood coordination.
- City-wide blood inventory monitoring.
- Blood donation campaign planning and analytics.

---

## 👨‍💻 Author

**Arnav Singh**

B.Tech CSE • Full Stack MERN Developer • Backend & AI Enthusiast
