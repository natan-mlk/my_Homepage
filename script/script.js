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
  section : ".scrollify-section",
  sectionName : "section-name",
  interstitialSection : "",
  easing: "easeOutExpo",
  scrollSpeed: 1500,
  offset : 0,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: true,
  overflowScroll: true,
  updateHash: true,
  touchScroll:false,
  before:function() {},
  after:function() {},
  afterResize:function() {},
  afterRender:function() {}
});

// SIDE PANEL





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












// SCROLLSPY

// Cache selectors
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight()+15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#"+id+"']").parent().addClass("active");
  }
});




//
// $('#section1').on('scrollSpy:enter', function() {
//   $('.li1').addClass(".li-color");
// });
//
// $('#section1').on('scrollSpy:exit', function() {
//   $('.li1').addClass("li-color2");
// });
//
// $('#section1').scrollSpy();


// or you could do this:
// $.scrollSpy($('.tile'));
// or this
// $('.tile').each(function(i, element) {
//      $.scrollSpy(element);
// });