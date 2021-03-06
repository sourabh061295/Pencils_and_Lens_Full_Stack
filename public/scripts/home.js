// var popButton =  document.querySelector('.popupButton');
// if (popButton)
// {
// 	popButton.click();
// }

// Auto-trigger popup banner
// if (currPage == 'home') {
// 	// Logic for popup effect in home page
// 	$(document).ready(function() {
// 		var homePage = sessionStorage['homePage'];
// 		if (!homePage) {
// 			document.querySelector('.popupButton').click();
// 			sessionStorage['homePage'] = "visited";
// 		}
	
// 		// Bind esc key to close icon in popup
// 		$(document).keydown(function(event) { 
// 			if (event.keyCode == 27) { 
// 			document.querySelector('.popup .close').click();
// 			}
// 		});
// 	});	
// }

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
  case "image":  document.querySelector(".jumbotron").style.backgroundImage = "url(/images/photo_gallery_new.jpeg)";
                          break;
  case "portrait":  document.querySelector(".jumbotron").style.backgroundImage = "url(/images/portrait_new.jpg)";
                          break;
  case "order": document.querySelector(".jumbotron").style.backgroundImage = "url(/images/sketch_order.jpg)";
                          break;
  case "color": document.querySelector(".jumbotron").style.backgroundImage = "url(/images/bonus_banner.jpg)";
                            document.querySelector(".navbar").classList.add("rainbow_background");
                            break;
}