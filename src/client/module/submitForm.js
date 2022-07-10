import { randomGenerationTask, solution, randomGenerationIndex } from './randomNum';

function triggerAnimations(elem, className, timeout = 300) {
  elem.classList.add(className)
  setTimeout(() => {
    elem.classList.remove(className);
  }, timeout);
}

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
  //show windo
  startBtn.classList.add('none');
 triggerAnimations(modalWindow, 'animate__fadeIn');
  modalWindow.classList.add('active-window');
});

submitBtn.addEventListener('click', (e, ) => {

  input.value = '';
  if (!input.value == '' && Number(submitBtn.value = input.value) == number) {
    console.log('tak');
    number = solution(randomGenerationTask(), task, randomGenerationIndex());
    // input.value = '';
    console.log(number);
  } else {
    console.log('nit');
    modalWindow.classList.add('animate__fadeOut')
    triggerAnimations(modalWindow, 'animate__fadeOut');
    setTimeout(() => {
      modalWindow.classList.remove('active-window');
      number = solution(randomGenerationTask(), task, randomGenerationIndex());
    }, 300);
    startBtn.classList.remove('none');
    // input.value = '';
  }
})

input.addEventListener('keydown', (e) => {
  
  if (e.keyCode == 13) {
    e.preventDefault()
  }
})
