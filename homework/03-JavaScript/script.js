// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ")];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz".split(" ")];
var spclCharacter = ["~!@#$%^&*+?".split(" ")];
var numbers = ["0123456789".split(" ")];
var choiceArray = [];
var passwordArray = [];




function generatePassword() {
  var passwordLength = prompt("Please enter number between 8 and 128"); 
  if (passwordLength < 8 && passwordLength > 128) {
    alert("your password do not meet the length requirements, try again");
    var passwordLength = prompt("Please enter number between 8 and 128");
   generatePassword();
  } 
  else {
      alert("your password will be (" + passwordLength + ") characters long")

  var upperCase = confirm("Do you want uppercase letters in your password?") 
  if (upperCase = true) {
    (choiceArray.push(upperCase));
   }
    
    
  var lowerCase = confirm("Do you want uppercase letters in your password?") 
  if (lowerCase = true){
    (choiceArray.push(lowerCase)); 
   }
    
    
  var spclCharacter = confirm("Do you want special characters in your password?") 
  if (spclCharacter = true)  {
    (choiceArray.push(spclCharacter));
   }

   var numbers = confirm("Do you want numbers in your password?") 
  if (lowerCase = true){
    (choiceArray.push(lowerCase)); 
   }
      else if (upperCase === false && lowerCase === false && spclCharacter === false && numbers === false){
    alert("You failed to choose any characters")
    generatePassword()
   }
   }
  }
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword(Math.floor(Math.random() * choiceArray.passwordlength));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
