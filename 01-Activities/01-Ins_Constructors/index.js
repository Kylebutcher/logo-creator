 // Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
// const dog = {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog'
// }

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
}









// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
const rex = new Dog('Rex', 2, 'Bulldog');// if you want to make another object go to line below
const dizzy = new Dog("Dizzy", 120, "unknown");

// Calling dog's nap method
rex.nap();
console.log(dizzy.age);





// function Customer(name, address, email, phone) {
//   this.name = name;
//   this.addy = address;
//   this.email = email;
//   this.number = phone;

//   sendMail: function(){
//     // send message via email server to this.email
//   }

//   makeGoldMember = function(){

//   }
// }