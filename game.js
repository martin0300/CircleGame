/*var gameLoop = {
    start: function() {
        console.log("tets")
    }
}*/

class Circle {
	constructor() {
		this.circlePosX = generateRandomNum(20, gameStuff.gameCanvas.width - 40);
		this.circlePosY = generateRandomNum(20, gameStuff.gameCanvas.height - 120);
		/*console.log(this.circlePosX)
        console.log(this.circlePosY)*/
	}

	drawCircle() {
		gameStuff.game2d.fillStyle = "blue";
		gameStuff.game2d.beginPath();
		gameStuff.game2d.arc(this.circlePosX + 40, this.circlePosY + 40, 50, 0, 2 * Math.PI);
		gameStuff.game2d.stroke();
		gameStuff.game2d.fill();
		return;
	}

	clickHandler() {
		if (gameStuff.mousePosX >= this.circlePosX && gameStuff.mousePosX <= this.circlePosX + 80 && gameStuff.mousePosY >= this.circlePosY && gameStuff.mousePosY <= this.circlePosY + 80) {
			gameStuff.circle = new Circle();
			gameStuff.badCircle = new BadCircle();
			if (gameStuff.score >= gameStuff.veriGudm8Circlepopuoscore && gameStuff.veriGudm8Circle.canSee == true) {
				gameStuff.veriGudm8Circle = new VeriGudm8Circle();
				calculateveriGudm8Circlescore();
			}
			gameStuff.score += 1;
			gameStuff.timer.timer = gameStuff.timer.maxTimer;
		}
	}
}

class BadCircle {
	constructor() {
		this.badCirclePosX = generateRandomNum(20, gameStuff.gameCanvas.width - 40);
		this.badCirclePosY = generateRandomNum(20, gameStuff.gameCanvas.height - 120);
		/*console.log(this.badCirclePosX)
        console.log(this.badCirclePosY)*/
	}

	drawCircle() {
		gameStuff.game2d.fillStyle = "red";
		gameStuff.game2d.beginPath();
		gameStuff.game2d.arc(this.badCirclePosX + 40, this.badCirclePosY + 40, 50, 0, 2 * Math.PI);
		gameStuff.game2d.stroke();
		gameStuff.game2d.fill();
		return;
	}

	clickHandler() {
		if (gameStuff.mousePosX >= this.badCirclePosX && gameStuff.mousePosX <= this.badCirclePosX + 80 && gameStuff.mousePosY >= this.badCirclePosY && gameStuff.mousePosY <= this.badCirclePosY + 80) {
			gameStuff.deathReason = "Clicked a red circle! (lol noob)";
			gameStuff.timer.timer = 0;
		}
	}
}

class VeriGudm8Circle {
	constructor() {
		this.veriGudm8CirclePosX = generateRandomNum(20, gameStuff.gameCanvas.width - 40);
		this.veriGudm8CirclePosY = generateRandomNum(20, gameStuff.gameCanvas.height - 120);
		this.canSee = false;
		/*console.log(this.veriGudm8CirclePosX)
        console.log(this.veriGudm8CirclePosY)*/
	}

	drawCircle() {
		if (this.canSee) {
			gameStuff.game2d.fillStyle = "yellow";
			gameStuff.game2d.beginPath();
			gameStuff.game2d.arc(this.veriGudm8CirclePosX + 40, this.veriGudm8CirclePosY + 40, 50, 0, 2 * Math.PI);
			gameStuff.game2d.stroke();
			gameStuff.game2d.fill();
		}
		return;
	}

	clickHandler() {
		if (this.canSee) {
			if (gameStuff.mousePosX >= this.veriGudm8CirclePosX && gameStuff.mousePosX <= this.veriGudm8CirclePosX + 80 && gameStuff.mousePosY >= this.veriGudm8CirclePosY && gameStuff.mousePosY <= this.veriGudm8CirclePosY + 80) {
				gameStuff.circle = new Circle();
				gameStuff.badCircle = new BadCircle();
				gameStuff.veriGudm8Circle = new VeriGudm8Circle();
				gameStuff.score += generateRandomNum(1, 15);
				calculateveriGudm8Circlescore();
				gameStuff.timer.timer = gameStuff.timer.maxTimer;
			}
		}
	}
}

class Timer {
	constructor() {
		this.maxTimer = 60;
		this.timer = this.maxTimer;
		this.activated = true;
	}

	drawTimer() {
		if (this.activated) {
			gameStuff.game2d.fillStyle = "green";
			gameStuff.game2d.fillRect(10, gameStuff.gameCanvas.height - 50, (this.timer * gameStuff.gameCanvas.width) / this.maxTimer - 20, 40);
		}
		return;
	}

