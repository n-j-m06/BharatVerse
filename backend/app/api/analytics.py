from fastapi import APIRouter

router=APIRouter(prefix="/analytics",tags=["Analytics"])

@router.get("/")
def analytics():

    return{

        "active_users":5234,

        "simulations":2845,

        "reports":1387,

        "cities":42,

        "policies":182,

        "success_rate":"96%"

    }