import express, {Request, Response} from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});


app.get('/bmi', (req: Request, res: Response) => {
  try {
  // console.log(req.query, req.query.height, req.query.weight)
  // console.log('response:',res)
    const height = Number(req.query.height); 
    const weight = Number(req.query.weight); 

    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({ error: 'malformatted parameters' });
    }

    const bmi = calculateBmi(height, weight);
    res.json({ weight, height, bmi}); }
    catch (e) {
      console.log('error:',e);
      res.status(400).json({ error: 'something bad happend' });
    }
    });

app.post('/exercises', (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const daily_exercises = req.body.daily_exercises;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const target = Number(req.body.target);
    // console.log('daily_exercises:', daily_exercises);
    // console.log('target:', target);
    if (!daily_exercises || !target) {
      res.status(400).json({ error: 'parameters missing' });
    }
    if (!Array.isArray(daily_exercises) || isNaN(target) ) {
      res.status(400).json({ error: 'malformatted parameters' });
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(daily_exercises, target);
    res.json(result);
  } catch (e) {
    console.log('error:',e);
    res.status(400).json({ error: 'something bad happend' });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});