add = (a, b) => {
    return a + b
}

substract = (a, b) => {
    return a - b
}

multiply = (a, b) => {
    return a * b
}

divide = (a, b) => {
    return a / b
}

operate = (a, ops, b) => {
    if (a === 1 && ops === '+' && b === 1) alert("Ádám & Gabica together forever :)")
    if (ops === '+') solution = add(a, b)
    else if (ops === '-') solution = substract(a, b)
    else if (ops === 'x') solution = multiply(a, b)
    else if (ops === '÷') solution = divide(a, b)
}

const container = document.getElementById("container");
const buttons = document.getElementById("buttons")

// original button maker to make numbers
// buttonMaker = () => {
//     buttons.appendChild(document.createElement("br"))
//     for (i = 1; i <= 9; i++) {
//     let button = document.createElement("button")
//     buttons.appendChild(button)
//     buttons.lastChild.textContent = i
//     buttons.lastChild.id = i
//     if (i % 3 === 0) {
//         buttons.appendChild(document.createElement("br"))
//     }
//     }
// }

const lastButton = document.getElementById('lastButtons')


customButton = (...args) => {
    for (let arg of args) {
    let button = document.createElement("button")
    buttons.appendChild(button)
    buttons.lastChild.textContent = arg
    buttons.lastChild.id = "is" + arg //had to add 'is' to id's because otherwise they were untargettable by queryselector...
}}

customButton("CE", "C", "⌫", "÷")
buttons.appendChild(document.createElement("br"))
customButton('1', '2', '3', 'x')
buttons.appendChild(document.createElement("br"))
customButton('4', '5', '6', '-')
buttons.appendChild(document.createElement("br"))
customButton('7', '8', '9', 'plus')
buttons.appendChild(document.createElement("br"))
customButton("+/-", "0", ".", "=")

document.getElementById('isplus').innerHTML = '+' //is+ was untargatable by queryselector...

// buttons are ready at this point
// lets put global variables here - would have made more sense to put it up front, so its onyl reasonable to keep them here
const display = document.getElementById("display")
let displayedNumber = 0;
display.textContent = displayedNumber
let storedNumber = 0;
let operator
let solution = 0;

//let's render functions to the buttons

const operands = document.querySelectorAll('#is0, #is1, #is2, #is3, #is4, #is5, #is6, #is7, #is8, #is9')
operands.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (display.textContent == 0 && !display.textContent.includes('.')) display.textContent = button.textContent
        else display.textContent = display.textContent + button.textContent;
})
})

document.getElementById('isCE').addEventListener('click', (e) => {display.textContent = 0})
document.getElementById('isC').addEventListener('click', (e) => {displayedNumber = 0; display.textContent = 0; storedNumber = 0; solution = 0})
document.getElementById('is⌫').addEventListener('click', (e) => {display.textContent = display.textContent.substring(0, display.textContent.length - 1)})
document.getElementById('is.').addEventListener('click', (e) => {if (!display.textContent.includes('.')) display.textContent = display.textContent + '.'})
document.getElementById('is+/-').addEventListener('click', (e) => {if (display.textContent[0] == '-') display.textContent = display.textContent.substring(1); else display.textContent = '-'.concat(display.textContent)})

const operators = document.querySelectorAll('#isplus, #is-, #is÷, #isx')
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (!solution) storedNumber = Number(display.textContent)
        else if (solution === Number(display.textContent)) storedNumber = solution
        else storedNumber = Number(display.textContent)
        operator = button.textContent
        displayedNumber = 0; display.textContent = 0
        })
    })

const equals = document.getElementById('is=')
equals.addEventListener('click', (e) => {
    displayedNumber = Number(display.textContent)
    operate(storedNumber, operator, displayedNumber)
    if (solution === "Ádám & Gabica together forever :)") display.textContent = solution
    else display.textContent =  parseFloat(solution.toFixed(10))
    storedNumber = 0;
})
