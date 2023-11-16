// bmi-calculator formula --> BMI= weight (kg) / (height (m) x height (m))


const weightInKg = 82
const heightInKg = 1.79

const BMI = weightInKg / (heightInKg * heightInKg)

console.log("weight",weightInKg)
console.log(`**************
BMI CALCULATOR
**************

height: ${heightInKg}
weight: ${weightInKg}

****************
FACING THE FACTS
****************

Your BMI is 26

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight`)
