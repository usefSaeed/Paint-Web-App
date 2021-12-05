import { Component } from '@angular/core';

function getRandomInt(min:number, max:number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


//shape interface to cover all shapes under restricted contract
interface shape{
  x:number;
  y:number;
  color:String;
  draw(canvasGlobal:CanvasRenderingContext2D):void;
  getDim(n : number) : number;

}

//factory class to produce all kinds of shapes according to the given string
class factory{
  create(shape_name:String):shape{
    var shape:shape
    switch(shape_name.toLowerCase()){
      case "circle":
        shape = new circle();
        break;
      case "rect":
        shape = new rect();
        break;
      case "square":
        shape = new square();
        break;
      default:
        throw new Error;
    }
    return shape;
  }
}

//---------------------------------------------------------------------------//

class circle implements shape{
	x = getRandomInt(108,1300);
	y = getRandomInt(4,614);
	radius = 40;
	color = "black";
  
	getDim(n : number){
		var res : number = 0;
		if(n == 1){
			res = this.radius;
		}
		return res;
	}
	draw(canvasGlobal:CanvasRenderingContext2D) {

    canvasGlobal.beginPath();
    canvasGlobal.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    canvasGlobal.stroke();

	}
}

//---------------------------------------------------------------------------//

class rect implements shape{
  x = getRandomInt(108,1260);
  y = getRandomInt(4,614);
  width = 120;
  height = 60;
  color = "black";
  getDim(n : number){
	var res : number = 0;
	if(n == 1){
		res = this.width;
	}
	else if(n == 2){
		res = this.height;
	}
	return res;
}
  draw(canvasGlobal:CanvasRenderingContext2D) {

    canvasGlobal.beginPath();
    canvasGlobal.rect(this.x,this.y,this.width,this.height);
    canvasGlobal.stroke();
  }
}

//---------------------------------------------------------------------------//

class square implements shape{
	x = getRandomInt(108,1386);
	y = getRandomInt(4,614);
	width = 60;
  color = "black"
	getDim(n : number){
		var res : number = 0;
		if(n == 1){
			res = this.width;
		}
		return res;
	}
	draw(canvasGlobal:CanvasRenderingContext2D) {

    canvasGlobal.beginPath();
    canvasGlobal.rect(this.x,this.y,this.width, this.width);
    canvasGlobal.stroke();
	}
}

//---------------------------------------------------------------------------//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  factory :factory = new factory();
  shapes:shape[] = []

  title = 'Front-End';
  create_circle() {
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var circle: shape = this.factory.create("circle");
    circle.draw(canvasGlobal);
    this.shapes.push(circle);
  }
  create_rect(){
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var rect: shape = this.factory.create("rect");
    rect.draw(canvasGlobal);
    this.shapes.push(rect);

  }
  create_square(){
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var square: shape = this.factory.create("square");
    square.draw(canvasGlobal);
    this.shapes.push(square);

  }
  remove(){
    
    
    
  }
  resize(){

  }
}
