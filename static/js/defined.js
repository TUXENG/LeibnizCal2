document.addEventListener("DOMContentLoaded", () => {
    const expressionInput = document.getElementById("expression");
    const varInput = document.getElementById("variable");
    const lowerInput = document.getElementById("lower");
    const upperInput = document.getElementById("upper");
    const renderDiv = document.getElementById("render-expression");

    const updateLatex = async () => {
        const expr = expressionInput.value;
        const variable = varInput.value;
        const lower = lowerInput.value || "a";
        const upper = upperInput.value || "b";

        if (!expr.trim()) return;

        const latexExpr = await toLatex(expr);
        renderDiv.innerHTML = `$$\\int_{${lower}}^{${upper}} ${latexExpr} \\, d${variable}$$`;
        
        if (window.MathJax) {
                MathJax.typesetPromise([renderDiv]);
        }
    };

    expressionInput.addEventListener("input", updateLatex);
    varInput.addEventListener("input", updateLatex);
    lowerInput.addEventListener("input", updateLatex);
    upperInput.addEventListener("input", updateLatex);
});
