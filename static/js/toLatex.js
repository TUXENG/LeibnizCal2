// static/js/toLatex.js

function handleParentheses(expr) {
  const stack = [];
  const pairs = [];

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '(') {
      stack.push(i);
    } else if (expr[i] === ')') {
      if (stack.length === 0) throw new Error('Paréntesis no balanceados');
      const start = stack.pop();
      pairs.push({ start, end: i });
    }
  }
  if (stack.length > 0) throw new Error('Paréntesis no balanceados');

  pairs.sort((a, b) => b.start - a.start);

  let exprMod = expr;
  pairs.forEach(({ start, end }) => {
    const inner = exprMod.substring(start + 1, end);
    const innerLatex = toLatex(inner);
    exprMod =
      exprMod.substring(0, start) +
      `\\left(${innerLatex}\\right)` +
      exprMod.substring(end + 1);
  });

  return exprMod;
}

function handleBrackets(expr) {
  const stack = [];
  const pairs = [];

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '[') {
      stack.push(i);
    } else if (expr[i] === ']') {
      if (stack.length === 0) throw new Error('Corchetes no balanceados');
      const start = stack.pop();
      pairs.push({ start, end: i });
    }
  }
  if (stack.length > 0) throw new Error('Corchetes no balanceados');

  pairs.sort((a, b) => b.start - a.start);

  let exprMod = expr;
  pairs.forEach(({ start, end }) => {
    const inner = exprMod.substring(start + 1, end);
    const innerLatex = toLatex(inner);
    exprMod =
      exprMod.substring(0, start) +
      `\\left[${innerLatex}\\right]` +
      exprMod.substring(end + 1);
  });

  return exprMod;
}

function toLatex(input) {
  if (!input) return '';

  let expr = input;

  expr = handleParentheses(expr);
  expr = handleBrackets(expr);

  // Potencias x^2 -> x^{2}
  expr = expr.replace(/(\w+)\s*\^\s*(\w+)/g, "$1^{$2}");

  // Raíz cuadrada sqrt(x) -> \sqrt{x}
  expr = expr.replace(/sqrt\((.*?)\)/g, "\\sqrt{$1}");

  // Raíz n-ésima root(n)(x) -> \sqrt[n]{x}
  expr = expr.replace(/root\((\w+)\)\((.*?)\)/g, "\\sqrt[$1]{$2}");

  // Funciones trigonométricas
  expr = expr.replace(/\b(sin|cos|tan|sec|csc|cot)\((.*?)\)/g, "\\$1{$2}");

  // Funciones trigonométricas inversas
  expr = expr.replace(/arcsin\((.*?)\)/g, "\\arcsin{$1}");
  expr = expr.replace(/arccos\((.*?)\)/g, "\\arccos{$1}");
  expr = expr.replace(/arctan\((.*?)\)/g, "\\arctan{$1}");

  // Logaritmos
  expr = expr.replace(/ln\((.*?)\)/g, "\\ln{$1}");
  expr = expr.replace(/log\((.*?)\)/g, "\\log{$1}");
  expr = expr.replace(/log_(\w+)\((.*?)\)/g, "\\log_$1{$2}");

  // Funciones exponenciales
  expr = expr.replace(/e\^\((.*?)\)/g, "e^{$1}");
  expr = expr.replace(/(\d+)\^\((.*?)\)/g, "$1^{$2}");

  // Funciones misceláneas
  expr = expr.replace(/abs\((.*?)\)/g, "\\left|$1\\right|");
  expr = expr.replace(/floor\((.*?)\)/g, "\\lfloor $1 \\rfloor");
  expr = expr.replace(/ceil\((.*?)\)/g, "\\lceil $1 \\rceil");

  return expr;
}

if (typeof module !== 'undefined') {
  module.exports = { toLatex };
}
