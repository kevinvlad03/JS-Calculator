let display = document.getElementById("display");
let hasOperand = false;

function appendToDisplay(value){
    if(display.value == "0" || hasOperand){
        display.value = value;
        hasOperand = false;
    } else {
        display.value += value;
    }
}

function clearDisplay(){
    document.getElementById("display").value = "0";
    hasOperand = false;
}

function calculate(){
    display.value = eval(display.value);
    hasOperand = true;
}
