from fastapi import APIRouter

router = APIRouter(prefix="/compare", tags=["Scenario Comparison"])

@router.post("/")
def compare():

    return {

        "Scenario A": "Current",

        "Scenario B": "Green Future",

        "AQI Improvement": "26%",

        "Carbon Reduction": "41%",

        "Employment Growth": "9%",

        "Traffic Reduction": "17%"
    }