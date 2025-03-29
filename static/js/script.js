document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Remove loading screen if present
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }

    // Swiper for general carousel
    new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
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
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });

    // Swiper for certifications carousel
    new Swiper(".certificationSwiper", {
        slidesPerView: 3,
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
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });

    // ✅ Mobile dropdown toggle
    const toggleBtn = document.querySelector('.toggle-btn');
    const toggleBtnIcon = document.querySelector('.toggle-btn i');
    const dropdownMenu = document.querySelector('.dropdown_menu');
    
    toggleBtn.onclick = function(){
        dropdownMenu.classList.toggle('open');
        const isOpen = dropdownMenu.classList.contains('open');
    
        toggleBtnIcon.classList = isOpen
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";
    }
    

});
