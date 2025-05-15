async function toLatex(input) {
    try {
        const response = await fetch("/latex/convert-to-latex", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ expression: input }),
        });

        const data = await response.json();
        return data.latex;
    } catch (err) {
        console.error("Error al convertir:", err);
        return "Error en el servidor";
    }
}
