import random

def analyze(data):
    return {
        "agent": "⚡ Energy Agent",
        "recommendation": "Adopt Gradually",
        "confidence": random.randint(88,98),
        "impact": {
            "renewable_usage": f"{random.randint(45,70)}%",
            "energy_savings": f"{random.randint(20,35)}%"
        }
    }