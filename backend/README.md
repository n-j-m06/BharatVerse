# ⚙️ BHARATMIND Backend
### India's AI Digital Twin & Decision Intelligence Platform

> **BHARATMIND** is an AI-powered backend platform that enables intelligent decision-making through Digital Twin technology, multi-agent AI, predictive analytics, and government-focused simulation services.

This repository contains the backend services built using **FastAPI**, powering the BHARATMIND platform with secure authentication, AI orchestration, digital twin APIs, analytics, disaster prediction, and real-time communication.

---

# 🚀 Features

## 🔐 Authentication & Security

- JWT-based Authentication
- User Registration & Login
- Secure Password Hashing (bcrypt)
- SQLite Database Integration
- Protected API Routes
- Role-Based User Support

---

## 🌍 Digital Twin Services

- Digital Twin State API
- Dynamic City Data
- Heatmap Generation
- Map Layer APIs
- Weather Information
- Timeline Simulation
- Sustainability Indicators

---

## 🤖 AI Services

- AI Chat Assistant
- Multi-Agent Simulation Engine
- Recommendation Engine
- AI Agent Orchestration
- Scenario Simulation
- Explainable AI Responses
- WebSocket Live AI Updates

---

## 📊 Analytics

- National KPI Dashboard
- Sustainability Metrics
- SDG Dashboard
- Analytics Dashboard
- Leaderboard
- Simulation History

---

## 🚨 Disaster Intelligence

- Flood Risk Prediction
- Heatwave Prediction
- Cyclone Risk
- Drought Risk
- Earthquake Risk

---

## 📡 Citizen Services

- Citizen Reporting APIs
- Notification Service
- Simulation History
- Recommendation APIs

---

# 🏗️ Tech Stack

## Backend

- FastAPI
- Python 3.12
- Uvicorn

## Database

- SQLite
- SQLAlchemy ORM

## Authentication

- JWT
- bcrypt
- Passlib

## AI

- Google Gemini API
- Multi-Agent Architecture
- AI Orchestration Engine

## Documentation

- Swagger UI
- OpenAPI

---

# 📁 Project Structure

```text
backend/
│
├── app/
│   ├── api/
│   ├── agents/
│   ├── database/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   └── main.py
│
├── requirements.txt
├── .env
└── README.md
```

---

# 🔑 Authentication Flow

```
User
   │
   ▼
Signup/Login
   │
SQLite Database
   │
JWT Token
   │
Protected APIs
```

---

# 🌐 API Modules

## Authentication

```
POST /auth/signup
POST /auth/login
```

---

## Dashboard

```
GET /dashboard
```

---

## AI Chat

```
POST /chat
```

---

## Simulation

```
POST /simulation/run
GET /history
```

---

## Digital Twin

```
GET /digital-twin
GET /heatmap
GET /layers
```

---

## Weather

```
GET /weather
```

---

## Analytics

```
GET /analytics
GET /kpi
GET /leaderboard
```

---

## Sustainability

```
GET /sdg
```

---

## Timeline

```
GET /timeline
```

---

## Recommendations

```
GET /recommendation
```

---

## Notifications

```
GET /notifications
```

---

## Disaster Prediction

```
GET /disaster/predict
```

---

## Policy Analysis

```
POST /policy/analyze
```

---

## Citizen Reports

```
POST /report
```

---

# 🤖 Multi-Agent Architecture

BHARATMIND follows a modular multi-agent AI architecture.

Current agents include:

- 🌱 Climate Agent
- 🚦 Traffic Agent
- ⚡ Energy Agent
- 💰 Economy Agent
- 🌍 Sustainability Agent

Each agent independently evaluates simulation parameters before contributing to a unified recommendation.

---

# 🔄 Simulation Workflow

```
User Request
      │
      ▼
Scenario API
      │
      ▼
AI Orchestrator
      │
 ┌────┼────┐
 ▼    ▼    ▼
Climate Traffic Economy
 ▼    ▼    ▼
 Energy Sustainability
      │
      ▼
Consensus Engine
      │
      ▼
Simulation Result
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to backend

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the server

```bash
uvicorn app.main:app --reload
```

---

# 📖 API Documentation

Swagger UI

```
http://127.0.0.1:8000/docs
```

ReDoc

```
http://127.0.0.1:8000/redoc
```

---

# 🎯 Future Scope

- PostgreSQL Migration
- Neo4j Knowledge Graph
- ChromaDB Vector Search
- CrewAI Integration
- LangGraph Workflow Engine
- Real-Time GIS Layers
- Google Earth Engine Integration
- Government Open Data APIs
- Satellite Imagery Processing
- Predictive AI Models
- Advanced Explainable AI
- Azure Cloud Deployment

---

# 👨‍💻 Contributors

**Backend Development**

- Team BharathVerse

---

# 📄 License

This project was developed as part of an AI Hackathon prototype and is intended for research, innovation, and educational purposes.

---

# 🌟 Vision

**"Empowering governments, industries, and citizens with AI-driven Digital Twin technology to simulate the future, make informed decisions, and build a smarter, more sustainable India."**
