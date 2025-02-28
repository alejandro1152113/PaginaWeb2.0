// mission-vision.js

function showSlide(slide) {
    const slideContent = document.getElementById('slide-content');

    if (slide === 'mission') {
        slideContent.innerHTML = `
            <img src="../img/mission.jpg" alt="Misión">
            <p>Nuestra misión es impulsar el desarrollo tecnológico y creativo mediante soluciones innovadoras que transformen vidas y comunidades.</p>
        `;
    } else if (slide === 'vision') {
        slideContent.innerHTML = `
            <img src="../img/vision.jpg" alt="Visión">
            <p>Nuestra visión es ser líderes globales en la creación de soluciones tecnológicas disruptivas que inspiren un cambio positivo en la sociedad.</p>
        `;
    }

    slideContent.style.display = 'block';
}
