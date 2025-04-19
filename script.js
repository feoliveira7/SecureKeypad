senha = "8568";
senhaDigitada = "";


function number1() {
    senhaDigitada += "1";
    document.getElementById("codeView").value = senhaDigitada;
}
function number2() {
    senhaDigitada += "2";
    document.getElementById("codeView").value = senhaDigitada;
}
function number3() {
    senhaDigitada += "3";
    document.getElementById("codeView").value = senhaDigitada;
}
function number4() {
    senhaDigitada += "4";
    document.getElementById("codeView").value = senhaDigitada;
}
function number5() {
    senhaDigitada += "5";
    document.getElementById("codeView").value = senhaDigitada;
}
function number6() {
    senhaDigitada += "6";
    document.getElementById("codeView").value = senhaDigitada;
}
function number7() {
    senhaDigitada += "7";
    document.getElementById("codeView").value = senhaDigitada;
}
function number8() {
    senhaDigitada += "8";
    document.getElementById("codeView").value = senhaDigitada;
}
function number9() {
    senhaDigitada += "9";
    document.getElementById("codeView").value = senhaDigitada;
}
function number0() {
    senhaDigitada += "0";
    document.getElementById("codeView").value = senhaDigitada;
}

function clearCode(){
    senhaDigitada = "";
    document.getElementById("codeView").value = senhaDigitada;
    document.getElementById("codeVisor").style.backgroundColor='rgb(206, 206, 206)'
}

function enter(){
    if(senhaDigitada == senha){
        alert("Senha correta!");
        document.getElementById("codeVisor").style.backgroundColor='green'
    }else{
        alert("Senha incorreta!");
        clearCode();
        document.getElementById("codeVisor").style.backgroundColor='rgb(206, 206, 206)'
    }
}