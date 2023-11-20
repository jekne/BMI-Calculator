console.log ("PROCESS ARGV", process.argv)


// Option 1: pass it into the Number() function
const numberConvertedFromString = Number("1.79")
console.log("number converted from a STRING =>",numberConvertedFromString)

// Option 2: parse an integer from a string (kg gets ignored!)

const integerFromString = parseInt("82.11 kg")
console.log("Parse an integer from a String, remove the KG =>",integerFromString)

// Option 3: parse a floating point number (number with decimal places) from a string

const floatParsedFromString =parseFloat("82.1 kg")
console.log("Parse a floating point number with decimal from a string =>",floatParsedFromString)

// If there are letter characters before the number you will get NaN (Not a Number)
const nope = parseInt("I am 82 kg");
console.log(nope); // NaN
const alsoDoesNotWork = parseFloat("I am 1.79 tall");
console.log(alsoDoesNotWork); // NaN

const stringWithLetters = "I am 82 kg";
const numericPart = stringWithLetters.match(/\d+(\.\d+)?/);
const parsedNumber = numericPart ? parseFloat(numericPart[0]) : NaN;

console.log(parsedNumber)