class circle {
	constructor(radius,color) {
		if(this.length==1) {
			this.radius=radius;
		}
		else if(this.length==2) {
			this.radius=radius;
			this.color=color;
		}
	}
	getRadius() {
		return this.radius;
	}
	getColor() {
		return this.color;
	}
	setRadius(radius) {
		this.radius=radius;
	}
	setColor(color) {
		this.color=color;
	}
	getArea() {
		let result=3.1415*this.radius*this.radius;
		console.log(result);
	}
}
 
var circle_1=new circle(5,'red');
circle_1.setRadius(5);
circle_1.getArea(); 