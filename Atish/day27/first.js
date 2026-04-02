const display = document.getElementById("display");

// add number/operator
function appendnumber(value){
    display.value += value;
}

// clear all
function cleardisplay(){
    display.value = "";
}

// delete last digit
function deletedisplay(){
    display.value = display.value.slice(0, -1);
}

// calculate
function calculate(){
    try{
        display.value = eval(display.value);
    } catch{
        display.value = "Error";
    }
}