from fastapi import APIRouter

router = APIRouter(prefix="/timeline", tags=["Future Timeline"])

@router.get("/")
def timeline():

    return {

        "timeline":[

            {"year":2025,"aqi":140},

            {"year":2030,"aqi":110},

            {"year":2035,"aqi":89},

            {"year":2040,"aqi":74}

        ]

    }