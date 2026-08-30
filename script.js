const countText = document.getElementById("counterText");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const editBtn = document.getElementById("editBtn");
let count = Number(localStorage.getItem("count")) || 0;
countText.textContent = count


function saveCount() {
    localStorage.setItem("count", count);
}

function increase() {
    countText.textContent =++ count;
    saveCount();
}

function decrease() {
    countText.textContent =-- count;
    saveCount();
}

function edit() {
    count = Number(prompt("What should the custom count be?"));
    countText.textContent = count;
    saveCount();
}

increaseBtn.addEventListener("click", () => {
    increase()
})

decreaseBtn.addEventListener("click", () => {
    decrease()
})

editBtn.addEventListener("click", () => {
    edit()
})