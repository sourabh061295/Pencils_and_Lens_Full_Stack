// Image link list for slideshow
var img_list = ["https://i1-e.pinimg.com/1200x/33/cb/fa/33cbfa6595055ea02a37c306fdfbfc60.jpg",
				"https://i1-e.pinimg.com/736x/21/ee/cb/21eecba9a5b95ee9cf2a3b9b5665b17e.jpg",
				"https://i1-e.pinimg.com/1200x/21/d1/7e/21d17e22e4358ca696d340bae8227715.jpg",
				"https://i1-e.pinimg.com/1200x/67/c7/28/67c7285e6f7eb6db9e443987357f087b.jpg",
				"https://i1-e.pinimg.com/1200x/0c/3b/4e/0c3b4e2ae64737ef4ba7c896437bb321.jpg",
				"https://i1-e.pinimg.com/736x/71/a2/63/71a2634da050395eec159535443fbeaa.jpg",
				"https://i1-e.pinimg.com/1200x/5f/d5/c1/5fd5c1cb568d491728dafa679bf0e30b.jpg",
				"https://i1-e.pinimg.com/1200x/e5/98/d6/e598d6062411d6b3db75018730e60781.jpg",
				"https://i1-e.pinimg.com/736x/85/33/54/8533546f7f1126e68c30e61ccefb20ae.jpg",
				"https://i1-e.pinimg.com/1200x/fe/66/2b/fe662b13598eb78c9ea08eaad7bd2e71.jpg",
				"https://i1-e.pinimg.com/736x/92/be/14/92be142e962bba7bc1f047db230d187a.jpg",
				"https://i1-e.pinimg.com/736x/22/f8/8a/22f88a7de94401c6b0abb47c15df0ee4.jpg",
				"https://i1-e.pinimg.com/736x/c0/f8/7f/c0f87fbfb796450aa1e0ecc61a366c25.jpg",
				"https://i1-e.pinimg.com/1200x/b1/47/3f/b1473fc331bbdaa79e13bd431fd45283.jpg",
				"https://i1-e.pinimg.com/1200x/fa/14/fd/fa14fd9d8919d52ba6aabc97803375a7.jpg",
				"https://i1-e.pinimg.com/1200x/7e/08/69/7e08698eb960dc9a37cd11e0fad35b51.jpg",
				"https://i1-e.pinimg.com/1200x/d4/84/08/d484086a1a2f8528028dc92285695b21.jpg",
				"https://i1-e.pinimg.com/1200x/96/7f/7b/967f7bdfac10916a670fe1871a1dfa3f.jpg",
				"https://i1-e.pinimg.com/736x/03/04/52/030452e89bb0be4189d9c9eef8ab138d.jpg",
				"https://i1-e.pinimg.com/1200x/ef/1d/d0/ef1dd0cec074ebc5b5b6ad253d90948d.jpg",
				"https://i1-e.pinimg.com/1200x/34/03/0a/34030a763f0d3ab41713ea814a07bfd5.jpg",
				"https://i1-e.pinimg.com/736x/20/a2/e1/20a2e1ac7424476588ebafc81f29cac2.jpg"
];
// Index
var idx = 0;

// File upload text update
$('input[type="file"]').change(function(e){
	var fileName = e.target.files[0].name;
	$('.custom-file-label').html(fileName);
});

// Function to initialize the first image on page load
function initializeFirstImage() {
    const img = new Image();
    img.onload = function() {
        $('#imageDisplay').css("background-image", "url("+img_list[idx]+")").addClass('loaded');
    };
    img.onerror = function() {
        // If image fails to load, still show the element
        $('#imageDisplay').css("background-image", "url("+img_list[idx]+")").addClass('loaded');
    };
    img.src = img_list[idx];
}

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

// Initialize first image when DOM is ready
$(document).ready(function() {
    initializeFirstImage();
    // Trigger Slideshow, interval - 3 seconds (after first image is loaded)
    setInterval(changeImg, 3000);
    
    // Initialize YouTube Gallery
    if ($('#videoPlaylist').length > 0) {
        initializeYouTubeGallery();
    }
});

/******** YouTube Video Gallery ********/

// Sample video IDs from your channel (replace with your video IDs)
var youtubeVideos = [
    { id: 'yMryXhZI2GY', title: 'A Tribute' },
    { id: 'rH-kMooW-IQ', title: 'DiVo' },
    { id: '7Wt-mZU0SxY', title: 'A MAD Artist' },
    { id: 'ieUMoQip47s', title: 'The process' },
    { id: '_WheJ1l0uhg', title: 'Ronin' },
    { id: 'bm23VkCBDiU', title: 'God of Thunder' },
    { id: 'u6X10Gr6wok', title: 'God of Cricket' },
    { id: 'aVdJhpTLl6Y', title: 'Joker' },
    { id: 'IumUcIOkuCs', title: 'Mumbai-Pune-Mumbai' },
	{ id: 'e_OUDeqPVHg', title: 'The Wedding Gift' },
	{ id: '_5uQDt6KTLc', title: 'Double Treat' },
	{ id: '8h_iKV7bDCw', title: 'AatmaNirbhar' }
];

function initializeYouTubeGallery() {
    // Shuffle and select random videos for the playlist
    var shuffled = youtubeVideos.sort(function() { return 0.5 - Math.random(); });
    var selectedVideos = shuffled;
    
    // Play first video in main player
    if (selectedVideos.length > 0) {
        playVideo(selectedVideos[0].id, 0);
    }
    
    // Create playlist
    var playlistContainer = $('#videoPlaylist');
    playlistContainer.empty();
    
    selectedVideos.forEach(function(video, index) {
        var playlistItem = $('<div class="playlist-item" data-video-id="' + video.id + '" data-index="' + index + '">' +
            '<img src="https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg" alt="' + video.title + '" class="playlist-item-thumbnail">' +
            '<div class="playlist-item-title">' + video.title + '</div>' +
            '</div>');
        
        playlistItem.on('click', function() {
            var videoId = $(this).data('video-id');
            var itemIndex = $(this).data('index');
            playVideo(videoId, itemIndex);
            // Update active state
            $('.playlist-item').removeClass('active');
            $(this).addClass('active');
        });
        
        if (index === 0) {
            playlistItem.addClass('active');
        }
        
        playlistContainer.append(playlistItem);
    });
}

function playVideo(videoId, index) {
    $('#mainVideoPlayer').attr('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=0&rel=0');
}