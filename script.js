const form = document.getElementById("form")
const inputName = document.querySelector(".input__name")
const inputEmail = document.querySelector(".input__email")
const inputPassword = document.querySelector(".input__password")
const errorName = document.querySelector(".name__error")
const errorEmail = document.querySelector(".email__error")
const errorPassword = document.querySelector(".password__error")


const nameRegex = (/^[A-Za-z]*$/g);
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

inputName.addEventListener("change", (e) => {

    const valueName = e.target.value;

    if (valueName.match(nameRegex)) {
        inputName.classList.add("input__success")
        inputName.classList.remove("input__fail")
        errorName.textContent = ""

    } else {
        inputName.classList.add("input__fail")
        inputName.classList.remove("input__success")
        errorName.textContent = "Invalid name"
    }

})

inputEmail.addEventListener("change", (e) => {

    const valueEmail = e.target.value;

    if (valueEmail.match(emailRegex)) {
        inputEmail.classList.add("input__success")
        inputEmail.classList.remove("input__fail")
        errorEmail.textContent = ""
    } else {
        inputEmail.classList.add("input__fail")
        errorEmail.textContent = "Invalid email"
    }
})

inputPassword.addEventListener("change", (e) => {

    const valuePassword = e.target.value;

    if (valuePassword.length < 8) {
        inputPassword.classList.add("input__fail")
        inputPassword.classList.remove("input__success")
        errorPassword.textContent = "Your password is short"
    } else if (!valuePassword.match(passwordRegex)) {
        inputPassword.classList.add("input__fail")
        inputPassword.classList.remove("input__success")
        errorPassword.textContent = "Your password is weak"
    } else {
        inputPassword.classList.remove("input__fail")
        inputPassword.classList.add("input__success")
        errorPassword.textContent = ""
    }
})