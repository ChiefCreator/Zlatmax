(()=>{let e=document.querySelector(".top-header__back");document.addEventListener("click",(function(t){const o=t.target;if(o.closest("[data-parent]")){const e=document.querySelector(o.dataset.parent);if(e){const t=document.querySelector(".menu-catalog__link_act"),c=document.querySelector(".sub-menu-catalog__block_open");t&&o!=t&&(t.classList.remove("menu-catalog__link_act"),c&&c.classList.remove("sub-menu-catalog__block_open")),o.classList.toggle("menu-catalog__link_act"),e.classList.toggle("sub-menu-catalog__block_open")}t.preventDefault}if(o.closest(".menu__catalog")&&(document.querySelector(".menu-catalog").classList.add("menu-catalog_open"),setTimeout((function(){e.classList.add("top-header__back_act")}),100)),o.closest(".top-header__back")){const t=document.querySelectorAll(".menu-catalog_open"),o=document.querySelectorAll(".sub-menu-catalog__block_open"),c=document.querySelectorAll(".sub-menu-catalog__list_open");t.length&&o.length&&c.length?c.forEach((e=>{e.classList.remove("sub-menu-catalog__list_open")})):t.length&&o.length&&!c.length?o.forEach((e=>{e.classList.remove("sub-menu-catalog__block_open")})):t.length&&!o.length&&(t.forEach((e=>{e.classList.remove("menu-catalog_open")})),e.classList.remove("top-header__back_act"))}if(o.closest(".sub-menu-catalog__category")){const e=document.querySelector(o.closest(".sub-menu-catalog__category").dataset.parentMobileLast);console.log(e),e&&e.classList.add("sub-menu-catalog__list_open")}})),document.querySelector(".menu-btn").addEventListener("click",(function(){document.querySelector(".mobile-menu__body").classList.toggle("mobile-menu__body_open"),e.classList.remove("top-header__back_act"),document.querySelector(".menu-catalog").classList.contains("menu-catalog_open")&&(document.querySelector(".menu-catalog_open").classList.remove("menu-catalog_open"),document.querySelector(".sub-menu-catalog__block_open").classList.remove("sub-menu-catalog__block_open"),document.querySelector(".sub-menu-catalog__list_open").classList.remove("sub-menu-catalog__list_open"))})),new Swiper(".swiper",{speed:400,spaceBetween:100,pagination:{el:".controls-head__dotts",type:"bullets"},autoplay:{delay:3e3,disableOnInteraction:!1},on:{init:function(e){document.querySelector(".fraction-control__all").textContent=e.slides.length<10?`0${e.slides.length}`:e.slides.length,console.log(e)},slideChange:function(e){document.querySelector(".fraction-control__current").textContent=e.activeIndex<10?`0${e.activeIndex+1}`:e.activeIndex+1}}})})();