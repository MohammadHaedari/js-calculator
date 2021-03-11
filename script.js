function adds() {
    var firstNumber = document.getElementById("firstnumber").valueAsNumber ;
    var secondNumber = document.getElementById("secondnumber").valueAsNumber ;
    var answer = firstNumber + secondNumber ;
    document.getElementById("answerplace").innerHTML = firstNumber + " + " + secondNumber + " = " + answer ;
    console.log(answer);
}

function subtracts() {
    var firstNumber = document.getElementById("firstnumber").valueAsNumber ;
    var secondNumber = document.getElementById("secondnumber").valueAsNumber ;
    var answer = firstNumber - secondNumber ;
    document.getElementById("answerplace").innerHTML = firstNumber + " - " + secondNumber + " = " + answer ;
    console.log(answer);
}

function multiplies() {
    var firstNumber = document.getElementById("firstnumber").valueAsNumber ;
    var secondNumber = document.getElementById("secondnumber").valueAsNumber ;
    var answer = firstNumber * secondNumber ;
    document.getElementById("answerplace").innerHTML = firstNumber + " × " + secondNumber + " = " + answer ;
    console.log(answer);
}

function divides() {
    var firstNumber = document.getElementById("firstnumber").valueAsNumber ;
    var secondNumber = document.getElementById("secondnumber").valueAsNumber ;
    var answer = firstNumber / secondNumber ;
    document.getElementById("answerplace").innerHTML = firstNumber + " ÷ " + secondNumber + " = " + answer ;
    console.log(answer);
}