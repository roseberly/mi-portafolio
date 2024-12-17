// Inicialización de EmailJS
(function(){
    emailjs.init("TU_ID_DE_USUARIO");
})();

// Manejo del envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('TU_SERVICIO_ID', 'TU_PLANTILLA_ID', this)
        .then(function() {
            alert('Mensaje enviado correctamente!');
        }, function(error) {
            alert('Error al enviar el mensaje: ' + JSON.stringify(error));
        });
});

// Desplazamiento suave para la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
    });
});
});