from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from src.api.router import api_router
import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(api_router)
