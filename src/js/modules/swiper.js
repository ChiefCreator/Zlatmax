function swiperActions() {
    const swiperHead = new Swiper('.head__slider', {
        speed: 400,
        spaceBetween: 100,
        pagination: {
            el: '.controls-head__dotts',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        on: {
            init: function(swiper) {
                const allSlides = document.querySelector(".fraction-control__all");
    
                allSlides.textContent = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;
            },
            slideChange: function(swiper) {
                const currentSlide = document.querySelector(".fraction-control__current");
    
                currentSlide.textContent = swiper.activeIndex < 10 ? `0${swiper.activeIndex + 1}` : swiper.activeIndex + 1;
            }
        }
    });
    const swiperCatalog = new Swiper('.products__slider', {
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 4,
        loop:true,
        watchOverflow:true,
        pagination: {
            el: '.products__dotts',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    });
    const swiperNovelty = new Swiper('.new__slider', {
        speed: 400,
        spaceBetween: 30,
        slidesPerView: 3,
        loop:true,
        watchOverflow:true,
        pagination: {
            el: '.new__dotts',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1110: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 30
            },
        }
    });
}

export default swiperActions;