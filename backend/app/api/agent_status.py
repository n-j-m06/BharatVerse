from fastapi import APIRouter

router=APIRouter(prefix="/agents",tags=["AI Agents"])

@router.get("/status")
def status():

    return{

        "agents":[

            {

                "name":"Climate Agent",

                "status":"Active",

                "accuracy":"96%"

            },

            {

                "name":"Traffic Agent",

                "status":"Active",

                "accuracy":"94%"

            },

            {

                "name":"Economy Agent",

                "status":"Active",

                "accuracy":"91%"

            },

            {

                "name":"Energy Agent",

                "status":"Active",

                "accuracy":"95%"

            }

        ]

    }