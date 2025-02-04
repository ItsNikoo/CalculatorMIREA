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
                    if (result.value.includes('/0')) {
                        throw new Error('Деление на ноль');
                    }
                    if (result.value.includes('^')) {
                        let [base, exponent] = result.value.split('^');
                        result.value = power(base, exponent);
                        break;
                    }
                    result.value = eval(result.value);
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

