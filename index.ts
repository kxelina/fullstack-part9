import express, {Request, Response} from 'express'
const app = express()
import { calculateBmi } from './bmiCalculator'

app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
})


app.get('/bmi', (req: Request, res: Response) => {
  try {
  // console.log(req.query, req.query.height, req.query.weight)
  // console.log('response:',res)
    const height = Number(req.query.height) as number 
    const weight = Number(req.query.weight) as number

    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({ error: 'malformatted parameters' })
    }

    const bmi = calculateBmi(height, weight)
    res.json({ weight, height, bmi}) }
    catch (e) {
      console.log('error:',e)
      res.status(400).json({ error: 'something bad happend' })
    }
    })

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})