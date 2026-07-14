from fastapi import APIRouter
import random

router = APIRouter(prefix="/digital-twin", tags=["Digital Twin"])

@router.get("/")
def twin():

    return {

        "city":"Chennai",

        "layers":{

            "traffic":random.randint(40,90),

            "air_quality":random.randint(70,95),

            "water_level":random.randint(40,100),

            "green_cover":random.randint(25,80),

            "energy_usage":random.randint(40,90),

            "population_density":random.randint(50,100)

        },

        "status":"LIVE"

    }