var display = document.getElementById("display")
var CE = document.getElementById("CE")
var C = document.getElementById("C")
var DEL = document.getElementById("DEL")
var DIV = document.getElementById("DIV")
var n7 = document.getElementById("7")
var n8 = document.getElementById("8")
var n9 = document.getElementById("9")
var x = document.getElementById("x")
var n4 = document.getElementById("4")
var n5 = document.getElementById("5")
var n6 = document.getElementById("6")
var minus = document.getElementById("-")
var n1 = document.getElementById("1")
var n2 = document.getElementById("2")
var n3 = document.getElementById("3")
var plus = document.getElementById("+")
var invertion = document.getElementById("+/-")
var n0 = document.getElementById("0")
var point = document.getElementById(".")
var isEqual = document.getElementById("=")

//stores the calculator history
var historic = {}
//first number of the operation
var number1 = 0
//second operation number
var number2 = 0
//stores the currently chosen operation
var operation = ""
//stores the last currently chosen operation
var lastOperation = ""
//lock the button "."
var pointLock = false


//check if the button was pressed
n7.addEventListener("click",function(){
    moficNumber("7")
})

n8.addEventListener("click",function(){
    moficNumber("8")
})

n9.addEventListener("click",function(){
    moficNumber("9")
})

n4.addEventListener("click",function(){
    moficNumber("4")
})

n5.addEventListener("click",function(){
    moficNumber("5")
})

n6.addEventListener("click",function(){
    moficNumber("6")
})

n1.addEventListener("click",function(){
    moficNumber("1")
})

n2.addEventListener("click",function(){
    moficNumber("2")
})

n3.addEventListener("click",function(){
    moficNumber("3")
})

n0.addEventListener("click",function(){
    moficNumber("0")
})

//Buttons operations

plus.addEventListener("click",function(){
    operation = "+"
    number2 = 0
})

minus.addEventListener("click",function(){
    operation = "-"
    number2 = 0
})

x.addEventListener("click",function(){
    operation = "x"
    number2 = 0
})

DIV.addEventListener("click",function(){
    operation = "/"
    number2 = 0
})

invertion.addEventListener("click",function(){
    if (operation == "" ) {
        number1 = -(parseFloat(number1))
        number1 =  number1.toString()

        modificDisplay(number1)
    }
    else{
        number2 = -(parseFloat(number2))
        number2 =  number2.toString()

        modificDisplay(number2)
    }
})

point.addEventListener("click",function(){
    //Lock the point
    if (pointLock == false){
        if (operation == "" ) {
            number1 = number1 + "."
            //clear after the point if point lock is false and existe a point
            for (let index = 0; index < number1.length + 1; index++) {
                if (number1[index] == ".") {
                    number1 = number1.substring(0, index + 1)
                    break
                }
            }
            modificDisplay(number1)
        }
        else{
            number2 = number2 + "."
            modificDisplay(number2)
        }
        pointLock = true
    }
})

CE.addEventListener("click",function(){
    number1 = 0
    number2 = 0
    operation = ""
    modificDisplay(number1)
})

C.addEventListener("click",function(){
    number1 = 0
    number2 = 0
    operation = ""
    modificDisplay(number1)
})

DEL.addEventListener("click",function(){
    if (operation == "" ) {
        number1 = number1.substring(0, number1.length - 1);
        modificDisplay(number1)
    }
    else{
        number2 = number2.substring(0, number2.length - 1);
        modificDisplay(number2)
    }
})


isEqual.addEventListener("click",function(){
    //plus operation
    if (operation == "+"){
        number1 = parseFloat(number1) + parseFloat(number2)
        number1 =  number1.toString()
        lastOperation = "+"
        operation = ""
        modificDisplay(number1)
    }
    else if(lastOperation == "+" && operation == ""){
        number1 = parseFloat(number1) + parseFloat(number2)
        number1 =  number1.toString()
        operation = ""
        modificDisplay(number1)
    }
    
    //minus operation
    if (operation == "-"){
        number1 = parseFloat(number1) - parseFloat(number2)
        number1 =  number1.toString()
        lastOperation = "-"
        operation = ""
        modificDisplay(number1)
    }
    else if(lastOperation == "-" && operation == ""){
        number1 = parseFloat(number1) - parseFloat(number2)
        number1 =  number1.toString()
        operation = ""
        modificDisplay(number1)
    }

    //multiplication operation
    if (operation == "x"){
        number1 = parseFloat(number1) * parseFloat(number2)
        number1 =  number1.toString()
        lastOperation = "x"
        operation = ""
        modificDisplay(number1)
    }
    else if(lastOperation == "x" && operation == ""){
        number1 = parseFloat(number1) * parseFloat(number2)
        number1 =  number1.toString()
        operation = ""
        modificDisplay(number1)
    }

    //divaid operation
    if (operation == "/"){
        number1 = parseFloat(number1) / parseFloat(number2)
        number1 =  number1.toString()
        lastOperation = "/"
        operation = ""
        modificDisplay(number1)
    }
    else if(lastOperation == "/" && operation == ""){
        number1 = parseFloat(number1) / parseFloat(number2)
        number1 =  number1.toString()
        operation = ""
        modificDisplay(number1)
    }

    if (pointLock == true){
        pointLock = false
    }
})

//shows the result on window
function modificDisplay(text) {
    display.textContent = text
}

//receive a number and make a modification to either the value saved 1 or 2 and shows the result
function moficNumber(numberM){
    if (operation == "" ) {
        if (number1 == 0){
            number1 = numberM
        }
        else{
            number1 = number1 + numberM
        }

        modificDisplay(number1)
    }
    else{
        if (number2 == 0){
            number2 = numberM
        }
        else{
            number2 = number2 + numberM
        }
        modificDisplay(number2)
    }
}






