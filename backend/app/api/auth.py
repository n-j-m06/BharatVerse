from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.database.models import User

from app.schemas.user import UserCreate,UserLogin

from app.utils.auth import hash_password,verify_password,create_token

router=APIRouter(prefix="/auth",tags=["Authentication"])


@router.post("/signup")
def signup(user:UserCreate,db:Session=Depends(get_db)):

    existing=db.query(User).filter(User.email==user.email).first()

    if existing:

        raise HTTPException(status_code=400,detail="Email already exists")

    new_user=User(

        name=user.name,

        email=user.email,

        password=hash_password(user.password),

        role=user.role

    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return{

        "message":"Signup Successful"

    }


@router.post("/login")
def login(user:UserLogin,db:Session=Depends(get_db)):

    db_user=db.query(User).filter(User.email==user.email).first()

    if not db_user:

        raise HTTPException(status_code=401,detail="Invalid Email")

    if not verify_password(user.password,db_user.password):

        raise HTTPException(status_code=401,detail="Wrong Password")

    token=create_token({

        "id":db_user.id,

        "email":db_user.email,

        "role":db_user.role

    })

    return{

        "token":token,

        "user":db_user.name,

        "role":db_user.role

    }