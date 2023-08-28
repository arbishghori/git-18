let age = 25; 
let name = "John"; 

const add = function(a, b) {
  return a + b;
};

const result = add(5, 3);
console.log(result); 

const person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};




const student = Object.create(person);
student.major = "Computer Science";

student.greet(); 
console.log(student.major);




const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    alert ("Button clicked!");
  });