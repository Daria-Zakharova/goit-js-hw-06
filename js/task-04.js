const counterValueEl = document.querySelector('#value');

const counter = {
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    increaseValue () {
        counterValueEl.textContent = Number(counterValueEl.textContent) + 1;
    },
    decreaseValue () {
        counterValueEl.textContent = Number(counterValueEl.textContent) - 1;
    },
    activate () {
        this.btnIncrement.addEventListener('click', this.increaseValue);
        this.btnDecrement.addEventListener('click', this.decreaseValue);
    },
    
}

counter.activate();
