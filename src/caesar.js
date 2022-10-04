// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
     if (!shift || shift < -25 || shift > 25) return false;
     if (!encode) shift = -shift;
     
     let lowerCaseInput = input.toLowerCase().split("");

     const message = lowerCaseInput.map(string => {
     let letterCode = string.charCodeAt(0) - 97;
     if (letterCode < 0 || letterCode > 25) return string
     letterCode = letterCode + shift;
     
     if (letterCode < 0) letterCode += 26 
     
    letterCode = letterCode % 26
    letterCode += 97;
    return String.fromCharCode(letterCode)
    }) 

    return message.join("")


      }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
