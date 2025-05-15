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

| Category       | Technologies Used               |
|----------------|---------------------------------|
| Frontend       | React.js, Redux, Tailwind CSS   |
| Backend        | Node.js, Express.js, MongoDB    |
| Authentication | JWT, Bcrypt, OAuth (Google)     |
| Payments       | Razorpay API                    |
| Cloud Storage  | Cloudinary                      |
| Real-Time      | Socket.io, WebRTC               |
| DevOps         | Docker, AWS EC2, GitHub Actions |
| Design         | Figma                           |

---

## 🚀 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas
- Razorpay & Cloudinary API Keys

### 🔧 Backend Setup
```bash
cd backend
npm run server
cp .env.example .env  # Configure environment variables
npm start


###💻 Frontend Setup
```bash
cd frontend
npm install
npm start
🌐 Environment Variables
📁 .env (Backend)
env
Copy
Edit
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
📜 License
MIT License

🤝 Contributing
PRs are welcome! See CONTRIBUTING.md

Made with ❤️ by [Your Name]