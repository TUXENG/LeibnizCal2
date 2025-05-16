from fastapi import APIRouter
from src.api.modules.common.schemas import ExpressionIn
from src.api.modules.common.sympytools import convert_expression_to_latex

router = APIRouter()

@router.post("/convert-to-latex")
async def convert_to_latex(expr_in: ExpressionIn):
    latex_expr = convert_expression_to_latex(expr_in.expression)
    return {"latex": latex_expr}
