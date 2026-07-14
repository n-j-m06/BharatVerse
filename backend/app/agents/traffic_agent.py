import random

def analyze(data):
    return {
        "agent": "🚦 Traffic Agent",
        "recommendation": "Highly Recommended",
        "confidence": random.randint(85,96),
        "impact": {
            "traffic_reduction": f"{random.randint(15,30)}%",
            "travel_time": f"-{random.randint(10,25)}%"
        }
    }