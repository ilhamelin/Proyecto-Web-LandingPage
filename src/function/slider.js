export default function script() {
    const slider = document.querySelector("#slider");
    const childsSlider = [...slider.querySelectorAll("figure")];
    const nextButton = document.querySelector("[data-button='next']");
    const prevButton = document.querySelector("[data-button='prev']");

    const descriptions = [
        {
            title: "Violet (comúnmente conocida como Vi):",
            text: "Es una de las protagonistas de Arcane...",
        },
        {
            title: "Jinx, cuyo verdadero nombre es Powder:",
            text: "Es una de las protagonistas de Arcane...",
        },
        {
            title: "Viktor (también conocido como el Heraldo):",
            text: "Fue un personaje principal de Arcane...",
        },
        {
            title: "Caitlyn Kiramman:",
            text: "Es una de las protagonistas de Arcane...",
        },
        {
            title: "Ekko:",
            text: "Es un personaje importante de Arcane...",
        },
    ];

    const videoSources = [
        "/videos/vi.mp4",
        "src/assets/Jinx/Fondo_Jinx.mp4",
        "/videos/viktor.mp4",
        "/videos/caitlyn.mp4",
        "/videos/ekko.mp4",
    ];

    let isTransitioning = false;

    childsSlider.forEach((child, index) => {
        child.dataset.idSlider = index;
    });

    function getCurrentImage() {
        const activeItems = slider.querySelectorAll("[data-active]");
        if (activeItems.length > 1) {
            activeItems.forEach((item, index) => {
                if (index !== 0) item.removeAttribute("data-active");
            });
        }
        return slider.querySelector("[data-active]");
    }

    function handleClick(direction) {
        if (isTransitioning) return;
        isTransitioning = true;

        const currentImage = getCurrentImage();
        let currentIndex = parseInt(currentImage.dataset.idSlider, 10);

        currentIndex =
            direction === "next"
                ? (currentIndex + 1) % childsSlider.length
                : (currentIndex - 1 + childsSlider.length) % childsSlider.length;

        const newImage = childsSlider[currentIndex];
        currentImage.removeAttribute("data-active");
        newImage.setAttribute("data-active", "");

        updateDescription(currentIndex);
        updateBackground(currentIndex);

        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }

    function updateDescription(index) {
        const el = document.getElementById("slider-description");
        if (!el) return;

        const { title, text } = descriptions[index];
        el.innerHTML = `
        <h2 class="text-3xl font-bold">${title}</h2>
        <p class="text-lg text-black leading-loose">${text}</p>
      `;
    }

    function updateBackground(index) {
        const video = document.getElementById("background-video");
        if (video) {
            video.src = videoSources[index];
            video.load();
            video.play();
        }
    }

    // Clonar botones para evitar duplicados
    nextButton.replaceWith(nextButton.cloneNode(true));
    prevButton.replaceWith(prevButton.cloneNode(true));

    const newNextButton = document.querySelector("[data-button='next']");
    const newPrevButton = document.querySelector("[data-button='prev']");

    newNextButton.addEventListener("click", () => handleClick("next"));
    newPrevButton.addEventListener("click", () => handleClick("prev"));

    // Inicializar slider
    updateDescription(0);
    updateBackground(0);
}
