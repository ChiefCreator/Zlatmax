let back = document.querySelector(".top-header__back")

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest("[data-parent]")) {
        const subMenu = document.querySelector(targetElement.dataset.parent);
       
        if (subMenu) {
            const actLink = document.querySelector(".menu-catalog__link_act");
            const actBlock = document.querySelector(".sub-menu-catalog__block_open");

            if (actLink && targetElement != actLink) {
                actLink.classList.remove("menu-catalog__link_act");
                if (actBlock) {
                    actBlock.classList.remove("sub-menu-catalog__block_open");
                }
            }

            targetElement.classList.toggle("menu-catalog__link_act");
            subMenu.classList.toggle("sub-menu-catalog__block_open");
        }
        e.preventDefault;
    }

    if (targetElement.closest(".menu__catalog")) {
        const catalog = document.querySelector(".menu-catalog");
        catalog.classList.add("menu-catalog_open")

        setTimeout(function() {
            back.classList.add("top-header__back_act")
        },100)
    }

    if (targetElement.closest(".top-header__back")) {

        const catalogFirst = document.querySelectorAll(".menu-catalog_open");
        const catalogSecond = document.querySelectorAll(".sub-menu-catalog__block_open");
        const catalogThird = document.querySelectorAll(".sub-menu-catalog__list_open");

        if (catalogFirst.length && catalogSecond.length && catalogThird.length) {
            catalogThird.forEach(catalog => {
                catalog.classList.remove("sub-menu-catalog__list_open")
            })
        }
        else if(catalogFirst.length && catalogSecond.length && !catalogThird.length) {
            catalogSecond.forEach(catalog => {
                catalog.classList.remove("sub-menu-catalog__block_open")
            })
        }
        else if (catalogFirst.length && !catalogSecond.length) {
            catalogFirst.forEach(catalog => {
                catalog.classList.remove("menu-catalog_open")
            })
            back.classList.remove("top-header__back_act")
        } 
    }

    if (targetElement.closest(".sub-menu-catalog__category")) {
       
        const catalog = document.querySelector(targetElement.closest(".sub-menu-catalog__category").dataset.parentMobileLast);
        console.log(catalog)
        if (catalog)
            catalog.classList.add("sub-menu-catalog__list_open");
    }
}

const burger = document.querySelector(".menu-btn");
burger.addEventListener("click", function() {

    const mobile = document.querySelector(".mobile-menu__body");
    mobile.classList.toggle("mobile-menu__body_open");

    back.classList.remove("top-header__back_act")

    if (document.querySelector(".menu-catalog").classList.contains("menu-catalog_open")) {
        document.querySelector(".menu-catalog_open").classList.remove("menu-catalog_open")
        document.querySelector(".sub-menu-catalog__block_open").classList.remove("sub-menu-catalog__block_open")
        document.querySelector(".sub-menu-catalog__list_open").classList.remove("sub-menu-catalog__list_open")
    } 
})

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
