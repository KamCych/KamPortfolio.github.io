const slideshow = document.getElementsByClassName("img-container")
const img1 = document.getElementById("img-1")
const img2 = document.getElementById("img-2")
const img3 = document.getElementById("img-3")

const slide_buttons = document.getElementById("slide-buttons");

let current = 1;

slideshow[1].style.display = "none";
slideshow[2].style.display = "none";

function update_slide() {

    for (let i = 0; i < 3; i++) {
        slideshow[i].style.display = "none";
    }
    
    slideshow[current].style.display = "block";

    current += 1

    if (current > 2) {
        current = 0;
    }
}

console.log(slideshow[0]);
setInterval(update_slide, 3000);