document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Remove loading screen if present
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }

    // Swiper for general carousel
    const mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 0 },
        },
    });

    // Function to remove Swiper arrows on mobile
    function removeSwiperArrowsOnMobile() {
        const isMobile = window.innerWidth <= 768;
        document.querySelectorAll(".swiper-button-next, .swiper-button-prev").forEach(button => {
            button.style.display = isMobile ? "none" : "";
        });
    }

    // Initial check and recheck on resize
    removeSwiperArrowsOnMobile();
    window.addEventListener("resize", removeSwiperArrowsOnMobile);

    // Swiper for certifications carousel
    const certificationSwiper = new Swiper(".certificationSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".certification-button-next",
            prevEl: ".certification-button-prev",
        },
        pagination: {
            el: ".certification-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 0 },
        },
    });

    // Mobile dropdown toggle
    const toggleBtn = document.querySelector(".toggle-btn");
    const toggleBtnIcon = document.querySelector(".toggle-btn i");
    const dropdownMenu = document.querySelector(".dropdown_menu");

    toggleBtn.onclick = function () {
        dropdownMenu.classList.toggle("open");
        toggleBtnIcon.classList = dropdownMenu.classList.contains("open")
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";
    };

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
});
