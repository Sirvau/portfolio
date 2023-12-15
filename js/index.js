

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



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Event listeners for next and previous buttons
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  plusSlides(-1);
});

nextButton.addEventListener("click", () => {
  plusSlides(1);
});

// Event listeners for dot indicators
const dots = document.getElementsByClassName("dot");

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    currentSlide(i + 1);
  });
}



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