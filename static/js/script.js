document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Remove loading screen if present
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }

    // Swiper for general carousel
    new Swiper(".mySwiper", {
        slidesPerView: 1, // Only one card visible per swipe
        spaceBetween: 0, // Remove extra space between slides
        loop: false, // Disable loop for precise swiping
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
            clickable: true, // Allow clicking on dots for navigation
        },
        breakpoints: {
            // Desktop: Show 3 cards with space between
            1024: { slidesPerView: 3, spaceBetween: 20 },
            // Tablet: Show 2 cards with space between
            768: { slidesPerView: 2, spaceBetween: 20 },
            // Mobile: Only one card
            480: { slidesPerView: 1, spaceBetween: 0 },
        },
    });

    // Function to remove Swiper arrows on mobile
    function removeSwiperArrowsOnMobile() {
        if (window.innerWidth <= 768) {
            const nextButton = document.querySelector(".swiper-button-next");
            const prevButton = document.querySelector(".swiper-button-prev");

            if (nextButton) {
                nextButton.remove();
            }

            if (prevButton) {
                prevButton.remove();
            }
        }
    }

    // Remove Swiper arrows on mobile (initial load)
    removeSwiperArrowsOnMobile();

    // Recheck and remove arrows on window resize
    window.addEventListener("resize", removeSwiperArrowsOnMobile);

    // Swiper for certifications carousel
    new Swiper(".certificationSwiper", {
        slidesPerView: 1, // Ensure one card for smaller screens
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
        const isOpen = dropdownMenu.classList.contains("open");

        toggleBtnIcon.classList = isOpen
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";
    };
});
