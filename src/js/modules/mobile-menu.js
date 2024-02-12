function mobileMenu() {
    let back = document.querySelector(".top-header__back")
    
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
}

export default mobileMenu;