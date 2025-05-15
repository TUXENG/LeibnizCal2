const expressionInput = document.getElementById('expression');
const variableInput = document.getElementById('variable');
const renderDiv = document.getElementById('render-expression');

function updateLatex() {
    const expr = expressionInput.value || '\\_';
    const variable = variableInput.value || 'x';

    // Aplica el parser de toLatex.js
    const parsedExpr = toLatex(expr);

    renderDiv.innerHTML = `$$\\int ${parsedExpr} \\, d${variable}$$`;
    if (typeof MathJax !== 'undefined') MathJax.typesetPromise([renderDiv]);
}

expressionInput.addEventListener('input', updateLatex);
variableInput.addEventListener('input', updateLatex);
window.addEventListener('load', updateLatex);
