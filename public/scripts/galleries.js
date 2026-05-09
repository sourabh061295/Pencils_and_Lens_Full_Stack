/********************************************* Image Tiles ****************************************/
/*************************************** Variable declarations*************************************/
// Get the modal
var modal = document.getElementById('myModal');
// Get the image element
var modalImg = $("#img01");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var captionText = document.getElementById("caption");
// var descriptionText = document.getElementById("descrip");

/******* Apply random rotation to each .myImg element *******/
function applyRandomRotations() {
  document.querySelectorAll('.myImg').forEach(function(img) {
    // Randomly assign either +5 or -5 degrees
    var randomRotation = Math.random() > 0.5 ? 5 : -5;
    img.style.transform = 'rotate(' + randomRotation + 'deg)';
    
    // Store the random rotation value on the element
    img.dataset.randomRotation = randomRotation;
    
    // Add hover event listeners
    img.addEventListener('mouseover', function() {
      this.style.transform = 'rotate(0deg)';
    });
    
    img.addEventListener('mouseout', function() {
      this.style.transform = 'rotate(' + this.dataset.randomRotation + 'deg)';
    });
  });
}

/********************************************* Modal image ****************************************/
// Assign each image and data to the modal function for pop up effect
$(document).ready(function(){
  applyRandomRotations();
  $('.myImg').on("click", function(){
    modal.style.display = "block";
    document.body.classList.add('modal-open-custom');
	var newSrc = this.src;
    modalImg.attr('src', newSrc);
	var info = this.alt;
	info = info.split('|');
	captionText.innerHTML = info[0];
	// descriptionText.innerHTML = '<i class="fas fa-quote-left"></i> '+info[1]+' <i class="fas fa-quote-right"></i>';
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('modal-open-custom');
}

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    modal.style.display = "none";
    document.body.classList.remove('modal-open-custom');
  }
});

// Close modal when clicking outside the modal content
if (modal) {
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open-custom');
    }
  });
}
/**************************************************************************************************/