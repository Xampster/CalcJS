let expression = '';

function press(num) {
    if (expression === '0' && num !== '.') {
        expression = num;
    } else {
        expression += num;
    }
    document.getElementById('display').innerText = expression;
}

function calculate() {
    try {
        expression = eval(expression).toString();
        document.getElementById('display').innerText = expression;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').innerText = '0';
}
