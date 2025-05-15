document.addEventListener("DOMContentLoaded", () => {
    const expressionInput = document.getElementById("expression");
    const varInput = document.getElementById("variable");
    const renderDiv = document.getElementById("render-expression");

    const updateLatex = async () => {
        const raw = expressionInput.value;
        const variable = varInput.value;

        if (!raw.trim()) return;

        const latexExpr = await toLatex(raw);
        renderDiv.innerHTML = `$$\\int ${latexExpr} \\, d${variable}$$`;

        if (window.MathJax) {
            MathJax.typesetPromise([renderDiv]);
        }
    };

    expressionInput.addEventListener("input", updateLatex);
    varInput.addEventListener("input", updateLatex);
});
