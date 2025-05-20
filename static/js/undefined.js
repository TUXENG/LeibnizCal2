document.addEventListener("DOMContentLoaded", () => {
    const expressionInput = document.getElementById("expression");
    const varInput = document.getElementById("variable");
    const renderDiv = document.getElementById("render-expression");

    const updateLatex = async () => {
        const expr = expressionInput.value;
        const variable = varInput.value;

        if (!expr.trim()) return;

        const latexExpr = await toLatex(expr);
        const varLatex = await toLatex(variable);
        renderDiv.innerHTML = `$$\\int ${latexExpr} \\, d${varLatex}$$`;

        if (window.MathJax) {
            MathJax.typesetPromise([renderDiv]);
        }
    };

    expressionInput.addEventListener("input", updateLatex);
    varInput.addEventListener("input", updateLatex);
});
