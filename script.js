// Get the modal
var modal = document.getElementById("helpModal");

// Get the button that opens the modal
var btn = document.getElementById("helpBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closeButton = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn2 = document.getElementById("btn2");

var span2 = document.getElementsByClassName("close2")[0];
var closeButton2 = document.getElementsByClassName("close2")[1];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

closeButton2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


// Get the modal
var modal3 = document.getElementById("onbModal");

// Get the button that opens the modal
var btn3 = document.getElementById("onbBtn");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];
var closeButton3 = document.getElementsByClassName("close3")[1];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

closeButton3.onclick = function() {
  modal3.style.display = "none";
  document.getElementById('exploreAlert').innerHTML="Explore, your way!"; 
  // modal2.style.display = "block";
  setTimeout(function()
  { document.getElementById('exploreAlert').innerHTML= ""; 
  // modal2.style.display = "block";
  },3000);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}



var slideIndex = 0;
plusSlides(1);

function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  showSlides(slideIndex += n);
  if(slideIndex==3){
    document.getElementById("next").style.display="none";
  }
  if(slideIndex==1){
    document.getElementById("prev").style.display="none";
  }
  if (slideIndex==2) {
    document.getElementById("next").style.display="block";
    document.getElementById("prev").style.display="block";
  }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {slideIndex = 1}    
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}