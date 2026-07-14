from fastapi import APIRouter

router=APIRouter(
    prefix="/recommendation",
    tags=["AI Recommendation"]
)

@router.get("/")
def recommendation():

    return{

        "priority":"HIGH",

        "recommendations":[

            "Increase EV Subsidies",

            "Plant 1 Million Trees",

            "Install Rooftop Solar",

            "Upgrade Drainage",

            "Build Smart Traffic Signals"

        ]

    }