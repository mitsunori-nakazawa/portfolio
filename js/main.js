// メニューバー
$('#toggle').click(function() {
  $(this).toggleClass("active");
  $('#overlay').toggleClass("open");
  if ($("html div").not("#overlay").hasClass("blur")){
     $("html div").not("#overlay").not(".button_container").removeClass("blur")
  }else{
     $("html div").not("#overlay").not(".button_container").addClass("blur")
  }
});


// 特定の位置までスクロール
$('.menu-about').click(function() {
  $("html,body").animate({scrollTop:$(".main-title").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu-skills').click(function() {
  $("html,body").animate({scrollTop:$(".skill-section").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});
$('.menu-service').click(function() {
  $("html,body").animate({scrollTop:$(".service-section").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu-works').click(function() {
  $("html,body").animate({scrollTop:$(".portfolio_section").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

$('.menu-contact').click(function() {
  $("html,body").animate({scrollTop:$(".contact").offset().top});
  $('#overlay').removeClass("open");
  $('html div').removeClass("blur");
  $("#toggle").toggleClass("active");
});

// Animate.cssのfadeInUpエフェクトを適用
$(".fadein").waypoint(function(direction) {
  if (direction === "down") {
    $(this.element).addClass("fadeInUp");
    this.destroy();
  }
}, { offset: "100%" });