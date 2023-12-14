function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read_more_button");
    var arrowDownIcon = document.createElement("i");
    var arrowUpIcon = document.createElement("i");
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
    myFunction();
});

