// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function Blogpost(authorName, title, text, createdOn){
  this.name = authorName;
  this.title = title;
  this.text = text;
  this.created = createdOn;
  this.printMetaData = function(){
    console.log(`Created by ${this.name} on ${this.created}.`);
  }
}

const day1 = new Blogpost('Kyle', 'Its friday!', 'this is crazy almost half way done with school', '4/19/24');

console.log(day1);


// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object
day1.printMetaData()