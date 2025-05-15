# DocSeek - Telemedicine Platform 🏥💻

A Full-Stack MERN-based Telemedicine Web App with Mobile Responsiveness, Secure Payments (Razorpay), Cloud-Based Media Storage (Cloudinary), and RESTful APIs.

🚀 **Live Demo:** [Coming Soon]  
📱 **Figma Design:** [View Prototype](#)

---

## ✨ Features

### 🔹 Patient Features
- User Authentication (JWT-based secure login/signup)
- Doctor Search & Booking (Specialty, Availability, Ratings)
- Video Consultations (WebRTC Integration)
- E-Prescriptions & Medical Records (PDF Downloadable)
- Secure Payments (Razorpay Integration)
- Appointment Management (Cancellation, Rescheduling)

### 🔹 Doctor Features
- Profile Management (Verification, Bio, Specialization)
- Appointment Scheduling (Calendar Sync)
- E-Prescription Generation (Digital Signatures)
- Video Consultations (Real-time Chat & Call)
- Earnings Dashboard (Razorpay Payouts)

### 🔹 Admin Features
- User & Doctor Verification
- Analytics Dashboard (Appointments, Revenue)
- Content Management (Blogs, FAQs)
- Support Ticket System

---

## 🛠 Tech Stack

| Category       | Technologies Used                          |
|----------------|-------------------------------------------|
| Frontend       | React.js, Redux, Tailwind CSS, Material-UI |
| Backend        | Node.js, Express.js, MongoDB (Mongoose)  |
| Authentication | JWT, Bcrypt, OAuth (Google)                |
| Payments       | Razorpay API                              |
| Cloud Storage  | Cloudinary (Medical Reports, Profile Pics)|
| Real-Time      | Socket.io (Chat), WebRTC (Video Calls)    |
| DevOps         | Docker, AWS EC2, GitHub Actions (CI/CD)  |
| Design         | Figma (UI/UX Prototype)                    |

---

## 📸 Screenshots

| Patient Dashboard | Doctor Profile | Video Consultation |
|-------------------|----------------|--------------------|
| ![Patient Dashboard](path-to-image) | ![Doctor Profile](path-to-image) | ![Video Consultation](path-to-image) |

---

## 🚀 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas (or Local)
- Razorpay & Cloudinary API Keys 🔑

### 🔧 Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Configure environment variables
npm start
```

### 💻  Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🌐 Environment Variables
## 📁 .env (Backend)
```bash
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
### 🔌 API Endpoints (RESTful)
| Endpoint                     | Method | Description                     |
| ---------------------------- | ------ | ------------------------------- |
| `/api/auth/signup`           | POST   | Patient/Doctor Registration     |
| `/api/auth/login`            | POST   | JWT-based Login                 |
| `/api/appointments`          | POST   | Book Appointment                |
| `/api/payments/create-order` | POST   | Razorpay Payment Initialization |
| `/api/doctors/search`        | GET    | Filter Doctors by Specialty     |



### 📜 License
MIT License

### 💡 Future Enhancements
AI-Powered Symptom Checker

Multi-Language Support

Mobile App (React Native)

Blockchain for Medical Records

### 🤝 Contributing
PRs are welcome! Check out CONTRIBUTING.md.

### 📞 Contact
📧 Email: Ujjwalkumargrd3@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/ujjwalKumar09


### ⭐ Star this repo if you like it! ⭐


Made with ❤️ by Ujjwal Kumar | SDE

### 🎨 UI Preview (Figma)
🔗 Figma Design Link


