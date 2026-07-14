from fastapi import APIRouter
import random

router = APIRouter(
    prefix="/disaster",
    tags=["Disaster Prediction"]
)

@router.get("/predict")
def predict():

    return{

        "flood_risk":random.randint(0,100),

        "heatwave_risk":random.randint(0,100),

        "cyclone_risk":random.randint(0,100),

        "drought_risk":random.randint(0,100),

        "earthquake_risk":random.randint(0,100)

    }