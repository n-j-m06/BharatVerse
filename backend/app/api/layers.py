from fastapi import APIRouter

router=APIRouter(prefix="/layers",tags=["Map Layers"])

@router.get("/")
def layers():

    return{

        "available_layers":[

            "Road Network",

            "Buildings",

            "Flood Zones",

            "Power Grid",

            "Hospitals",

            "Industries",

            "Schools",

            "Air Quality",

            "Green Cover",

            "Water Bodies"

        ]

    }