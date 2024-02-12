function mobileFilture() {
    let filtureButton = document.querySelector(".catalog__right-header img");
    let filtures = document.querySelector(".filter-content");
    filtureButton.addEventListener("click", function() {
        filtures.classList.toggle("filter-content_open");
    });
    let filtureCloseButton = document.querySelector(".filter-content__header");
    filtureCloseButton.addEventListener("click", function() {
        filtures.classList.remove("filter-content_open");
    })
}

export default mobileFilture;