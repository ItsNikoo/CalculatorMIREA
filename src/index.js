//Генерация 0-9, точки и равно
const numbersContainer = document.getElementById('numbers');

for (let i = 9; i >= 0; i--) {
    const button = document.createElement('button');
    button.innerHTML = i;
    button.className = 'numberButton';
    numbersContainer.appendChild(button);
}
const doubleZeroButton = document.createElement('button');
doubleZeroButton.innerHTML = '00';
doubleZeroButton.className = 'numberButton';
numbersContainer.appendChild(doubleZeroButton);

const dotButton = document.createElement('button');
dotButton.innerHTML = '.';
dotButton.className = 'numberButton';
numbersContainer.appendChild(dotButton);

//Логика

const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

//История
const historyContainer = document.getElementById('history');
const historyButton = document.body.querySelector(".delete-history-button");

historyButton.addEventListener('click', () => {
    historyContainer.innerHTML = '';
    saveHistory();
});

const saveHistory = () => {
    localStorage.setItem('calculatorHistory', historyContainer.innerHTML);
};

const loadHistory = () => {
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
        historyContainer.innerHTML = savedHistory;
        historyContainer.className = 'history-container';
    }
};

window.addEventListener('load', loadHistory);

const addToHistory = (expression, result) => {
    const historyElement = document.createElement('div');
    historyElement.innerHTML = `${expression} = ${result}`;
    historyElement.className = 'history-element';
    historyContainer.appendChild(historyElement);
    saveHistory();
}



function equalNumberCase(){
    if (result.value.includes('/0')) {
        throw new Error('Деление на ноль');
    }
    if (result.value.includes('^')) {
        const expression = result.value;
        let [base, exponent] = result.value.split('^');
        result.value = power(base, exponent);
        addToHistory(expression, result.value);
    }
    else{
        const expression = result.value;
        result.value = eval(result.value);
        addToHistory(expression, result.value);
    }
    result.value = eval(result.value);
}

const clearAll = () => {
    result.value = '0';
}
const deleteLast = () => {
    result.value = result.value.slice(0, -1) || '0';
}

const result = document.getElementById('result');

const buttons = Array.from(document.getElementsByClassName('numberButton'));

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.innerHTML) {
            case 'AC':
                try {
                    clearAll();
                    break;
                } catch (e) {
                    clearAll();
                    break;
                }
            case 'DEL':
                deleteLast();
                break;
            case "=":
                try {
                    equalNumberCase();
                    break;
                } catch (e) {
                    result.value = "Ошибка";
                    break;
                }
            default:
                try {
                    if (result.value === '0' && button.innerHTML !== '.') {
                        result.value = button.innerHTML;
                    } else {
                        result.value += button.innerHTML;
                    }
                } catch (e) {
                    clearAll();
                }
        }


    });
});

result.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        try {
            equalNumberCase();
        } catch (e) {
            result.value = "Ошибка";
        }
    }
    else if(event.key === 'Escape'){
        clearAll();
    }
    else{
        if (result.value === "0" || result.value === "Ошибка") {
            result.value = "";
        }
    }
});
