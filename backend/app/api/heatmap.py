from fastapi import APIRouter

router = APIRouter(prefix="/heatmap", tags=["Heatmap"])

@router.get("/")
def heatmap():

    return {

        "pollution":[
            {"lat":13.0827,"lng":80.2707,"value":82},
            {"lat":13.0500,"lng":80.2500,"value":60}
        ],

        "flood":[
            {"lat":13.09,"lng":80.29,"risk":"HIGH"},
            {"lat":13.11,"lng":80.30,"risk":"LOW"}
        ]
    }