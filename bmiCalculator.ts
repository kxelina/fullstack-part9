const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2
  if (bmi < 18.5) {
    return 'Underweight'
  }
  if (bmi >= 18.5 && bmi < 25) {
    return 'Normal range'
  }
  if (bmi >= 25) {
    return 'Overweight'
  }
}

try {
  const height: number = Number(process.argv[2])
  const weight: number = Number(process.argv[3])
  if (isNaN(height) || isNaN(weight)) {
    throw new Error('Provided values were not numbers!')
  }
  console.log(calculateBmi(height, weight))
} catch (e:unknown) {
  if (e instanceof Error) {
    console.log('Error:', e.message)
  } else {
    console.log('Unknown error')
  }
}


//console.log(calculateBmi(180, 74)) 
