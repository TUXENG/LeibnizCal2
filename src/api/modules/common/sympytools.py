from sympy import sympify, latex
from sympy.core.sympify import SympifyError

def convert_expression_to_latex(expression: str) -> str:
    try:
        expr = sympify(expression)
        return latex(expr)
    except SympifyError:
        return "Expresión inválida"
