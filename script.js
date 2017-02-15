

// LOGO SCRIPT //

var randomNumber;
//window.onload = setTimeout(colorMyBox, 1500);
function colorMyBox() {
  randomNumber = Math.floor(Math.random() * 9);
  for ( i = 0; i < 9; i++) {
    document.getElementById(i).style.fill = "#999999";
  }
  document.getElementById(randomNumber).style.fill = "#69aebb";
}

window.setInterval(colorMyBox, 2000);
