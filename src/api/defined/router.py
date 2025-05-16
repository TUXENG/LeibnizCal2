from fastapi import APIRouter, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from src.api.defined.service import process_defined_integral
from src.api.modules.common.schemas import DefinedIntegralRequest
import logging

router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get("/", response_class=HTMLResponse)
async def show_defined(request: Request):
    return templates.TemplateResponse("defined.html", {
        "request": request,
        "current_page" : "defined"
        })

@router.post("/calculate", response_class=HTMLResponse)
async def calculate_defined(
    request: Request,
    expression: str = Form(...),
    variable: str = Form(...),
    lower: str = Form(...),
    upper: str = Form(...)
):
    
    logging.info(f"Expresión: {expression}, variable:{variable}, a: {lower}, b: {upper} ")

    data = DefinedIntegralRequest(
        expression=expression,
        variable=variable,
        lower=lower,
        upper=upper
    )

    result_data = process_defined_integral(data)

    return templates.TemplateResponse("defined.html", {
        "request": request,
        "result": result_data["result"], 
        "expression": expression,
        "variable": variable,
        "lower":lower,
        "upper": upper,
        "exprLatex": result_data["exprLatex"],
        "current_page": "defined"
    })