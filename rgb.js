var numSquares = 6;
var colors = generateColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelectorAll("h1");
var newColor = document.querySelector("#newColor");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



// 依輸入的rgb改變圓圈顏色

$('button:first').click(function() {
    var r = $('#rinput').val()
    var g = $('#ginput').val()
    var b = $('#binput').val()

    var gencolor = ("rgb(" + r + ", " + g + ", " + b + ")");
    $('#generate').css("background", gencolor);

})


function exampleColor() {
    var r = $('#rinput').val()
    var g = $('#ginput').val()
    var b = $('#binput').val()
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}


///調整為簡單
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;

    messageDisplay.textContent = "";

    colors = generateColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

///調整為困難
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;


    messageDisplay.textContent = "";


    colors = generateColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


colorDisplay.textContent = pickedColor;






newColor.addEventListener("click", function() {
    // reset all colors 
    colors = generateColor(numSquares);
    // reset pick color
    pickedColor = pickColor();
    //change display color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";

    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#4682b4";
    newColor.textContent = "NEW COLORS"
})

for (var i = 0; i < squares.length; i++) {
    // add colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add event listners click
    squares[i].addEventListener("click", function() {
        var clickColor = this.style.backgroundColor;
        // compare to pickColor
        if (clickColor === pickedColor) {
            //alert("correct!");
            messageDisplay.textContent = "Correct!";
            changeColor(clickColor);
            h1.style.backgroundColor = pickedColor;

        } else {
            //alert("wrong!");
            this.style.backgroundColor = "#4682b4";
            messageDisplay.textContent = "Try Again!";
        }
    })
}


function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}



function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}

function generateColor(nums) {
    // generate random colors for game
    var arr = [];
    for (var i = 0; i < nums; i++) {
        arr.push(randomColor());
    }
    return arr;
}