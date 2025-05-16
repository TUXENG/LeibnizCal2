from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get("/", response_class=HTMLResponse)
async def show_defined(request: Request):
    return templates.TemplateResponse("defined.html", {
        "request": request,
        "current_page" : "defined"
        })
