import random

def analyze(data):
    return {
        "agent": "💰 Economy Agent",
        "recommendation": "Support with Subsidies",
        "confidence": random.randint(80,95),
        "impact": {
            "employment_growth": f"+{random.randint(8,15)}%",
            "gdp_growth": f"+{random.randint(2,6)}%"
        }
    }