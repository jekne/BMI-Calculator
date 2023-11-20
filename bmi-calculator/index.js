// bmi-calculator formula --> BMI= weight (kg) / (height (m) x height (m))
console.log("What does process.argv contain?", process.argv);

const weightInKg = process.argv[2]
const heightInM = process.argv[3]

const BMI = Math.round(weightInKg / (heightInM * heightInM))

console.log(`**************
BMI CALCULATOR
**************

height: ${heightInM }
weight: ${weightInKg}

****************
FACING THE FACTS
****************


Your BMI is ${BMI
}
A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight`)

