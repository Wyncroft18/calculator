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
            console.log(Add(number, anotherNumber));
            break;
        case "-":
            console.log(Subtract(number, anotherNumber));
            break;
        case "x":
            console.log(Multiply(number, anotherNumber));
            break;
        case "/":
            console.log(Divide(number, anotherNumber));
            break;
    }
}

let number = 6;
let operator = "/";
let anotherNumber = 6;

operate(operator, number, anotherNumber);