	tick(num) {
		if (this.timer <= 0) {
			onDeath();
			if (gameStuff.deathReason == "") {
				gameStuff.deathReason = "U ran out of time! (lol slow af)";
			}
			this.activated = false;
			gameStuff.isDed = true;
		} else {
			this.activated = true;
			this.timer -= num;
		}
	}
}

function onDeath() {
	if (gameStuff.score > gameStuff.highScore) {
		getSetHighScore("set");
		gameStuff.highScore = getSetHighScore("get");
	}
	return;
}

function calculateveriGudm8Circlescore() {
	gameStuff.veriGudm8Circlepopuoscore = generateRandomNum(gameStuff.score, gameStuff.score + 50);
	if (gameStuff.veriGudm8Circlepopuoscore <= gameStuff.score) {
		calculateveriGudm8Circlescore();
	}
	return;
}

function generateRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getMousePos(e) {
	gameStuff.mousePosX = e.clientX;
	gameStuff.mousePosY = e.clientY;
	/*console.log(mousePosX)
    console.log(mousePosY)*/
}

function draw() {
	gameStuff.game2d.fillStyle = gameStuff.bgColor;
	gameStuff.game2d.fillRect(0, 0, gameStuff.gameCanvas.width, gameStuff.gameCanvas.height);

	//game2d.fillStyle = "black"
	//game2d.fillRect(circle.circlePosX, circle.circlePosY, 80, 80)

	gameStuff.game2d.fillStyle = gameStuff.textColor;
	gameStuff.game2d.font = "30px Arial";
	//gameStuff.game2d.fillText("MousePosX: " + gameStuff.mousePosX, 10, 30);
	//gameStuff.game2d.fillText("MousePosY: " + gameStuff.mousePosY, 10, 50);
	gameStuff.game2d.fillText("Score: " + gameStuff.score, 10, 30);
	gameStuff.game2d.fillText("Highscore: " + gameStuff.highScore, 10, 60);

	if (!gameStuff.isDed) {
		gameStuff.timer.drawTimer();

		gameStuff.circle.drawCircle();
		gameStuff.badCircle.drawCircle();
		gameStuff.veriGudm8Circle.drawCircle();

		if (gameStuff.score == 0) {
			gameStuff.game2d.fillStyle = gameStuff.textColor;
			gameStuff.game2d.font = "20px Arial";
			gameStuff.game2d.fillText('(Press "r" to restart, Press "f" to go in fullscreen, Press "m" to turn off/on dark mode, Press "p" to pause the game)', gameStuff.gameCanvas.width / 2 - 460, 40);
		}

		if (gameStuff.isPaused) {
			gameStuff.game2d.fillStyle = gameStuff.textColor;
			gameStuff.game2d.font = "30px Arial";
			gameStuff.game2d.fillText("Paused", gameStuff.gameCanvas.width / 2 - 10, gameStuff.gameCanvas.height / 2);
			gameStuff.game2d.font = "20px Arial";
			gameStuff.game2d.fillText('(Press "r" to restart, Press "f" to go in fullscreen, Press "m" to turn off/on dark mode, Press "p" to pause the game)', gameStuff.gameCanvas.width / 2 - 460, 40);
		}
	} else {
		gameStuff.game2d.fillStyle = gameStuff.textColor;
		gameStuff.game2d.font = "30px Arial";
		gameStuff.game2d.fillText("ur ded", gameStuff.gameCanvas.width / 2 - 10, gameStuff.gameCanvas.height / 2);
		gameStuff.game2d.fillText('(Press "r" to restart!)', gameStuff.gameCanvas.width / 2 - 100, gameStuff.gameCanvas.height / 2 + 40);
		gameStuff.game2d.fillText("U ded of: " + gameStuff.deathReason, gameStuff.gameCanvas.width / 2 - 210, gameStuff.gameCanvas.height / 2 + 80);
	}

	return;
}

function checkOverlap() {
	return;
}

function gameLoop() {
	if (gameStuff.score == gameStuff.veriGudm8Circlepopuoscore) {
		gameStuff.veriGudm8Circle.canSee = true;
	}
	/*if (gameStuff.bgColor == "white" && getSetDarkMode("get")) {
		getSetDarkMode("set");
	} else if (gameStuff.bgColor == "black" && !getSetDarkMode("get")) {
		getDarkMode("set");
	}*/
	checkOverlap();
	draw();
	if (!gameStuff.isPaused) {
		gameStuff.timer.tick(gameStuff.score / 600);
	}
}

