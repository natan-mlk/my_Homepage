
document.body.className = ' ';

// LOGO ANIMATION //

var randomNumber;
function colorMyBox() {
  randomNumber = Math.floor(Math.random() * 9);
  for ( i = 0; i < 9; i++) {
    document.getElementById(i).style.fill = "#999999";
  }
  document.getElementById(randomNumber).style.fill = "#56a3b1";
}
window.setInterval(colorMyBox, 1600);

// HOVER EFFECT FOR PORTFOLIO LINKS //
//circle 4
var isProject = document.getElementsByClassName("is_project")[0];
isProject.addEventListener("mouseover", isProjectHov);
isProject.addEventListener("mouseout", isProjectOut);

function isProjectHov() {
  var circle4 = document.getElementById("circle4");
  circle4.classList.add('circle-hover');
}

function isProjectOut() {
  var circle4 = document.getElementById("circle4");
  circle4.className = 'circle circle4';
}
// circle 5
var album = document.getElementsByClassName("album")[0];
album.addEventListener("mouseover", albumHov);
album.addEventListener("mouseout", albumOut);

function albumHov() {
  var circle4 = document.getElementById("circle5");
  circle4.classList.add('circle-hover');
}

function albumOut() {
  var circle4 = document.getElementById("circle5");
  circle4.className = 'circle circle5';
}

//FULLSCREEN SCROLL//

$(document).ready(function () {
  $('#demo').betterScroll();
});