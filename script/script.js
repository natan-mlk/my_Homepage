document.body.className = ' ';

// LOGO ANIMATION //

var randomNumber;
function colorMyBox() {
  randomNumber = Math.floor(Math.random() * 9);
  for (i = 0; i < 9; i++) {
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
  circle4.classList.remove('circle-hover');
}
// circle 5
var album = document.getElementsByClassName("album")[0];
album.addEventListener("mouseover", albumHov);
album.addEventListener("mouseout", albumOut);

function albumHov() {
  var circle5 = document.getElementById("circle5");
  circle5.classList.add('circle-hover');
}

function albumOut() {
  var circle5 = document.getElementById("circle5");
  circle5.classList.remove('circle-hover');
}

//FULLSCREEN SCROLL//

// $(document).ready(function () {
//   $('#demo').betterScroll();
// });



// $(document).alton({
//   fullSlideContainer: 'full', // Tell Alton the full height container
//   singleSlideClass: 'slide', // Tell Alton the full height slide class
//   useSlideNumbers: true, // Set to false if you don't want to use pagination
//   slideNumbersBorderColor: '#fff', // Set the outside color of the pagination items
//   slideNumbersColor: 'transparent', // Set the inner color of the pagination items
//   bodyContainer: 'pageWrapper', // Tell Alton the body class
// });


$.scrollify({
  section : ".example-classname",
  sectionName : "section-name",
  interstitialSection : "",
  easing: "easeOutExpo",
  scrollSpeed: 1800,
  offset : 0,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: true,
  overflowScroll: true,
  updateHash: true,
  touchScroll:true,
  before:function() {},
  after:function() {},
  afterResize:function() {},
  afterRender:function() {}
});


// ANIMATION ON APPEAR

$(window).on('scroll', function () {

  var p = $('.circle4');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight / 2)) {
    $('#circle4').addClass("anim");
  }
});