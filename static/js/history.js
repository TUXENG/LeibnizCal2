document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", async () => {
            const id = button.dataset.id;
            if (confirm("¿Estás seguro de que deseas eliminar esta entrada?")) {
                const res = await fetch(`/history/${id}`, {
                    method: "DELETE"
                });

                if (res.ok) {
                    document.getElementById(`row-${id}`).remove();
                } else {
                    alert("No se pudo eliminar la entrada.");
                }
            }
        });
    });
});
