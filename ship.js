function Ship() {
	this.pos = createVector(width/2, height - 40);
	this.r = 20;
	this.line = 0;
	this.posLine = this.pos.x;
	this.color = 0;

	this.render = () => {
		push();
		translate(this.posLine, this.pos.y);
		fill( this.color );
		stroke(155);
		triangle(-this.r, this.r, this.r, this.r, 0, -this.r / 3);
		pop();
	}

	this.setMouve = (l) => {
		this.line = l;
	}

	this.pushMouve = () => {
		this.posLine += this.line;
	}

	this.setDamage = () => {
		this.color = 255,0,0;
	}

	this.setStable = () => {
		this.color = 0;
	}
}