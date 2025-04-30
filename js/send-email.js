document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const honeypot = document.getElementById("empresa").value;
    if (honeypot !== "") {
        console.warn("Bot detectado. Envío cancelado.");
        return; // No envía nada si el honeypot está lleno
    }

    emailjs.sendForm(
        "service_g0uo7j4",
        "template_4fzxkog",
        this
    )
        .then(function () {
            alert("✅ Tu mensaje ha sido enviado correctamente.");
            e.target.reset(); // Limpia el formulario después del envío
        }, function (error) {
            alert("❌ Ocurrió un error al enviar el mensaje.");
            console.error("Error:", error);
        });
});
