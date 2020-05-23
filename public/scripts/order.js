// Image link list for slideshow
var img_list = [ "https://i.pinimg.com/originals/36/f5/13/36f51300197064eb5423f1f7c4d8ce36.jpg",
				 "https://i.pinimg.com/originals/ec/4e/80/ec4e8080b790e8f5ea6c9738e943de38.jpg",
				 "https://i.pinimg.com/originals/45/ea/15/45ea155dd68a6b1bb489c62c8543c054.jpg",
				 "https://i.pinimg.com/originals/68/f6/5c/68f65c8ffc760ee6ea3c5e3f23f14eea.jpg",
				 "https://i.pinimg.com/originals/ec/45/97/ec4597a360765c0c0a16b2e5be3eb84a.jpg",
				 "https://i.pinimg.com/originals/fe/66/2b/fe662b13598eb78c9ea08eaad7bd2e71.jpg",
				 "https://i.pinimg.com/originals/34/03/0a/34030a763f0d3ab41713ea814a07bfd5.jpg",
				 "https://i.pinimg.com/originals/b1/47/3f/b1473fc331bbdaa79e13bd431fd45283.jpg",
				 "https://i.pinimg.com/originals/c0/f8/7f/c0f87fbfb796450aa1e0ecc61a366c25.jpg",
				 "https://i.pinimg.com/originals/20/a2/e1/20a2e1ac7424476588ebafc81f29cac2.jpg",
				 "https://i.pinimg.com/originals/b5/53/98/b55398629f9718bbbb2182df3adb7a51.jpg",
				 "https://i.pinimg.com/originals/22/f8/8a/22f88a7de94401c6b0abb47c15df0ee4.jpg",
				 "https://i.pinimg.com/originals/32/c5/b6/32c5b6c7727303dbd70486c277a5e5b1.jpg",
				 "https://i.pinimg.com/originals/71/a2/63/71a2634da050395eec159535443fbeaa.jpg",
				 "https://i.pinimg.com/originals/f5/a4/b0/f5a4b0b935e5435098b4c1c8297ed7c4.jpg"
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