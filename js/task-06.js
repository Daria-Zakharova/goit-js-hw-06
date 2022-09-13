const textInputEl = document.querySelector('#validation-input');
const requiredLength = Number(textInputEl.dataset.length);
textInputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.trim().length === requiredLength) {
        !textInputEl.classList.contains('invalid') ? textInputEl.classList.add('valid') : textInputEl.classList.replace('invalid', 'valid');

    }
    else {
        !textInputEl.classList.contains('valid') ? textInputEl.classList.add('invalid') : textInputEl.classList.replace('valid', 'invalid');
    }
})