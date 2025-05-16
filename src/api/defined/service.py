from src.api.modules.common.schemas import DefinedIntegralRequest
from src.api.modules.common.sympytools import resolve_defined_integral, convert_expression_to_latex

def process_defined_integral(data: DefinedIntegralRequest) -> dict:
    result = resolve_defined_integral(data.expression, data.variable, data.lower, data.upper)
    exprLatex = convert_expression_to_latex(data.expression)
    return {
        "result": result,
        "exprLatex": exprLatex
    }
