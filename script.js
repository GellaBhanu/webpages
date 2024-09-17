function addChar(char) {
    const display = document.forms['calc']['display'];
    display.value += char;
}

function clearDisplay() {
    document.forms['calc']['display'].value = '';
}

function deleteLast() {
    const display = document.forms['calc']['display'];
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.forms['calc']['display'];
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function sqrt() {
    const display = document.forms['calc']['display'];
    display.value = Math.sqrt(eval(display.value));
}

function square() {
    const display = document.forms['calc']['display'];
    display.value = Math.pow(eval(display.value), 2);
}

function percent() {
    const display = document.forms['calc']['display'];
    display.value = eval(display.value) / 100;
}
