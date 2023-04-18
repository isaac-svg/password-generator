(()=>{
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const symbolEl = document.getElementById("symbols");
const numberEl = document.getElementById("numbers");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
//
const randomFunctions = {
  lower: generateLower,
  upper: generateUpper,
  symbol: generateSymbol,
  number: generateNumber,
};
//
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const upper = upperEl.checked;
  const lower = lowerEl.checked;
  const symbol = symbolEl.checked;
  const number = numberEl.checked;
  resultEl.innerText = generatePassword(length, upper, lower, symbol, number);
});

// copy to El function

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    return;
  }

  textarea.innerText = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  // 1loc
  // haikei
  // 115.io
  // 100l5.io
  alert("Password copied to clipboard");
});

// end of copy to clipboard function
//  generate password function
function generatePassword(length, upper, lower, symbol, number) {
  let generatedPassword = "";
  let typesCount = upper + lower + symbol + number;
  //
  const passwordArr = [{ upper }, { lower }, { symbol }, { number }].filter(
    (item) => Object.values(item)[0]
  );
  //
  if (!typesCount) {
    return;
  }
  //
  for (let i = 0; i < length; i += typesCount) {
    passwordArr.forEach((type) => {
      const typeName = Object.keys(type)[0];
      generatedPassword += randomFunctions[typeName]();
    });
  }
  //
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
function generateLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function generateUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function generateSymbol() {
  const symbols = "!@#$%^&*+{?/|~;<,>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
})()
