document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Remove loading screen if present
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }

    // Mobile dropdown toggle
    const toggleBtn = document.querySelector(".toggle-btn");
    const toggleBtnIcon = document.querySelector(".toggle-btn i");
    const dropdownMenu = document.querySelector(".dropdown_menu");

    if (toggleBtn) {
        toggleBtn.onclick = function () {
            dropdownMenu.classList.toggle("open");
            toggleBtnIcon.classList = dropdownMenu.classList.contains("open")
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";
        };
    }

    // Skills animation logic (linear progress bars)
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percent = bar.dataset.percent;
        bar.style.width = percent + '%';
    });

    // Skills animation logic (circular progress bars - loader effect)
    const circleSkills = document.querySelectorAll('.circle-skill');
    circleSkills.forEach(circleSkill => {
        const percent = circleSkill.dataset.percent; // Retrieve percentage from data attribute
        const fgCircle = circleSkill.querySelector('.fg'); // Get the foreground circle element
        const radius = 45; // Radius of the circle as defined in the SVG path
        const circumference = 2 * Math.PI * radius; // Full circumference of the circle
        const offset = circumference - (circumference * (percent / 100)); // Calculate stroke-dashoffset

        fgCircle.style.strokeDasharray = `${circumference}`; // Set stroke-dasharray to circumference
        fgCircle.style.strokeDashoffset = `${offset}`; // Set stroke-dashoffset for dynamic effect
    });

    // Initialize Swiper for the projects section with autoplay
    const projectsSwiper = new Swiper('.projects__container', {
        cssMode: true,
        loop: true,
        spaceBetween: 24,
        slidesPerView: 1,
        autoplay: { // Enable autoplay
            delay: 3000, // Delay between slides in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay even after user interaction
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3, // Initially show 3
                freeMode: true, // Allows for more flexible touch events
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: true,
        keyboard: true,
    });
});