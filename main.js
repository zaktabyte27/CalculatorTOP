operators = document.querySelectorAll(".operator")
operators.forEach((operator)=>operator.addEventListener("click",(e)=>operatorEval(e.target.textContent)))

numbers = document.querySelectorAll(".number")
numbers.forEach((num)=>num.addEventListener("click",(e)=>numberEval(e.target.textContent)))

displayUpper = document.querySelector(".displayUpper")
displayLower = document.querySelector(".displayLower")
clearBtn = document.querySelector(".clear")
deleteBtn = document.querySelector(".delete")
equalBtn = document.querySelector(".equals")

equalBtn.addEventListener("click",equals)
clearBtn.addEventListener("click",clearEval)
deleteBtn.addEventListener("click",deleteEval)

operatorArray = [
    "+",
    "-",
    "x",
    "÷",
    "",
    "="
]

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function numberEval(num){
    displayText = displayLower.textContent
    displayText = displayText+num
    displayLower.innerHTML = displayText
}

function operatorEval(operation){
    displayLowerText = displayLower.textContent
    displayUpperText = displayUpper.textContent
    lastCharLower = displayLowerText.charAt(displayLowerText.length -1)
    lastCharUpper = displayUpperText.charAt(displayUpperText.length -1)
    if (operatorArray.includes(lastCharLower)){
        console.log("Operator error")
    } else {
        if (operatorArray.includes(lastCharUpper) && displayUpperText != ""){
            let result
            if (lastCharUpper == "+"){
                result = add(parseInt(displayUpperText.slice(0,-1)),parseInt(displayLowerText))
            } else if (lastCharUpper == "-"){
                result = subtract(parseInt(displayUpperText.slice(0,-1)),parseInt(displayLowerText))
            } else if (lastCharUpper == "x"){
                result = multiply(parseInt(displayUpperText.slice(0,-1)),parseInt(displayLowerText))
            } else if (lastCharUpper == "÷"){
                result = divide(parseInt(displayUpperText.slice(0,-1)),parseInt(displayLowerText))
            }
            displayUpperText = result+operation
            displayLowerText = ""
            } else {
            displayUpperText = displayLowerText+operation
            displayLowerText = ""
        }
    }
    displayLower.innerHTML = displayLowerText
    displayUpper.innerHTML = displayUpperText
}

function equals(){
    displayLowerText = displayLower.textContent
    displayUpperText = displayUpper.textContent
    lastCharLower = displayLowerText.charAt(displayLowerText.length -1)
    lastCharUpper = displayUpperText.charAt(displayUpperText.length -1)
    if (operatorArray.includes(lastCharUpper) && displayUpperText != "" && displayLowerText != ""){
        let result
        if (lastCharUpper == "+"){
            result = add(parseFloat(displayUpperText.slice(0,-1)),parseFloat(displayLowerText))
        } else if (lastCharUpper == "-"){
            result = subtract(parseFloat(displayUpperText.slice(0,-1)),parseFloat(displayLowerText))
        } else if (lastCharUpper == "x"){
            result = multiply(parseFloat(displayUpperText.slice(0,-1)),parseFloat(displayLowerText))
        } else if (lastCharUpper == "÷"){
            result = divide(parseFloat(displayUpperText.slice(0,-1)),parseFloat(displayLowerText))
        }
        displayUpperText = result
        displayLowerText = result
    }
    displayLower.innerHTML = displayLowerText
    displayUpper.innerHTML = displayUpperText
}

function clearEval(){
    displayLowerText = displayLower.textContent
    displayLowerText = ""
    displayUpperText = displayUpper.textContent
    displayUpperText = ""
    displayLower.innerHTML = displayLowerText  
    displayUpper.innerHTML = displayUpperText
}

function deleteEval(){
    displayLowerText = displayLower.textContent
    displayLowerText = displayLowerText.slice(0,-1)
    displayLower.innerHTML = displayLowerText
}

