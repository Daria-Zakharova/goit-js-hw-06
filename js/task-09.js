function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColorChange = {
  refs: {
    body: document.querySelector('body'),
    switcher: document.querySelector('.change-color'),
    colorValue: document.querySelector('.color'),
},
  changeColor() { this.refs.body.style.backgroundColor = getRandomHexColor() },
  setColorValue() { this.refs.colorValue.textContent = getRandomHexColor()},
  activate() {
    this.refs.body.style.transition = 'background-color 1500ms linear';
    this.refs.switcher.addEventListener('click', bgColorChange.changeColor.bind(bgColorChange));
    this.refs.switcher.addEventListener('click', bgColorChange.setColorValue.bind(bgColorChange));
  },  
}

bgColorChange.activate();