from fastapi import APIRouter, Depends
from app.utils.dependencies import get_current_user

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/")
def dashboard(user=Depends(get_current_user)):

    return {
        "logged_in_as": user["email"],
        "role": user["role"],
        "active_users": 1582,
        "cities": 42,
        "simulations": 821,
        "citizen_reports": 231,
        "carbon_saved": "18%",
        "water_saved": "12%"
    }