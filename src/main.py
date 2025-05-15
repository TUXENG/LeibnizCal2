from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from src.api.index.router import router as index_router
from src.api.defined.router import router as defined_router
from src.api.undefined.router import router as undefined_router
from src.api.history.router import router as history_router

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(index_router)
app.include_router(defined_router, prefix="/defined")
app.include_router(undefined_router, prefix="/undefined")
app.include_router(history_router, prefix="/history")
