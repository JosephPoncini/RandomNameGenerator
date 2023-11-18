import { RandomName } from "./randomFunction.js";

let addBtn = document.getElementById("addBtn");
let nameInput = document.getElementById("nameInput");
let randomBtn = document.getElementById("randomBtn");
let randomName = document.getElementById("randomName");
let removeBtn = document.getElementById("removeBtn");

let nameArray = [];
if (localStorage.getItem("names")) {
    nameArray = JSON.parse(localStorage.getItem("names"));
}

addBtn.addEventListener('click', function (event) {
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);

    localStorage.setItem("names", JSON.stringify(nameArray));
});

randomBtn.addEventListener('click', function (event) {
    randomName.innerText = RandomName(nameArray);
});

removeBtn.addEventListener('click', function (event) {
    let index = nameArray.indexOf(nameInput.value);
    if (index != -1) {
        nameArray.splice(index, 1);
        nameInput.value = "";
        localStorage.setItem("names", JSON.stringify(nameArray));
    }
        console.log(nameArray);
});