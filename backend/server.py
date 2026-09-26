from fastapi import FastAPI, APIRouter
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path

ROOT_DIR: Path = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

app: FastAPI = FastAPI()
api_router: APIRouter = APIRouter(prefix="/api")


@api_router.get("/")
async def root() -> dict[str, str]:
    return {"message": "Ayush Mohan Tripathi — Portfolio API"}


@api_router.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
