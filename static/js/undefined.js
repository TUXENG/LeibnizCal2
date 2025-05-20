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
