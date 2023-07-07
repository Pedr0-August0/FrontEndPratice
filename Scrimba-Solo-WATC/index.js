import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'

import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

const appSettings = {
    databaseURL: "https://watc-dc460-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database, "items")


const inputBtn = document.getElementById("input-btn")

const inputField = document.getElementById("input-field")

const listElement = document.getElementById("list")

//pegar o valor do input e colocar na base de dados//
inputBtn.addEventListener("click", function () {
    let inputFieldValue = inputField.value

    push(itemsInDB, inputFieldValue)
})