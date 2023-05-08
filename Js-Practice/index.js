let FirstName = "Pedro Augusto"

let LastName = "R Pinto"

let Greeting = "Hi There"


function concatenate() {
  let FullName = FirstName + " " + LastName
  console.log(FullName)
}

function greeting() {
  let greetingToUser = Greeting + ", " + FirstName + " " + LastName + "!"
  console.log(greetingToUser)
}

let myPoints = 3

function add3Points() {
  myPoints += 3
  console.log(myPoints)
}

function remove1Point() {
  myPoints -= 1
  console.log(myPoints)
}

let errorcanvas = document.getElementById("error-message")

function error() {
  errorcanvas.textContent = "Something went wrong, please try again"
}

let num1 = 8

let num2 = 2

let resultado = document.getElementById("resultado-1")

document.getElementById("num-1").textContent = num1
document.getElementById("num-2").textContent = num2

function subtract() {
  resultado.innerHTML = "O Resultado é "
  resultado.innerHTML += num1 - num2
}

function sum() {
  resultado.innerHTML = "O Resultado é "
  resultado.innerHTML += num1 + num2
}

function multiply() {
  resultado.innerHTML = "O Resultado é "
  resultado.innerHTML += num1 * num2
}

function divide() {
  resultado.innerHTML = "O Resultado é "
  resultado.innerHTML += num1 / num2
}
