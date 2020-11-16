// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// const decrementBtnEl = document.querySelector(
//   '#counter > [data-action="decrement"]');
// const incrementBtnEl = document.querySelector(
//   '#counter > [data-action="increment"]');
// const counterEl = document.querySelector('#counter > span');

// через паттерн "объект ссылок"
const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.querySelector("#value"),
};

let counterValue = Number(refs.counterValueEl.textContent);
refs.decrementBtnEl.addEventListener("click", onDecrementBtnClick);
refs.incrementBtnEl.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue = 0
    ? (refs.counterValueEl.textContent = counterValue)
    : (refs.counterValueEl.textContent = counterValue -= 1);
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
}

// let value = 0;

// function decremenet() {
//   value -= 1;

//   render();
// }

// function incremenet() {
//   value += 1;

//   render();
// }

// function render() {
//   ref.htmlValue.textContent = value;
// }

// // const buttonIncrement = document.querySelector('.decrement');
// // const buttonDecrement = document.querySelector('.increment');
// // const htmlValue = document.querySelector('.value');

// const ref = {
//   buttonDecrement: document.querySelector('.decrement'),
//   buttonIncrement: document.querySelector('.increment'),
//   htmlValue: document.querySelector('.value'),
// };

// ref.buttonDecrement.addEventListener('click', decremenet);
// ref.buttonIncrement.addEventListener('click', incremenet);
