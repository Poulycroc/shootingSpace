function Laser (shipPosition) {
	this.x = shipPosition.x
	this.y = shipPosition.y
	this.pos = createVector(this.x, this.y)
	this.vel = 5
	this.w = 4;
	this.h = 4;

	this.vel.mult(10)

	this.inBounds = () => {
		return 
	}

	this.render = () => {
		push()
		stroke(255)
		strokeWeight(4)
		rect(this.x, this.y, this.w, this.h)
		pop()
	}

	this.update = () => {
		this.pos = createVector(shipPosition.x, 0)
	}
}