/********************************************* Image Tiles ****************************************/
/*************************************** Variable declarations*************************************/
// Get the modal
var modal = document.getElementById('myModal');
// Get the image element
var modalImg = $("#img01");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var captionText = document.getElementById("caption");
var descriptionText = document.getElementById("descrip");

/********************************************* Modal image ****************************************/
// Assign each image and data to the modal function for pop up effect
$(document).ready(function(){
  $('.myImg').on("click", function(){
    modal.style.display = "block";
	var newSrc = this.src;
    modalImg.attr('src', newSrc);
	var info = this.alt;
	info = info.split('|');
	captionText.innerHTML = info[0];
	descriptionText.innerHTML = '<i class="fas fa-quote-left"></i> '+info[1]+' <i class="fas fa-quote-right"></i>';
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    modal.style.display = "none";
  }
});
/**************************************************************************************************/