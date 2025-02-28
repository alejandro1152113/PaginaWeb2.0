// main.js - Lógica general de la página

// Ejemplo de animación para transiciones de página (Fade-out)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const href = this.getAttribute('href');

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});
function toggleObjetivo(id) {
    // Obtener todos los objetivos de la página
    const objetivos = document.querySelectorAll('.objetivo-texto');

    // Cerrar todos los objetivos antes de abrir el nuevo
    objetivos.forEach(texto => {
        if (texto.id !== `objetivo-${id}`) {
            texto.classList.remove('activo'); // Oculta los demás
        }
    });

    // Obtener el objetivo seleccionado
    const objetivoSeleccionado = document.getElementById(`objetivo-${id}`);

    // Alternar la visibilidad con clase 'activo'
    objetivoSeleccionado.classList.toggle('activo');
}