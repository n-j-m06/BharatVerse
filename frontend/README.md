# BharatVerse Frontend

> A modern React-based frontend for BharatVerse, an AI-Powered Digital Twin & Decision Intelligence Platform designed to support smarter governance, disaster management, urban planning, and real-time policy decision making.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-CSS-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

# Table of Contents

- Introduction
- Overview
- Objectives
- Features
- Technology Stack
- Project Architecture
- Folder Structure
- Application Modules
- User Interface
- Routing
- API Integration
- Project Setup
- Environment Variables
- Build Instructions
- Deployment
- Future Scope
- Contributors
- License

---

# Introduction

BharatVerse is a next-generation AI-powered Digital Twin platform that assists governments, emergency authorities, policy makers, and administrators in making data-driven decisions through intelligent simulations and interactive dashboards.

The frontend provides a responsive command center capable of displaying real-time insights, disaster intelligence, AI-generated recommendations, and analytics through an intuitive interface.

Built using React and Tailwind CSS, the application communicates seamlessly with the FastAPI backend through REST APIs and WebSockets.

---

# Overview

The frontend serves as the visualization layer of BharatVerse.

Its responsibilities include:

- Displaying AI-generated analytics
- Managing user authentication
- Presenting Digital Twin visualizations
- Displaying simulation results
- Providing interactive dashboards
- Visualizing disaster intelligence
- Presenting AI recommendations
- Monitoring national KPIs
- Displaying notifications and reports

The interface is designed to resemble a centralized command center for intelligent governance.

---

# Objectives

The primary objectives of the frontend are:

- Provide a clean and responsive user interface
- Present complex AI insights in an understandable way
- Support real-time communication with backend services
- Offer interactive dashboards
- Visualize multiple AI modules simultaneously
- Improve usability through modular design
- Maintain scalability for future enhancements

---

# Features

## Dashboard

- National Command Center
- Live KPIs
- Connected Cities
- AI Agent Status
- Citizen Reports
- Weather Overview
- Notifications
- Risk Alerts

---

## AI Simulation

- Launch AI simulations
- Scenario selection
- Live simulation progress
- Agent status monitoring
- Confidence scoring
- AI recommendations

---

## AI Assistant

- Conversational AI interface
- Natural language interaction
- Intelligent responses
- Policy guidance

---

## Digital Twin

- Interactive map
- Heatmaps
- Weather visualization
- Infrastructure layers
- Geographic analytics

---

## Disaster Intelligence

Supports visualization for

- Flood Risk
- Cyclone Risk
- Heatwave Risk
- Drought Risk
- Earthquake Risk

---

## Analytics

- Interactive charts
- Trend analysis
- National KPIs
- SDG dashboards
- Performance metrics

---

## Governance

- Policy Analysis
- Citizen Reports
- Notification Center
- Timeline
- Simulation History

---

# Technology Stack

## Frontend Framework

- React 19

## Build Tool

- Vite

## Styling

- Tailwind CSS

## Routing

- React Router DOM

## HTTP Client

- Axios

## Icons

- Lucide React

## Animation

- Framer Motion

---

# Project Architecture

```
User

↓

React Application

↓

Pages

↓

Components

↓

Services

↓

REST APIs / WebSockets

↓

FastAPI Backend

↓

Database + AI Agents
```

---

# Folder Structure

```
frontend/

│

├── public/

│

├── src/

│ ├── assets/

│ ├── components/

│ ├── context/

│ ├── hooks/

│ ├── pages/

│ ├── services/

│ ├── utils/

│ ├── App.jsx

│ ├── AppRoutes.jsx

│ ├── main.jsx

│ └── index.css

│

├── package.json

├── vite.config.js

└── README.md
```

---

# Major Components

## Navbar

Provides

- Branding
- Search
- Weather Information
- Notifications
- User Profile

---

## Sidebar

Navigation for

- Dashboard
- AI Assistant
- Simulation
- Digital Twin
- Analytics
- Disaster
- Notifications
- Reports

---

## Dashboard

Displays

- KPIs
- AI Status
- Analytics
- Weather
- Notifications
- Map
- Quick Actions

---

## AI Simulation

Responsible for

- Simulation configuration
- AI execution
- Results
- Recommendations

---

## Digital Twin

Responsible for

- Geographic visualization
- Heatmaps
- Environmental monitoring

---

## Analytics

Responsible for

- Charts
- KPIs
- Historical trends

---

# Routing

The application uses React Router DOM.

Primary routes include

```
/

login

signup

dashboard

simulation

chat

digital-twin

analytics

policy-analysis

citizen-report

notifications

simulation-history
```

---

# API Integration

The frontend communicates with FastAPI using REST APIs.

Examples include

```
POST /login

POST /signup

GET /dashboard

POST /simulation/run

GET /analytics

GET /digital-twin

GET /notifications

GET /timeline

POST /chat
```

---

# State Management

React Hooks are used throughout the application.

Primary hooks include

- useState
- useEffect
- useNavigate
- useLocation

---

# Styling

The interface is built using Tailwind CSS.

Design principles

- Dark Theme
- Responsive Layout
- Glassmorphism
- Card-based UI
- Consistent Typography
- Smooth Animations

---

# Installation

Clone repository

```bash
git clone https://github.com/yourusername/bharatverse-frontend.git
```

Move into project

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# Environment Variables

Create

```
.env
```

Example

```
VITE_API_URL=http://localhost:8000
```

Production

```
VITE_API_URL=https://your-backend.onrender.com
```

---

# Build

Development

```bash
npm run dev
```

Production

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# Browser Support

- Google Chrome
- Microsoft Edge
- Firefox
- Safari

---

# Performance Optimizations

- Lazy Loading
- Modular Components
- Optimized Routing
- Responsive Design
- Tailwind Utility Classes
- Lightweight Icons
- Efficient API Calls

---

# Future Enhancements

- Live Satellite Integration
- GIS Layers
- Voice Assistant
- AI Report Generator
- Multi-language Support
- Offline Dashboard
- Progressive Web App
- Dark/Light Themes
- Advanced Analytics
- Real-Time IoT Integration

---

# Screenshots

You may include screenshots here.

```
Dashboard

Simulation

Analytics

Digital Twin

AI Assistant

Disaster Dashboard
```

---


# License

This project is licensed under the MIT License.

---

# Acknowledgements

- React
- Vite
- Tailwind CSS
- FastAPI
- Google Gemini API
- Lucide React
- Open Source Community
