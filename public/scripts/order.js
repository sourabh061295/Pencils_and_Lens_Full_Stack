// Image link list for slideshow
var img_list = [];
// Index
var idx = 0;

// Extract only link from array of objects retrieved from the database
link_arr.forEach(function(link){
	img_list.push(link.link);
});

// File upload text update
$('input[type="file"]').change(function(e){
	var fileName = e.target.files[0].name;
	$('.custom-file-label').html(fileName);
});

// Function to change image every interval
function changeImg() {
    // Fade out old image
    $('#imageDisplay').fadeOut('slow', function() {
        // Change background image
        $(this).css("background-image", "url("+img_list[idx]+")");  
        // Fade in new image
        $(this).fadeIn('slow');
    });
    // Update index
    idx = ((idx+1) % img_list.length);
}

// Trigger Slideshow, interval - 3 seconds
setInterval(changeImg, 2500);