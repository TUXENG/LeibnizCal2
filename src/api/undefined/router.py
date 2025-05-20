from fastapi import APIRouter, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from src.api.undefined.service import process_undefined_integral
from src.api.modules.common.schemas import UndefinedIntegralRequest
import logging

logger = logging.getLogger(__name__)
router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get("/", response_class=HTMLResponse)
async def show_undefined(request: Request):
    return templates.TemplateResponse("undefined.html", {
        "request": request,
        "current_page": "undefined"
        })

@router.post("/calculate", response_class=HTMLResponse)
async def calculate_undefined(
    request: Request,
    expression: str = Form(...),
    variable: str = Form(...)
):
   
    # logger.info(f"Expresión: {expression}, Variable: {variable}")
    data = UndefinedIntegralRequest(expression=expression, variable=variable)
    
    result_data = process_undefined_integral(data)
    
    return templates.TemplateResponse("undefined.html", {
        "request": request,
        "result": result_data["result"], 
        "expression": expression,
        "exprLatex": result_data["exprLatex"],
        "variable": variable,
        "varLatex": result_data["varLatex"],
        "current_page": "undefined"
    })

