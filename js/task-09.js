function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color.length === 7 ? color : getRandomHexColor();
}

const bgColorChange = {
  refs: {
    body: document.querySelector('body'),
    switcher: document.querySelector('.change-color'),
    colorValue: document.querySelector('.color'),
},  
  setColorValue() {
    this.refs.colorValue.textContent = getRandomHexColor();
  },
  changeColor() {
    this.refs.body.style.backgroundColor = this.refs.colorValue.textContent;
  },
  activate() {
    this.refs.body.style.transition = 'background-color 1000ms linear';
    this.refs.switcher.addEventListener('click', bgColorChange.setColorValue.bind(bgColorChange));
    this.refs.switcher.addEventListener('click', bgColorChange.changeColor.bind(bgColorChange));
  },  
}

bgColorChange.activate();