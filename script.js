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
    return answer.toFixed(8);
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
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 0;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 0;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 0;
                        }
                    }
                    break;
                case '1':
                    if(typeof number === "undefined"){
                        number = 1;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 1;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 1;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 1;
                        }
                    }
                    break;
                case '2':
                    if(typeof number === "undefined"){
                        number = 2;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 2;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 2;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 2;
                        }
                    }
                    break;
                case '3':
                    if(typeof number === "undefined"){
                        number = 3;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 3;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 3;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 3;
                        }
                    }
                    break;
                case '4':
                    if(typeof number === "undefined"){
                        number = 4;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 4;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 4;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 4;
                        }
                    }
                    break;
                case '5':
                    if(typeof number === "undefined"){
                        number = 5;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 5;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 5;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 5;
                        }
                    }
                    break;
                case '6':
                    if(typeof number === "undefined"){
                        number = 6;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 6;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 6;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 6;
                        }
                    }
                    break;
                case '7':
                    if(typeof number === "undefined"){
                        number = 7;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 7;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 7;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 7;
                        }
                    }
                    break;
                case '8':
                    if(typeof number === "undefined"){
                        number = 8;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 8;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 8;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 8;
                        }
                    }
                    break;
                case '9':
                    if(typeof number === "undefined"){
                        number = 9;
                    } else if (typeof number != "undefined" && typeof operator === "undefined") {
                        number = (number * 10) + 9;
                    } else {
                        if (typeof anotherNumber === "undefined") {
                            anotherNumber = 9;
                        } else {
                            anotherNumber = (anotherNumber * 10) + 9;
                        }
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
            if (e.target.id == "=" && (typeof number === "undefined" || typeof operator === "undefined" || typeof anotherNumber === "undefined")) {
                clear();
            } else {
                displayValue = "";
                let answer = operate(operator, number, anotherNumber);
                document.querySelector('.screen').innerHTML = `${answer.toLocaleString('en-US')}`;
                number = answer;
                anotherNumber = undefined;
                displayValue += answer;
            }
        }
    })
});