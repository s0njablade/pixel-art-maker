document.addEventListener('DOMContentLoaded', function () {



    var penColor = 'lavender'



    function setPixelColor() {
        event.target.classList.toggle(penColor)

    }

    var paintBox = document.getElementById('art')

    // var onPixelClick = function () {
    //     event.target.setPixelColor
    // }

    paintBox.addEventListener('click', setPixelColor)

})