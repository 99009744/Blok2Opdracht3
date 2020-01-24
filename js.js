var knop = document.getElementById('topuitklapmenu');
knop.setAttribute('onclick','showMenu()');

function showMenu(){
    var menu = document.getElementById('menu');
    if(menu.style.height == "0px" || menu.style.height == ""){
        menu.style.height = "auto";
    }
    else{
        menu.style.height = "0px";
    }
}
var knop2 = document.getElementById("menubaruitklapmenu");
knop2.setAttribute('onclick','showMenu2()');

function showMenu2(){
    var menu = document.getElementById('menu2');
    if(menu.style.height == "0px" || menu.style.height == ""){
        menu.style.height = "auto";
    }
    else{
        menu.style.height = "0px";
        menu.style.width = "100%";
        
    }
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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