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
        if (!variable.trim()) return;
        if (!lower.trim()) return;
        if (!upper.trim()) return;


        const latexExpr = await toLatex(expr);
        const latexVar = await toLatex(variable);
        const latexLower = await toLatex(lower);
        const latexUpper = await toLatex(upper);

        renderDiv.innerHTML = `$$\\int_{${latexLower}}^{${latexUpper}} ${latexExpr} \\, d${latexVar}$$`;
        
        if (window.MathJax) {
                MathJax.typesetPromise([renderDiv]);
        }
    };

    expressionInput.addEventListener("input", updateLatex);
    varInput.addEventListener("input", updateLatex);
    lowerInput.addEventListener("input", updateLatex);
    upperInput.addEventListener("input", updateLatex);
});

document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("save-result");
    const resultDiv = document.getElementById("render-result");

    if (saveBtn && resultDiv) {
        console.log("capturando datos.")
        saveBtn.addEventListener("click", async () => {
            const payload = {
                expression: resultDiv.dataset.expression,
                variable: resultDiv.dataset.variable,
                lower: resultDiv.dataset.lower,
                upper: resultDiv.dataset.upper,
                result: resultDiv.dataset.result
            };

            const response = await fetch("/history/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Respuesta guardada correctamente");
            } else {
                alert("Error al guardar la respuesta");
            }
        });
    }
    else {
        alert("No es posible guardar los datos.");
    }
});
