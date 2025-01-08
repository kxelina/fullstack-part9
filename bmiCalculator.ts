export const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  }
  if (bmi >= 18.5 && bmi < 25) {
    return "Normal range";
  }
  else {
    return "Overweight";
  }
};

if (require.main === module) {
  try {
    const args: Array<string> = process.argv.slice(2);
    if (args.length !== 2) {
      throw new Error('Invalid number of arguments');
    }
    const [height, weight] = args.map(arg => Number(arg));
    if (isNaN(height) || isNaN(weight)) {
      throw new Error('Provided values were not numbers!');
    }
    console.log(calculateBmi(height, weight));
  } catch (e:unknown) {
    if (e instanceof Error) {
      console.log('Error:', e.message);
    } else {
      console.log('Unknown error');
    }
  }
}


//console.log(calculateBmi(180, 74)) 
