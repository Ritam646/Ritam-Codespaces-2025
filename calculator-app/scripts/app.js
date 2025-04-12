const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.key');

let currentInput = '';
let previousInput = '';
let operator = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        const action = key.dataset.action;
        const value = key.textContent;

        if (!action) {
            currentInput += value;
            screen.value = currentInput;
        } else if (action === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
            screen.value = '';
        } else if (action === 'delete') {
            currentInput = currentInput.slice(0, -1);
            screen.value = currentInput;
        } else if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
            operator = action;
            previousInput = currentInput;
            currentInput = '';
        } else if (action === 'equals') {
            if (previousInput && currentInput && operator) {
                const a = parseFloat(previousInput);
                const b = parseFloat(currentInput);
                let result;

                switch (operator) {
                    case 'add':
                        result = a + b;
                        break;
                    case 'subtract':
                        result = a - b;
                        break;
                    case 'multiply':
                        result = a * b;
                        break;
                    case 'divide':
                        result = a / b;
                        break;
                }

                screen.value = result;
                currentInput = result.toString();
                previousInput = '';
                operator = '';
            }
        }
    });
});