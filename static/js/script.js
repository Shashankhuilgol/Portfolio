document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");
    document.getElementById("loading-screen").style.display = "none";

    // Swiper for general carousel
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Show 3 cards at a time
        spaceBetween: 20, // Spacing between slides
        loop: false, // No infinite scrolling
        autoplay: {
            delay: 3000, // Auto-slide every 3s
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
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });

    // Swiper for certifications carousel
    var certificationSwiper = new Swiper(".certificationSwiper", {
        slidesPerView: 3, // Show 3 certificates at a time
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
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });

});