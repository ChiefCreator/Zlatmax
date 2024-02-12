function AccordionFilture() {
    console.log("cewvr")
    let spoilers = document.querySelectorAll(".setting");
    spoilers.forEach(spoiler => {
        let headerSpoiler = spoiler.querySelector(".setting__head");
        let menuSpoiler = spoiler.querySelector(".setting__body");
        let listSpoiler = spoiler.querySelector(".setting__content");
        let arrow = spoiler.querySelector(".setting__head img");

        headerSpoiler.addEventListener("click", function() {
            arrow.classList.toggle("setting-head-img_act");
            menuSpoiler.classList.toggle("setting__body_open");
            listSpoiler.classList.toggle("setting__content_open");

        })
    })
}

export default AccordionFilture;