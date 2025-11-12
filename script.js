class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side); // use Rectangle's constructor
	}

	getPerimeter(){
		return 4 * this.width; // use inherited property
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
