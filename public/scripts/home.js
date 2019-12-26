//Scroll effect for navbar
$(window).scroll(function() {
    if ($(document).scrollTop() > 50 && (currPage != "color")) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
});

//Changing background of jumbotron
switch (currPage) {
  case "art": document.querySelector(".jumbotron").style.backgroundImage = "url(/images/frames.jpg)";
                          break;
  case "image":  document.querySelector(".jumbotron").style.backgroundImage = "url(/images/photo_wall.jpg)";
                          break;
  case "order": document.querySelector(".jumbotron").style.backgroundImage = "url(/images/sketch_order.jpg)";
                          break;
  case "color": document.querySelector(".jumbotron").style.backgroundImage = "url(/images/bonus_banner.jpg)";
                            document.querySelector(".navbar").classList.add("rainbow_background");
                            break;
}