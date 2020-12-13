// Image link list for slideshow
var img_list = [ "https://i.pinimg.com/originals/71/a2/63/71a2634da050395eec159535443fbeaa.jpg",
				 "https://i.pinimg.com/originals/92/be/14/92be142e962bba7bc1f047db230d187a.jpg",
				 "https://i.pinimg.com/originals/85/33/54/8533546f7f1126e68c30e61ccefb20ae.jpg",
				 "https://i.pinimg.com/originals/32/c5/b6/32c5b6c7727303dbd70486c277a5e5b1.jpg",
				 "https://i.pinimg.com/originals/22/f8/8a/22f88a7de94401c6b0abb47c15df0ee4.jpg",
				 "https://i.pinimg.com/originals/20/a2/e1/20a2e1ac7424476588ebafc81f29cac2.jpg",
				 "https://i.pinimg.com/originals/34/03/0a/34030a763f0d3ab41713ea814a07bfd5.jpg",
				 "https://i.pinimg.com/originals/fe/66/2b/fe662b13598eb78c9ea08eaad7bd2e71.jpg",
				 "https://i.pinimg.com/originals/b1/47/3f/b1473fc331bbdaa79e13bd431fd45283.jpg",
				 "https://i.pinimg.com/originals/42/05/03/4205035ecf48107429d698521f44c242.jpg",
				 "https://i.pinimg.com/originals/c0/f8/7f/c0f87fbfb796450aa1e0ecc61a366c25.jpg",
				 "https://i.pinimg.com/originals/0c/3b/4e/0c3b4e2ae64737ef4ba7c896437bb321.jpg",
				 "https://i.pinimg.com/originals/5f/d5/c1/5fd5c1cb568d491728dafa679bf0e30b.jpg",
				 "https://i.pinimg.com/originals/c1/8d/74/c18d749ce0921f81133337ac5daae9cf.jpg",
				 "https://i.pinimg.com/originals/a6/26/9d/a6269d5296fd3b956c6aed91dc6c4e79.jpg",
				 "https://i.pinimg.com/originals/b0/bf/f6/b0bff631af68adc6ff23e2d55027f437.jpg",
				 "https://i.pinimg.com/originals/36/f5/13/36f51300197064eb5423f1f7c4d8ce36.jpg",
				 "https://i.pinimg.com/originals/ec/45/97/ec4597a360765c0c0a16b2e5be3eb84a.jpg"
];
// Index
var idx = 0;

// Extract only link from array of objects retrieved from the database
// link_arr.forEach(function(link){
// 	img_list.push(link.link);
// });

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