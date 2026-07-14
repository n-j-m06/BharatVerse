from fastapi import APIRouter

router=APIRouter(prefix="/notifications",tags=["Notifications"])

@router.get("/")
def notifications():

    return{

        "notifications":[

            {

                "title":"Flood Alert",

                "priority":"HIGH"

            },

            {

                "title":"Simulation Completed",

                "priority":"LOW"

            }

        ]

    }