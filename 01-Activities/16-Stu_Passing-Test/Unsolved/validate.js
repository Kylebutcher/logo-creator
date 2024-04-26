// class Validate {}

// Validate.prototype.isPassword = (password) => {
//   // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
//   // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
// };

// module.exports = Validate;


class Validate {}

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("")

Validate.prototype.isPassword = (password) => {
  if( password.length < 8 ) return false

  let matches = [0,0,0];
  const pwArr = password.split("");

  pwArr.forEach( char => {
    if( uppercase.includes(char)) {
      matches[0] = 1;
    }

    if( lowercase.includes(char) ){
      matches[1] = 1
    }

    if( typeof char === 'number' ){
      matches[2] = 1
    }
  })

  if( (matches[0] === matches[1] &&  === matches[2]) && matches[0] === 1 ){
    return true
  } else {
    return false
  }
};

module.exports = Validate;

React

Reply










