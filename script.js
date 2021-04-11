
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function getPasswordOptions(){
  var passLength = parseInt(prompt("How long do you want your password to be?"));
  if (isNaN(passLength) === true) {
    alert("Must be a number!");
   return
  }
  if (passLength < 8 || passLength > 128) {
    alert("Must be at least 8 characters, and less than 128");
    return
  }

  var hasSpecialChar = confirm("Do you want to use special characters?");
  var hasNumericChar = confirm("Do you want to use numeric characters?");
  var hasLowerChar = confirm("Do you want to use lower case letters?");
  var hasUpperChar = confirm("Do you want to use upper case letters?");

  if (
    hasSpecialChar === false &&
    hasNumericChar === false &&
    hasLowerChar === false &&
    hasUpperChar === false
    ) {
    alert('Must select at least one character type');
    return;
  }

  var passwordOptions = {
    passLength: passLength,
    hasSpecialChar: hasSpecialChar,
    hasNumericChar: hasNumericChar,
    hasLowerChar: hasLowerChar,
    hasUpperChar: hasUpperChar
  };
    return passwordOptions;
};

function getRandomArrayEl(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randEl = arr[randIndex];
  return randEl
};
function generatePassword() {
  var options = getPasswordOptions()
  var result = [];
  console.log(options)
  var possibleChar = [];
  var guaranteedChar = [];
    if (options.hasSpecialChar) {
      possibleChar = possibleChar.concat(specialCharacters);
      guaranteedChar.push(getRandomArrayEl(specialCharacters))
    }
    if (options.hasNumericChar) {
      possibleChar = possibleChar.concat(numericCharacters);
      guaranteedChar.push(getRandomArrayEl(numericCharacters))
    }
    if (options.hasLowerChar) {
      possibleChar = possibleChar.concat(lowerCasedCharacters);
      guaranteedChar.push(getRandomArrayEl(lowerCasedCharacters))
    }
    if (options.hasUpperChar) {
      possibleChar = possibleChar.concat(upperCasedCharacters);
      guaranteedChar.push(getRandomArrayEl(upperCasedCharacters))
    }
    for (var i = 0; i < options.passLength; i++) {
      var possibleCharacter = getRandomArrayEl(possibleChar);
      result.push(possibleCharacter);
      console.log(possibleCharacter)
    }

    console.log(result)
    // for (var i = 0; i < guaranteedChar.length; i++) {
    // console.log(result[i] , guaranteedChar[i])
    // result[i] = guaranteedChar[i];

    // }
  return result.join('');
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
