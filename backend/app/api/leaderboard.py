from fastapi import APIRouter

router=APIRouter(prefix="/leaderboard",tags=["Citizen Impact"])

@router.get("/")
def leaderboard():

    return{

        "top_cities":[

            {

                "city":"Chennai",

                "green_score":95

            },

            {

                "city":"Bengaluru",

                "green_score":91

            },

            {

                "city":"Hyderabad",

                "green_score":89

            }

        ]

    }