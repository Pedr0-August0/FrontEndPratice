
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'

import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'


const appSettings = {
    databaseURL: "https://watc-dc460-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database, "items")

const inputBtn = document.getElementById("input-btn")
const inputField = document.getElementById("input-field")
let listElement = document.getElementById("list")

inputBtn.addEventListener("click", function () {

    let inputFieldValue = inputField.value

    push(itemsInDB, inputFieldValue)

    clearInputFieldEl()

})

onValue(itemsInDB, function (snapshot) {

    if (snapshot.exists()) {

        let itemsArrayEntries = Object.entries(snapshot.val())

        clearItemsElement()

        for (let i = 0; i < itemsArrayEntries.length; i++) {

            let currentItem = itemsArrayEntries[i]

            appendItemToList(currentItem)
        }
    } else {

        clearItemsElement()

        appendItemToList(["1", "Nothing Here"])
    }
})

function clearInputFieldEl() {
    inputField.value = ""
}

function appendItemToList(currentItemValue) {

    let itemID = currentItemValue[0]
    let itemValue = currentItemValue[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("dblclick", function () {
        let locationOfItemInDB = ref(database, `items/${itemID}`)

        remove(locationOfItemInDB)
    })

    listElement.append(newEl)

}

function clearItemsElement() {
    listElement.innerHTML = ""
}

