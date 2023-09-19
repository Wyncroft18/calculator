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
    if (answer % 1 != 0) {
        return answer.toFixed(4);
    } else {
        return answer;
    }
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

let displayValue = "";
let operatorArray = [];
let opCounter = 0;
let numberArray = [];
let numberHolder;
let answer;

let buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        if (e.target.id != "clear" && e.target.id != "=") {
            if (e.target.id >= 0 && e.target.id <= 9) {
                switch (e.target.id) {
                    case "0":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 0;
                        } else {
                            numberHolder = (numberHolder * 10) + 0;
                        }
                        break;
                    case "1":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 1;
                        } else {
                            numberHolder = (numberHolder * 10) + 1;
                        }
                        break;
                    case "2":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 2;
                        } else {
                            numberHolder = (numberHolder * 10) + 2;
                        }
                        break;
                    case "3":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 3;
                        } else {
                            numberHolder = (numberHolder * 10) + 3;
                        }
                        break;
                    case "4":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 4;
                        } else {
                            numberHolder = (numberHolder * 10) + 4;
                        }
                        break;
                    case "5":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 5;
                        } else {
                            numberHolder = (numberHolder * 10) + 5;
                        }
                        break;
                    case "6":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 6;
                        } else {
                            numberHolder = (numberHolder * 10) + 6;
                        }
                        break;
                    case "7":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 7;
                        } else {
                            numberHolder = (numberHolder * 10) + 7;
                        }
                        break;
                    case "8":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 8;
                        } else {
                            numberHolder = (numberHolder * 10) + 8;
                        }
                        break;
                    case "9":
                        if (typeof numberHolder === "undefined") {
                            numberHolder = 9;
                        } else {
                            numberHolder = (numberHolder * 10) + 9;
                        }
                        break;
                }
            } else if (e.target.id === "+" || e.target.id === "-" || e.target.id === "x" || e.target.id === "/") {
                switch (e.target.id) {
                    case "+":
                        opCounter += 1;
                        if (numberHolder != undefined) {
                            numberArray.push(numberHolder);
                        }
                        numberHolder = undefined;
                        operatorArray.push("+");
                        break;
                    case "-":
                        opCounter += 1;
                        if (numberHolder != undefined) {
                            numberArray.push(numberHolder);
                        }
                        numberHolder = undefined;
                        operatorArray.push("-");
                        break;
                    case "x":
                        opCounter += 1;
                        if (numberHolder != undefined) {
                            numberArray.push(numberHolder);
                        }
                        numberHolder = undefined;
                        operatorArray.push("x");
                        break;
                    case "/":
                        opCounter += 1;
                        if (numberHolder != undefined) {
                            numberArray.push(numberHolder);
                        }
                        numberHolder = undefined;
                        operatorArray.push("/");
                        break;
                }
            }
            displayValue += `${e.target.id}`;
            document.querySelector(".screen").innerHTML = displayValue;
        } else if (e.target.id == "clear") {
            clear();
        } else if (e.target.id == "=") {
            displayValue = ""
            if (numberHolder != undefined) {
               numberArray.push(numberHolder);
            }
            numberHolder = undefined;
            if (numberArray.length < 2) {
                    clear();
            } else {
                    for (let i = 0; i < opCounter; i++) {
                        answer = operate(operatorArray[i], numberArray[i], numberArray[i + 1]);
                        numberArray[i + 1] = answer;
                    }
                    document.querySelector(".screen").innerHTML = `${answer.toLocaleString('en-US')}`;
                    operatorArray = [];
                    opCounter = 0;
                    numberArray = [];
                    numberArray.push(answer); 
                    displayValue += answer;
                }
        }
    })
});