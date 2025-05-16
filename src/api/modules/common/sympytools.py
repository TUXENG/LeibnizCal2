from sympy import symbols, integrate, sympify, latex
from sympy.core.sympify import SympifyError

def convert_expression_to_latex(expression: str) -> str:
    try:
        expr = sympify(expression)
        return latex(expr)
    except SympifyError:
        return "Expresión inválida"


def resolve_undefined_integral(expression: str, variable: str) -> str:
    try:
        var = symbols(variable)
        expr = sympify(expression)
        result = integrate(expr, var)
        resultLatex = f"{latex(result)} + C"
        return resultLatex
    except SympifyError as e:
        return f"Expresión inválida: {e}"
    except Exception as e:
        return f"Error al calcular la integral: {e}"


def resolve_defined_integral(expression: str, variable: str, lower: str, upper: str) -> str:
    try:
        var = symbols(variable)
        expr = sympify(expression)
        a = sympify(lower)
        b = sympify(upper)
        result = integrate(expr, (var, a, b))
        resultLatex = latex(result)
        return resultLatex
    except SympifyError:
        return "Expresión o límites inválidos"
    except Exception:
        return "Error al calcular la integral definida"
