from src.api.modules.common.schemas import UndefinedIntegralRequest
from src.api.modules.common.sympytools import resolve_undefined_integral, convert_expression_to_latex

def process_undefined_integral(data: UndefinedIntegralRequest) -> dict:
    result = resolve_undefined_integral(data.expression, data.variable)
    exprLatex = convert_expression_to_latex(data.expression)
    return {
        "result": result,
        "exprLatex": exprLatex
        }

