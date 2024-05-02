const display = document.getElementById("display");

function show(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function del(){
    display.value =  display.value.slice(0,-1)
}

function calculate(){
    let tempeqn = display.value;
    let deqn;
    deqn = tempeqn.replaceAll('÷','/');
    const eqn = deqn.replaceAll('×','*');
    try {
        display.value = eval(eqn);
    } catch (error) {
        display.value = 'ERROR';
    }
}
