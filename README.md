# 🌐 Spam Email Detection Frontend

A **modern and responsive frontend application** built using React that allows users to check whether an email is **Spam or Not Spam** by interacting with a Machine Learning backend API.

This UI provides a clean and user-friendly interface for real-time spam detection.

---

## 🚀 Features

🎯 **Interactive User Interface**

* Simple input box to enter email text

⚡ **Real-Time Prediction**

* Instantly communicates with backend API

🔗 **API Integration**

* Seamlessly connects with Flask backend

📱 **Responsive Design**

* Works smoothly on desktop, tablet, and mobile

🎨 **Clean UI/UX**

* Minimal and modern design for better user experience

---

## 🏗️ Tech Stack

| Category       | Technology Used  |
| -------------- | ---------------- |
| **Frontend**   | React (Vite)     |
| **Language**   | JavaScript       |
| **Styling**    | CSS              |
| **API Calls**  | Axios            |
| **Deployment** | Vercel           |

---

## 📡 API Integration

### 🔹 Backend Endpoint

```id="7kz9pl"
POST /predict
```

### 📥 Request Sent

```json id="k92xqp"
{
  "email": "Sample email text entered by user"
}
```

### 📤 Response Received

```json id="d82mka"
{
  "prediction": "Spam" or "Not Spam"
}
```

---

## 🧠 How It Works

1. 🧑‍💻 **User Input**
   User enters email content in the input field

2. 📡 **API Call**
   Frontend sends request to backend API

3. 🔄 **Processing**
   Backend processes the text using ML model

4. 📊 **Prediction Display**
   Result (Spam / Not Spam) is shown on UI

---

## 💡 Example Workflow

```id="x1pzql"
User Input → React UI → API Request → Backend → ML Model → Response → UI Display
```

---



## 🌐 Live Demo

<p align="center">
  <a href="https://spam-email-detection-frontend.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen?style=for-the-badge">
  </a>
</p>







