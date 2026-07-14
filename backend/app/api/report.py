from fastapi import APIRouter

router = APIRouter(prefix="/report", tags=["Citizen Reports"])

@router.post("/")
def report():

    return {

        "issue": "Flood",

        "severity": "High",

        "department": "Disaster Management",

        "status": "Ticket Generated"
    }