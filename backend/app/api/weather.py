from fastapi import APIRouter
import random

router = APIRouter(prefix="/weather", tags=["Weather"])

@router.get("/")
def weather():

    return{

        "temperature":random.randint(28,38),

        "humidity":random.randint(50,90),

        "rain_probability":random.randint(0,100),

        "wind_speed":random.randint(10,40)

    }