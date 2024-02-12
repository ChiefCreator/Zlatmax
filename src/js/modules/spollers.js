function spollers() {
    let spoilers = document.querySelectorAll(".spoiler");
    spoilers.forEach(spoiler => {
        let headerSpoiler = spoiler.querySelector(".spoiler-header");
        let menuSpoiler = spoiler.querySelector(".spoiler-body");
        let listSpoiler = spoiler.querySelector(".spoiler-content");
        let arrow = spoiler.querySelector(".spoiler-header img");

        headerSpoiler.addEventListener("click", function() {
            let actMenuSpoiler = document.querySelector(".spoiler-body_open");
            let actListSpoiler = document.querySelector(".spoiler-content_open");
            let actArrow = document.querySelector(".spoiler-arrow-act");

            if (actMenuSpoiler && actMenuSpoiler != menuSpoiler) {
                actMenuSpoiler.classList.remove("spoiler-body_open");
                actListSpoiler.classList.remove("spoiler-content_open");
                actArrow.classList.remove("spoiler-arrow-act");
            }

            arrow.classList.toggle("spoiler-arrow-act");
            menuSpoiler.classList.toggle("spoiler-body_open");
            listSpoiler.classList.toggle("spoiler-content_open");
        })
    })
}

export default spollers;