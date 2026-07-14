from fastapi import APIRouter

router=APIRouter(prefix="/sdg",tags=["Sustainability"])

@router.get("/")
def sdg():

    return{

        "SDG6":84,

        "SDG7":91,

        "SDG9":88,

        "SDG11":93,

        "SDG13":95

    }