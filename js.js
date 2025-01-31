const burger = document.querySelector('.burger')
const links = document.querySelector('.links')

burger.addEventListener('click', () => {
    links.classList.toggle('show-nav')
})

// swiper//
const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Количество слайдов по умолчанию
    spaceBetween: 30, // Расстояние между слайдами
    pagination: {
        clickable: true, // Пагинация остаётся интерактивной
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Время между переключениями (3 секунды)
        disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// Testimonial//
const swiperTest = new Swiper('.swiper-testimonials', {
    slidesPerView: 1, // Количество слайдов по умолчанию
    spaceBetween: 30, // Расстояние между слайдами
    pagination: {
        clickable: true, // Пагинация остаётся интерактивной
    },
    navigation: {
        nextEl: '.swiper-button-next-Testi',
        prevEl: '.swiper-button-prev-Testi',
    },
    autoplay: {
        delay: 3000, // Время между переключениями (3 секунды)
        disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});
// Aos js
AOS.init();