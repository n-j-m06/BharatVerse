from fastapi import APIRouter, WebSocket
import asyncio

router = APIRouter(tags=["WebSocket"])

@router.websocket("/ws/simulation")
async def simulation(websocket: WebSocket):

    await websocket.accept()

    messages = [

        "🌍 Loading Digital Twin...",

        "🌦 Climate Agent analysing weather...",

        "🚦 Traffic Agent analysing congestion...",

        "⚡ Energy Agent analysing power grid...",

        "💰 Economy Agent estimating GDP impact...",

        "🌱 Sustainability Agent calculating SDGs...",

        "🛰 Satellite Agent loading imagery...",

        "🧠 AI Consensus Building...",

        "✅ Simulation Completed"

    ]

    for msg in messages:

        await websocket.send_text(msg)

        await asyncio.sleep(1)

    await websocket.close()