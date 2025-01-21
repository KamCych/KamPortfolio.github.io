const slideshow = document.getElementsByClassName("img-container")
const img1 = document.getElementById("img-1")
const img2 = document.getElementById("img-2")
const img3 = document.getElementById("img-3")

const slide_buttons_container = document.getElementById("slide-buttons-container");
const slide_buttons = document.getElementsByClassName("slide-buttons");

let current = 1;

slideshow[1].style.display = "none";
slideshow[2].style.display = "none";
slide_buttons[0].style.backgroundColor = "#FF0000"
function update_slide() {

    for (let i = 0; i < 3; i++) {
        slideshow[i].style.display = "none";
        slide_buttons[i].style.backgroundColor = "#F1A01D";
    }
    
    slideshow[current].style.display = "block";
    slide_buttons[current].style.backgroundColor = "#FF0000";

    current += 1

    if (current > 2) {
        current = 0;
    }
}

console.log(slideshow[0]);
setInterval(update_slide, 3000);