function formCheckbox() {
    let checks = document.querySelectorAll(".newsletter-form__check-wrapper");
    checks.forEach(check => {
        check.addEventListener("click", function() {
            check.classList.toggle("newsletter-form__check-wrapper_act");
        })
    })
}

export default formCheckbox;