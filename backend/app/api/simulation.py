from fastapi import APIRouter
from pydantic import BaseModel
import time

from app.agents.orchestrator import run_simulation

router = APIRouter(prefix="/simulation", tags=["Simulation"])

class SimulationRequest(BaseModel):
    city: str
    scenario: str

@router.post("/run")
def simulate(request: SimulationRequest):

    time.sleep(2)

    result = run_simulation(request.dict())

    return {
        "city": request.city,
        "scenario": request.scenario,
        "status": "Completed",
        "summary": "AI simulation completed successfully.",
        **result
    }