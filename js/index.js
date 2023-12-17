

function readMoreReadLessFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("read_more_button");
    const arrowDownIcon = document.createElement("i");
    const arrowUpIcon = document.createElement("i");
    arrowDownIcon.classList.add("fa-solid", "fa-chevron-down");
    arrowUpIcon.classList.add("fa-solid", "fa-chevron-up");

  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      btnText.appendChild(arrowDownIcon);
     
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      btnText.appendChild(arrowUpIcon);

    }
  } 


  const readMoreButton = document.querySelector("#read_more_button");

readMoreButton.addEventListener("click", () => {
    readMoreReadLessFunction();
});



//Card slider

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


let slideIndex = 1;
let startX, startY; 

//Touchstart event
function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}

// Touchmove event
function handleTouchMove(e) {
  if (!startX || !startY) return;

  let deltaX = e.touches[0].clientX - startX;
  let deltaY = e.touches[0].clientY - startY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal swipe
    if (deltaX > 0) {
      plusSlides(-1); 
    } else {
      plusSlides(1); 
    }
  }

  startX = null;
  startY = null;
}

// Event listeners for touch events
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

showSlides(slideIndex);


// Thumbnail image
function currentSlide(n) {
  showSlides((slideIndex = n));
}


// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Next and previous buttons
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  plusSlides(-1);
});

nextButton.addEventListener("click", () => {
  plusSlides(1);
});

// Dot indicators
const dots = document.getElementsByClassName("dot");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    currentSlide(i + 1);
  });
}
