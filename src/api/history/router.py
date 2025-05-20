from fastapi import APIRouter, Request, Depends
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

from sqlalchemy.orm import Session
from src.api.modules.common.schemas import HistoryCreate
from src.api.history.service import save_history_service, get_all_history, delete_history_by_id
from src.api.dependencies import get_db  

router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get("/", response_class=HTMLResponse)
async def read_history(request: Request, db: Session = Depends(get_db)):
    history = get_all_history(db)
    return templates.TemplateResponse("history.html", {
        "request": request,
        "histories": history,
        "current_page": "history"
    })


@router.post("/save")
def save_history(entry: HistoryCreate, db: Session = Depends(get_db)):
    return save_history_service(entry, db)

@router.delete("/{history_id}")
def delete_history(history_id: int, db: Session = Depends(get_db)):
    deleted = delete_history_by_id(history_id, db)
    if deleted:
        return {"message": "Entrada eliminada correctamente"}
    else:
        return {"error": "No se encontró la entrada"}, 404
