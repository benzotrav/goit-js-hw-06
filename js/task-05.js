const input = document.querySelector("#name-input");
const user = document.querySelector("#name-output");

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        user.textContent = "Anonymous";
    } else {
        user.textContent = event.currentTarget.value;
    }
}

input.addEventListener('input', onInputChange)