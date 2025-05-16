from fastapi import APIRouter
from .index.router import router as index_router
from .defined.router import router as defined_router
from .undefined.router import router as undefined_router
from .history.router import router as history_router
from .latex.router import router as latex_router

api_router = APIRouter()


api_router.include_router(index_router)
api_router.include_router(defined_router, prefix="/defined")
api_router.include_router(undefined_router, prefix="/undefined")
api_router.include_router(history_router, prefix="/history")
api_router.include_router(latex_router, prefix="/latex")
