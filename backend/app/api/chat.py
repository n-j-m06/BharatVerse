from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini_service import ask_gemini

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)

class Prompt(BaseModel):
    message: str

@router.post("/")
def chat(prompt: Prompt):

    answer = ask_gemini(prompt.message)

    return {

        "question": prompt.message,

        "answer": answer
    }