function restart() {
	gameStuff.isDed = false;
	gameStuff.isPaused = false;
	gameStuff.timer.timer = gameStuff.timer.maxTimer;
	gameStuff.score = 0;
	gameStuff.circle = new Circle();
	gameStuff.badCircle = new BadCircle();
	gameStuff.veriGudm8Circle = new VeriGudm8Circle();
	calculateveriGudm8Circlescore();
	gameStuff.deathReason = "";
	gameStuff.timer.activated = true;
	return;
}

function activateFullscreen() {
	gameHtml = document.documentElement;

	if (gameHtml.requestFullscreen) {
		gameHtml.requestFullscreen();
	} else if (gameHtml.webkitRequestFullscreen) {
		gameHtml.webkitRequestFullscreen();
	} else if (gameHtml.msRequestFullscreen) {
		gameHtml.msRequestFullscreen();
	}

	return;
}

var gameStuff = {
	mousePosX: 0,
	mousePosY: 0,
	gameCanvas: undefined,
	game2d: undefined,
	circle: undefined,
	badCircle: undefined,
	veriGudm8Circle: undefined,
	score: 0,
	highScore: 0,
	isDed: false,
	timer: undefined,
	veriGudm8Circlepopuoscore: null,
	textColor: "black",
	bgColor: "white",
	isPaused: false,
	deathReason: "",
};

/*var mousePosX;
var mousePosY;

var gameCanvas;
var game2d;
var circle;
var badCircle;
var veriGudm8Circle;

var score = 0;

var isDed = false;
var timer;
var veriGudm8Circlepopuoscore;

var textColor = "black";
var bgColor = "white";*/

function getSetHighScore(task) {
	if (task == "set") {
		localStorage.setItem("highScore", gameStuff.score);
		return;
	} else if (task == "get") {
		getscore = localStorage.getItem("highScore");
		if (getscore == null) {
			localStorage.setItem("highScore", 0);
			return 0;
		} else {
			return getscore;
		}
	}
}

//because why not???
function convertToBool(input) {
	if (input == "true") {
		return true;
	} else if (input == "false") {
		return false;
	} else {
		return null;
	}
}

function getSetDarkMode(task, args) {
	if (task == "set") {
		localStorage.setItem("darkMode", args.toString());
		return;
	} else if (task == "get") {
		getDarkMode = localStorage.getItem("darkMode");
		if (getDarkMode == null) {
			localStorage.setItem("darkMode", false.toString());
			return convertToBool(getDarkMode);
		} else {
			return convertToBool(getDarkMode);
		}
	}
}

window.addEventListener("load", function () {
	gameStuff.gameCanvas = this.document.getElementById("gamecanvas");
	gameStuff.game2d = gameStuff.gameCanvas.getContext("2d");
	gameStuff.gameCanvas.height = this.window.innerHeight;
	gameStuff.gameCanvas.width = this.window.innerWidth;
	gameStuff.circle = new Circle();
	gameStuff.badCircle = new BadCircle();
	gameStuff.timer = new Timer();
	gameStuff.veriGudm8Circle = new VeriGudm8Circle();
	calculateveriGudm8Circlescore();
	gameStuff.highScore = getSetHighScore("get");
	if (getSetDarkMode("get")) {
		gameStuff.bgColor = "black";
		gameStuff.textColor = "white";
	} else {
		gameStuff.bgColor = "white";
		gameStuff.textColor = "black";
	}
	this.setInterval(gameLoop, 0.06);
	window.addEventListener("resize", function () {
		gameStuff.gameCanvas.height = this.window.innerHeight;
		gameStuff.gameCanvas.width = this.window.innerWidth;
	});
	this.document.addEventListener("mousemove", getMousePos);
	this.gameStuff.gameCanvas.addEventListener("click", function () {
		if (!gameStuff.isPaused) {
			gameStuff.circle.clickHandler();
			gameStuff.badCircle.clickHandler();
			gameStuff.veriGudm8Circle.clickHandler();
		}
	});
	this.document.addEventListener("keypress", function (e) {
		if (e.key == "m") {
			if (gameStuff.bgColor == "white") {
				gameStuff.bgColor = "black";
				gameStuff.textColor = "white";
				getSetDarkMode("set", true);
			} else {
				gameStuff.bgColor = "white";
				gameStuff.textColor = "black";
				getSetDarkMode("set", false);
			}
		}
		if (e.key == "p") {
			if (!gameStuff.isPaused) {
				gameStuff.isPaused = true;
			} else {
				gameStuff.isPaused = false;
			}
		}
		if (e.key == "r") {
			restart();
		}
		if (e.key == "f") {
			activateFullscreen();
		}
	});
});
