var changeColor = document.querySelectorAll(".colors")

var currentColor = "white"

var penColor = document.querySelectorAll(".pixel")

var paintBox = document.getElementById("art")

// function setPixelColor(event) {
//     event.target.classList.toggle(changeColor)
// }

for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener("click", grabColor)
}

function grabColor(event) {
    currentColor = event.target.id
    console.log(currentColor)
}

for (let i = 0; i < penColor.length; i++) {
    penColor[i].addEventListener("click", applyColor)
}

function applyColor(event) {
    event.target.style.backgroundColor = currentColor
}

// paintBox.addEventListener("click", grabColor)

// var paintBox = document.getElementById('art')

// var onPixelClick = function () {
//     event.target.setPixelColor
// }

// paintBox.addEventListener('click', setPixelColor)