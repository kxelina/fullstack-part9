interface ExerciseValues {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
    }

export const calculateExercises = (args: Array<number>, target: number): ExerciseValues => {
    const periodLength = args.length;
    const trainingDays = args.filter(day => day !== 0).length;
    const average = args.reduce((a, b) => a + b, 0) / periodLength;
    const roundedAverage = Math.round(average);
    const success = average >= target ? true : false;
    const rating = (average: number, target: number): number => {
        if (average < target) {
            return 1;
        }
        if (average === target) {
            return 2;
        }
        if (average > target) {
            return 3;
        } else 
            return 0;
    };
    const ratingDescription = (rating: number): string => {
        if (rating === 1) {
            return 'bad';
        }
        if (rating === 2) {
            return 'not too bad but could be better';
        }
        if (rating === 3) {
            return 'great';
        } else
            return 'no rating';
    };
    return {
        periodLength,
        trainingDays,
        success,
        rating: rating(roundedAverage, target),
        ratingDescription: ratingDescription(rating(roundedAverage, target)),
        target,
        average
    };
};

try {
    const args: Array<number> = process.argv.slice(3).map(arg => Number(arg));
    const target: number = Number(process.argv[2]);
    if (args.some(num => isNaN(num)) || isNaN(target)) {
        throw new Error('Provided values were not numbers!');
      }
    console.log(calculateExercises(args, target));
} catch (e) {
    if (e instanceof Error) {
        console.log('Error:', e.message);
    }  else {
    console.log('Unknown error');
    }
}

//console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))