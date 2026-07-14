from fastapi import APIRouter

router=APIRouter(prefix="/policy",tags=["Policy"])

@router.post("/analyze")
def analyze():

    return{

        "summary":"Policy supports renewable adoption.",

        "risks":[

            "High Cost",

            "Slow Adoption"

        ],

        "recommendation":"Implement Phase Wise",

        "confidence":91

    }