//повертає 2 числа 
function randomGenerationTask() {

  const firstNum = Math.floor(Math.random() * (1 - 1000) + 1000);
  const secondNum = Math.floor(Math.random() * (1 - 1000) + 1000);

  return [firstNum, secondNum];
};

function randomGenerationIndex() {
  
  const index = Math.round(Math.random());

  return index;

};

//повертає суму
function solution ([num1, num2], inputTask, index) {

  

  if (index === 1) {
    inputTask.textContent = `${num1} + ${num2} =`;

    let result = num1 + num2;
    // console.log(result);
    return result
  } else {
    inputTask.textContent = `${num1} - ${num2} =`;

    let result = num1 - num2;
    // console.log(result);
    return result
  }
};

export {randomGenerationTask, solution, randomGenerationIndex};