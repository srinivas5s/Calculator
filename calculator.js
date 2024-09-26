function clearDisplay() {
    document.getElementById('display').value = ''
}

function deleteOne() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendChar(char) {
    const display = document.getElementById("display");
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/', '.', '%'].includes(lastChar) && ['+', '-', '*', '/', '.', '%'].includes(char)) {
        return;
    }

    display.value += char;
}

function calculate() {
    try {
        const Display = document.getElementById("display")
        Display.value = eval(Display.value)
    }
    catch (error) {
        document.getElementById("display").value = "error"
    }
}