'use strict'
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. class declarations
class Person{
    // constructor
    constructor(name,age){ //constructor: 클래스 생성자
        // fields
        this.name=name;
        this.age=age;
    }
//methods
speak(){
    console.log(`${this.name}:hello!`);
}
}

const ellie=new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); //힘수 호출 가능

// 2. Getter and Setters
class User{
    constructer(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //getter
    get age(){ //값 return
        return this._age;
    }
    //setter
    set age(value){ //값 할당. 때문에 value값을 받아올 필요가 있음
       /*  if(value < 0){
            throw Error('age can not be negative');
        } */
               
        this._age=  value < 0 ? 0 : value;
    }
}

const user1=new User('Steve','Job', -1); //나이가 -1 인 것은 말이 안됨!
// Getter와 Setters로 수정 필요.
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    #privateField = 0; //private. class내부에서만 값에 접근 가능.
  }
  const experiment = new Experiment();
  console.log(experiment.publicField);
  console.log(experiment.privateField);


// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //static은 고유한 것이 아니라. Article이라는 클래스에 붙어있음
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape{} // extends를 사용하면 Shape에서 정의한 내용들을 그대로 사용 가능.
class Triangle extends Shape{ //삼각형의 넓이공식은 사각형과 다름! 때문에 필요한 부분만 overriding하여 변경하기
    draw() { // draw라는 메소드를 overriding하여 삼각형이 출력되게 설정.->shape에 정의된 draw 더 이상 호출 X.
        super.draw(); //super는 부모 객체의 함수를 호출할 때 사용.
        console.log('🔺');
    } 
    getArea(){
        return (this.width*this.height)/2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'blue');
triangle.draw();

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //True
// 왼쪽에 있는 object가 오른쪽에 있는 class의 object인지 여부. 
// object가 class를 이용하여 만들어진 아이인지 아닌지.
// T/F return 
console.log(triangle instanceof Rectangle); //False. Triangle은 Rectangle의 object가 아님.
console.log(triangle instanceof Triangle); //True
console.log(triangle instanceof Shape); //True
console.log(triangle instanceof Object); //True
console.log(triangle.toString());
