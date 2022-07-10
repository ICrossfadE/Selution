function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min); // 0 - 1
};
//повертає 2 числа
export function randomGenerationTask() {
  const firstNum = generateRandomInt(1, 1000);
  const secondNum = generateRandomInt(1, 1000);

  return [firstNum, secondNum];
};

export function randomGenerationIndex() {
  const operators = ['+', '-'];
  const index = generateRandomInt(0, operators.length - 1);
  return operators[index];
  
  // const index = Math.round(Math.random());

  // return index;
}; 

//повертає суму
export function solution ([num1, num2], inputTask, operator) {

  if (operator === '+') {
    inputTask.textContent = `${num1} + ${num2} =`;

    let result = num1 + num2;
    // console.log(result);
    return result
  } else if (operator === '-') {
    inputTask.textContent = `${num1} - ${num2} =`;

    let result = num1 - num2;
    // console.log(result);
    return result
  }
};