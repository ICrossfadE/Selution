import {randomGenerationTask, solution, randomGenerationIndex} from './randomNum';

const startBtn = document.querySelector('.start-btn');
const modalWindow = document.querySelector('.modal-wrapper');
const task = document.querySelector('.modal__window-task');
const input = document.querySelector('.input-submit');
const submitBtn = document.querySelector('.btn-submit');

//first power
let number = solution(randomGenerationTask(), task, randomGenerationIndex());

startBtn.addEventListener('click', (e) => {
  e.preventDefault;

  console.log(number);
  //show window
  startBtn.classList.add('none');
  modalWindow.classList.add('animate__fadeIn');
  modalWindow.classList.toggle('active-window');
});

submitBtn.addEventListener('click', (e, ) => {

  if (!input.value == '' && Number(submitBtn.value = input.value) == number) {
    console.log('tak');
    number = solution(randomGenerationTask(), task, randomGenerationIndex());
    input.value = '';
    console.log(number);
  } else {
    console.log('nit');
    number = solution(randomGenerationTask(), task, randomGenerationIndex());
    modalWindow.classList.toggle('active-window');
    modalWindow.classList.remove('animate__fadeIn');
    startBtn.classList.remove('none');
    input.value = '';
  }
})

input.addEventListener('keydown', (e) => {
  
  if (e.keyCode == 13) {
    e.preventDefault()
  }
})






