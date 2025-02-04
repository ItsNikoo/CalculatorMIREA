//Генерация 0-9, точки и равно
const numbersContainer = document.getElementById('numbers');

for(let i = 9; i >= 0; i--){
    const button = document.createElement('button');
    button.innerHTML = i;
    button.className = 'numberButton';
    numbersContainer.appendChild(button);
}
const dotButton = document.createElement('button');
dotButton.innerHTML = '.';
dotButton.className = 'numberButton';
numbersContainer.appendChild(dotButton);

const ravnoButton = document.createElement('button');
ravnoButton.innerHTML = '=';
ravnoButton.className = 'numberButton' + ' blue';
numbersContainer.appendChild(ravnoButton);

// Генерация операторов
const operatorsContainer = document.getElementById('operations');
const operators = ['plus-svgrepo-com.svg', 'minus-svgrepo-com.svg', 'divide-01-svgrepo-com.svg', 'close-cross-svgrepo-com.svg'];

for (let i = 0; i < 4; i++){
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = `./images/${operators[i]}`;
    img.className = 'operationButtonImg';
    button.appendChild(img);
    button.id = i;
    button.className = 'operationButton';
    operatorsContainer.appendChild(button);
}