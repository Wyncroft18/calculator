function Add(x, y) {
    let answer;
    answer = x + y;
    return answer
}

function Subtract(x, y) {
    let answer;
    answer = x - y;
    return answer
}

function Multiply(x, y) {
    let answer;
    answer = x * y;
    return answer
}

function Divide(x, y) {
    let answer;
    answer = x / y;
    return answer
}

function operate(operator, number, anotherNumber) {
    switch(operator) {
        case "+":
            return Add(number, anotherNumber);
        case "-":
            return Subtract(number, anotherNumber);
        case "x":
            return Multiply(number, anotherNumber);
        case "/":
            return Divide(number, anotherNumber);
    }
}

function clear() {
    location.reload();
}

let number;
let operator;
let anotherNumber;
let displayValue = "";

let buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        if (e.target.id != "clear" && e.target.id != "=") {
            displayValue += `${e.target.id}`;
        }
        document.querySelector(".screen").innerHTML = displayValue;
        if (e.target.id == "clear") {
            clear();
        } else if (e.target.id >= 0 && e.target.id <= 9) {
            switch (e.target.id) {
                case '0':
                    if(typeof number === "undefined"){
                        number = 0;
                    } else {
                        anotherNumber = 0;
                    }
                    break;
                case '1':
                    if(typeof number === "undefined"){
                        number = 1;
                    } else {
                        anotherNumber = 1;
                    }
                    break;
                case '2':
                    if(typeof number === "undefined"){
                        number = 2;
                    } else {
                        anotherNumber = 2;
                    }
                    break;
                case '3':
                    if(typeof number === "undefined"){
                        number = 3;
                    } else {
                        anotherNumber = 3;
                    }
                    break;
                case '4':
                    if(typeof number === "undefined"){
                        number = 4;
                    } else {
                        anotherNumber = 4;
                    }
                    break;
                case '5':
                    if(typeof number === "undefined"){
                        number = 5;
                    } else {
                        anotherNumber = 5;
                    }
                    break;
                case '6':
                    if(typeof number === "undefined"){
                        number = 6;
                    } else {
                        anotherNumber = 6;
                    }
                    break;
                case '7':
                    if(typeof number === "undefined"){
                        number = 7;
                    } else {
                        anotherNumber = 7;
                    }
                    break;
                case '8':
                    if(typeof number === "undefined"){
                        number = 8;
                    } else {
                        anotherNumber = 8;
                    }
                    break;
                case '9':
                    if(typeof number === "undefined"){
                        number = 9;
                    } else {
                        anotherNumber = 9;
                    }
                    break;
            } 
        } else if (e.target.id === "+" || e.target.id === "-" || e.target.id === "x" || e.target.id === "/") {
            switch (e.target.id) {
                case "+":
                    operator = "+";
                    break;
                case "-":
                    operator = "-";
                    break;
                case "x":
                    operator = "x";
                    break;
                case "/":
                    operator = "/";
                    break;
            }
        } else if (e.target.id == "=") {
            document.querySelector('.screen').innerHTML = `${operate(operator, number, anotherNumber)}`;
        }
    })
});