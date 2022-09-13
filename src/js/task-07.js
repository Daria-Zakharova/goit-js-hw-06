const fontSizeControlEl = document.querySelector('#font-size-control');
const controlledTxtEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', () =>
    controlledTxtEl.style.fontSize = fontSizeControlEl.value + 'px');