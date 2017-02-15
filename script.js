
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
