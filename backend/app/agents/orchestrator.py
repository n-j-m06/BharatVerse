from app.agents.climate_agent import analyze as climate
from app.agents.economy_agent import analyze as economy
from app.agents.traffic_agent import analyze as traffic
from app.agents.energy_agent import analyze as energy

def run_simulation(data):

    results = [
        climate(data),
        economy(data),
        traffic(data),
        energy(data)
    ]

    confidence = sum(r["confidence"] for r in results) // len(results)

    return {
        "overall_recommendation": "APPROVED",
        "overall_confidence": confidence,
        "agents": results
    }