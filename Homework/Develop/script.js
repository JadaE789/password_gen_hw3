// Assignment Code/DOM elements
let passwordText = document.getElementById("password");
let generateBtn = document.getElementById("generate");
let lengthEl = document.getElementById("length");
let upperCaseEl = document.getElementById("uppercase");
let lowerCaseEl = document.getElementById("lowercase");
let numericEL = document.getElementById("numeric");
let specialCharEl = document.getElementById("special characters");

const randomFunction = {
  uppercase: getUpper,
  lowercase: getLower,
  numericChar: getNumericChar,
  specialChar: getSpecialChar
};

function writePassword() {
  let password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
   let length = +lengthEl.value;
   let hasUpper = upperCaseEl.checked;
   let hasLower = lowerCaseEl.checked;
   let hasNumeric = numericEL.checked;
   let hasSpecialChar = specialCharEl.checked;

passwordText.innerText = generatePassword(hasUpper ,hasLower ,hasNumeric ,hasSpecialChar ,length);

//Generate password
function generatePassword(uppercase, lowercase, numericChar, specialChar, length) {

  let generatedPassword = "";

  const typesCriteria = uppercase + lowercase + numericChar + specialChar;

  const typesArr = [{ uppercase }, { lowercase} , { numericChar }, { specialChar }].filter(item => Object.values(item) [0] );

  if(typesCriteria === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCriteria) {
    typesArr.forEach(type =>{
      const functionName = Object.keys(type)[0];
      generatedPassword += randomFunction[functionName]();
    });
 }

  let finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

//Functions for generator
function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getNumericChar() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSpecialChar() {
  const symbols = "!@#$%^&*_+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}