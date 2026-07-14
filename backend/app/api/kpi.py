from fastapi import APIRouter

router=APIRouter(
    prefix="/kpi",
    tags=["National KPI"]
)

@router.get("/")
def kpi():

    return{

        "carbon_index":91,

        "green_score":95,

        "water_security":87,

        "energy_efficiency":93,

        "air_quality":89,

        "citizen_satisfaction":94

    }