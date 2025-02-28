// Seleccionar todos los elementos con la clase 'link-item'
const linkItems = document.querySelectorAll(".link-item");
const indicator = document.querySelector(".indicator");

// Agregar evento a cada enlace del menú
linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        // Remover la clase 'active' del enlace anterior
        document.querySelector(".active")?.classList.remove("active");

        // Agregar la clase 'active' al enlace seleccionado
        linkItem.classList.add("active");

        // Mover el indicador al nuevo enlace seleccionado
        indicator.style.left = `${index * 95 + 48}px`;
    });
});
