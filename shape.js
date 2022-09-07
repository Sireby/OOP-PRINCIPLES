// QUESTION 2

// OBJECT SHAPE 
const  Shape = {
    type: "triangle",
    getType: function(){
    console.log(`This is a ${this.type}`)
}
}


// FUNCTION CONSTRUCTOR 
function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
   
    }


 Triangle.prototype.Shape = function(){
    return{
        type: "triangle",
        getType(){
            console.log(`This shape is a ${this.type}`)
        }
    }
 }
 


 Triangle.prototype.getPerimeter = function(){
    console.log(this.a + this.b + this.c);
 }



  // INSTANCES OF THE GET PERIMETER FUNCTION 
 let triangle1 = new Triangle (4,8,3);
 console.log(triangle1);
 triangle1.getPerimeter();

 let triangle2 = new Triangle (8,8,4);
 console.log(triangle2);
 triangle2.getPerimeter();

 let triangle3 = new Triangle (5,8,3);
 console.log(triangle3);
 triangle3.getPerimeter();



 //INSTANCE OF GET TYPE FUNCTION 
let shape1 = Shape.getType();
console.log(shape1)
