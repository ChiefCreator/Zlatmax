function checkboxFilture() {
    let checkboxWrappers = document.querySelectorAll(".setting-checkbox");
    checkboxWrappers.forEach(checkboxWrapper => {
        let checkboxes = checkboxWrapper.querySelectorAll(".setting__checkbox-wrapper");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("click", function() {
                checkbox.classList.toggle("setting__checkbox-wrapper_act");
            })
        })
    })
}

export default checkboxFilture;