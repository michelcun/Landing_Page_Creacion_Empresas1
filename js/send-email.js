// js/send-email.js

// Inicializa EmailJS solo una vez
emailjs.init("G87dya8-7z_muWn_c");

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "default_service",     // ID del servicio
        "template_4fzxkog",    // ID de la plantilla
        this                   // Referencia al formulario
    )
        .then(function () {
            alert("✅ Tu mensaje ha sido enviado correctamente.");
        }, function (error) {
            alert("❌ Ocurrió un error al enviar el mensaje.");
            console.error("Error:", error);
        });
});
