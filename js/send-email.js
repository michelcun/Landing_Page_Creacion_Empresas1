// Inicializa EmailJS con tu Public Key
emailjs.init("G87dya8-7z_muWn_c");

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_g0uo7j4",         // Nuevo Service ID
        "template_4fzxkog",        // Tu ID de plantilla
        this,                      // El formulario
           )
        .then(function () {
            alert("✅ Tu mensaje ha sido enviado correctamente.");
            document.querySelector("form").reset(); //Limpia el formulario
        }, function (error) {
            alert("❌ Ocurrió un error al enviar el mensaje.");
            console.error("Error:", error);
        });
});
