// Background canvas loader
var canvas = void 0,
    ctx = void 0;

var shearAngle = -Math.PI * 0.125;
var count = 10;
var w = 50;
var h = 50;
var gap = 12;
var totalWidth = count * w + (count - 1) * gap;
var halfWidth = totalWidth * 0.5;
var halfHeight = h * 0.5;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	ctx = canvas.drawingContext;
}

function draw() {
	background(0);
	stroke(255);
	noFill();
	translate(width * 0.5 - halfWidth, height * 0.5);
	shearX(shearAngle);

	var time = Date.now() * 0.005;
	for (var i = 0; i < count; i++) {
		var t = i / count;
		var s = sin((time - t * QUARTER_PI * 3) % TAU);
		var weight = map(s, -1, 1, 2, 8);
		var x = t * totalWidth;
		var y = s * 8 - halfHeight;
		strokeWeight(weight);
		rect(x, y, w, h);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

//Automated hacking text
function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis.css({
        "position": "relative",
        "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function () {
        thhis.css("opacity", 1);
        thhis.prev().removeAttr("style");
        thhis.text("");
        for (var i = 0; i < amntOfChars; i++) {
            (function (i, char) {
                setTimeout(function () {
                    newString += char;
                    thhis.text(newString);
                }, i * typingSpeed);
            })(i + 1, text[i]);
        }
    }, 1500);
}

$(document).ready(function () { 
    autoType(".type-js", 50);
});