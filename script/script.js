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
  var circle4 = document.getElementsByClassName("circle4")[0];
  circle4.classList.add('circle-hover');
}

function isProjectOut() {
  var circle4 = document.getElementsByClassName("circle4")[0];
  circle4.classList.remove('circle-hover');
}
// circle 5
var album = document.getElementsByClassName("album")[0];
album.addEventListener("mouseover", albumHov);
album.addEventListener("mouseout", albumOut);

function albumHov() {
  var circle5 = document.getElementsByClassName("circle5")[0];
  circle5.classList.add('circle-hover');
}

function albumOut() {
  var circle5 = document.getElementsByClassName("circle5")[0];
  circle5.classList.remove('circle-hover');
}

//FULLSCREEN SCROLL//


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

// QUOTE2
$(window).on('scroll', function () {
  var p = $('.avatar');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight/2)) {
    $('.quote2').addClass("quote-animation");
  }
});

// CIRCLE 1
$(window).on('scroll', function () {
  var p = $('.avatar');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight/2)) {
    $('.circle1').addClass("circle1-animation");
  }
});

// CIRCLE 2
$(window).on('scroll', function () {
  var p = $('.avatar');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight/2)) {
    $('.circle2').addClass("circle2-animation");
  }
});

// CIRCLE 3
$(window).on('scroll', function () {
  var p = $('.avatar');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight/2)) {
    $('.circle3').addClass("circle3-animation");
  }
});

// CIRCLE 4
$(window).on('scroll', function () {
  var p = $('.is_project');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight/2)) {
    $('.circle4').addClass("circle4-animation");
  }
});
// CIRCLE 5
$(window).on('scroll', function () {

  var p = $('.is_project');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight / 2)) {
    $('.circle5').addClass("circle5-animation");
  }
});

