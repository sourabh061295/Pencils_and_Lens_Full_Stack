// Variable decalarations
var numSquares = 6;
var colors = [];
var pickedColor;
// Get html elements
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Prepare the game
init();

// Init function definition
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

// Functions assocaited with buttons
function setupModeButtons(){
	// Loop through all buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			// If any button pressed, remove the selected class from both buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			// Add selected class to only the button which is pressed
			this.classList.add("selected");
			// Check for the mode selected
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// Reset the game with the new modes
			reset();
		});
	}
}

// Setup the functions for the color squares
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	// Add click listeners to squares
		squares[i].addEventListener("click", function(){
			// Grab color of clicked square
			var clickedColor = this.style.background;
			// Compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				// Change color of all squares
				changeColors(clickedColor);
				// Change color of the background
				h1.style.background = clickedColor;
			} else {
				// Dont change color of the background
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

// Reset funtion definition
function reset(){
	// Get an array of random colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// Change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			// Block squares for easy mode
			squares[i].style.display = "none";
		}
	}
	// Update the nackground color
	h1.style.background = "steelblue";
}

// Link the reset button to a function
resetButton.addEventListener("click", function(){
	reset();
})

// Change the color of all squares to a single color
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

// Random color picker
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Random color generator
function generateRandomColors(num){
	// Make an array
	var arr = []
	// Repeat num times
	for(var i = 0; i < num; i++){
		// Get random color and push into arr
		arr.push(randomColor())
	}
	// Return that array
	return arr;
}

// Math to generate a single random color
function randomColor(){
	// Pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	// Return the random rgb color
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

