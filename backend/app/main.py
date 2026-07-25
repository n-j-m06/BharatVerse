from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.simulation import router as simulation_router
from app.api.dashboard import router as dashboard_router
from app.api.auth import router as auth_router
from app.api.compare import router as compare_router
from app.api.report import router as report_router
from app.api.digital_twin import router as twin_router
from app.api.heatmap import router as heatmap_router
from app.api.weather import router as weather_router
from app.api.notifications import router as notification_router
from app.api.policy import router as policy_router
from app.api.chat import router as chat_router
from app.api.timeline import router as timeline_router
from app.api.analytics import router as analytics_router
from app.api.agent_status import router as agent_router
from app.api.sdg import router as sdg_router
from app.api.leaderboard import router as leaderboard_router
from app.api.layers import router as layers_router
from app.api.ws import router as ws_router
from app.api.disaster import router as disaster_router

from app.database.database import engine
from app.database.models import Base

app = FastAPI(
    title="BHARATVERSE API",
    version="1.0.0",
    swagger_ui_parameters={
        "persistAuthorization": True
    }
)

# -----------------------------
# CORS Configuration
# -----------------------------
origins = [
    "http://localhost:5173",  # Local development
    "https://bharatverse.vercel.app",  # Replace with your actual Vercel URL after deployment
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# API Routes
# -----------------------------
app.include_router(auth_router)
app.include_router(simulation_router)
app.include_router(dashboard_router)
app.include_router(compare_router)
app.include_router(report_router)
app.include_router(twin_router)
app.include_router(heatmap_router)
app.include_router(weather_router)
app.include_router(notification_router)
app.include_router(policy_router)
app.include_router(chat_router)
app.include_router(timeline_router)
app.include_router(analytics_router)
app.include_router(agent_router)
app.include_router(sdg_router)
app.include_router(leaderboard_router)
app.include_router(layers_router)
app.include_router(ws_router)
app.include_router(disaster_router)

# -----------------------------
# Root Endpoint
# -----------------------------
@app.get("/")
def home():
    return {
        "message": "BharatVerse Backend Running 🚀",
        "status": "online",
        "docs": "/docs",
        "version": "1.0.0"
    }

# -----------------------------
# Create Database Tables
# -----------------------------
Base.metadata.create_all(bind=engine)