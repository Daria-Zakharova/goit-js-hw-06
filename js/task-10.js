function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (color !== '#ffffff' && color.length === 7) ? color : getRandomHexColor();
}

const boxCreator = {
  refs: {
    container: document.querySelector('#boxes'),
    counter: document.querySelector('input[type = "number"'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
  },
  
  createBoxes() {
    let boxes = '';
    const amount = this.refs.counter.value;

    for (let i = amount, size = 30; i > 0; i -= 1, size += 10) {
      boxes += `<div class = "box" style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    }
    return boxes;
  },

  addBoxes() {
    this.refs.container.innerHTML = this.createBoxes();
    this.animateBoxes();
  },

  destroyBoxes() {
    this.refs.container.innerHTML = '';
  },

  animateBoxes() {
    const boxesList = [...document.querySelectorAll('.box')];
    const amount = this.refs.counter.value;
    let delay = 0;
    let duration = 200 + (amount*20);
    let counter = 1;
    console.log(`initial delay ${delay}\nduration ${duration}`);
    boxesList.reverse().forEach(item => {
      item.classList.add('swing-in-bottom-fwd');
      item.style.animationDelay = `${delay}ms`;

      item.style.animationDuration = `${duration}ms`;
      
      duration -= 20;
      delay += duration;
      counter++;
      console.log(`${counter} delay ${delay}\nduration ${duration}`);
    })
  },

  activate() {
    this.refs.counter.addEventListener('change', boxCreator.createBoxes.bind(boxCreator));
    this.refs.createBtn.addEventListener('click', boxCreator.addBoxes.bind(boxCreator));
    this.refs.destroyBtn.addEventListener('click', boxCreator.destroyBoxes.bind(boxCreator));
  }
};

boxCreator.activate();