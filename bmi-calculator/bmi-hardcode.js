let weightInKg = 82
let heightInKg = 1.79

// const BMI = Math.round(weightInKg / (heightInKg * heightInKg))

console.log(`**************
BMI CALCULATOR
**************

height: ${heightInKg }
weight: ${weightInKg}

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(weightInKg / (heightInKg * heightInKg))
}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight`)