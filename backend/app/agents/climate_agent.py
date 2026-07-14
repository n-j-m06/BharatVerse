import random

def analyze(data):
    return {
        "agent": "🌱 Climate Agent",
        "recommendation": "Strongly Support",
        "confidence": random.randint(90, 98),
        "impact": {
            "carbon_reduction": f"{random.randint(35,50)}%",
            "air_quality": random.randint(80,95)
        }
    }