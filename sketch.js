let ship
  , lasers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship();
}
 
function draw() {
	background(0);

	for (var i = lasers.length-1; i >= 0; i--) {
		lasers[i].render()
		lasers[i].update()
	}	

	// ship
	ship.render();
	ship.pushMouve();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		lasers.push(new Laser(ship.pos))
	} else if (keyCode == RIGHT_ARROW) {
		ship.setMouve(3);
	} else if (keyCode == LEFT_ARROW) {
		ship.setMouve(-3);
	} else if (keyCode == DOWN_ARROW) {
		ship.setDamage();
	}
}

function keyReleased() {
	ship.setMouve(0);
	ship.setStable();
}