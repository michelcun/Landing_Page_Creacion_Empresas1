document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("default_service", "template_4fzxkog", this)
        .then(function() {
            alert("✅ Tu mensaje ha sido enviado correctamente.");
        }, function(error) {
            alert("❌ Ocurrió un error al enviar el mensaje.");
            console.error("Error:", error);
        });
});
