const input = document.querySelector("#validation-input");
const nameInput = parseInt(input.dataset.length); 

function onInputChangeBorder(event) {
    if (event.currentTarget.value.length === nameInput) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}
input.addEventListener('blur', onInputChangeBorder)