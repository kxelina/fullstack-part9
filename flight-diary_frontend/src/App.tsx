import { useEffect, useState } from 'react'
import { Diary } from './types'
import { getAllDiaries, createDiary } from './diaryService'
import { AxiosError } from 'axios'


const App = () => {
  const [date, setDate] = useState('')
  const [weather, setWeather] = useState('')
  const [visibility, setVisibility] = useState('')
  const [comment, setComment] = useState('')
  const [diaries, setDiaries] = useState<Diary[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    getAllDiaries().then(data => {
      console.log(data)
      setDiaries(data)
    })
  },[])

  const diaryCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
    const newDiary = await createDiary({
      date,
      weather,
      visibility,
      comment
    })
    setDiaries(diaries.concat(newDiary))
    setDate('')
    setWeather('')
    setVisibility('')
    setComment('')
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      console.log(error.response.data)
      setError(error.response.data)
    } else {
      console.log(error)
      setError('Unknown error')
  }}
    setTimeout(() => {
      setError('')
    }, 5000)
  }


  return (
    <div>
      <h2>Add new entry</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={diaryCreation}>
        <div>
        date
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}  />
        </div>
        <div>
        visibility
        great
        <input type="radio" name="visibility" value="great" checked={visibility === 'great'} onChange={(e) => setVisibility(e.target.value)} />
        good
        <input type="radio" name="visibility" value="good" checked={visibility === 'good'} onChange={(e) => setVisibility(e.target.value)} />
        ok
        <input type="radio" name="visibility" value="ok" checked={visibility === 'ok'} onChange={(e) => setVisibility(e.target.value)} />
        poor
        <input type="radio" name="visibility" value="poor" checked={visibility === 'poor'} onChange={(e) => setVisibility(e.target.value)} />
        </div>
        <div>
        weather
        sunny
        <input type="radio" name="weather" value="sunny" checked={weather === 'sunny'} onChange={(e) => setWeather(e.target.value)} />
        rainy
        <input type="radio" name="weather" value="rainy" checked={weather === 'rainy'} onChange={(e) => setWeather(e.target.value)} />
        cloudy
        <input type="radio" name="weather" value="cloudy" checked={weather === 'cloudy'} onChange={(e) => setWeather(e.target.value)} />
        stormy
        <input type="radio" name="weather" value="stormy" checked={weather === 'stormy'} onChange={(e) => setWeather(e.target.value)} />
        windy
        <input type="radio" name="weather" value="windy" checked={weather === 'windy'} onChange={(e) => setWeather(e.target.value)} />
        </div>
        <div>
        comment
        <input value={comment} onChange={(e) => setComment(e.target.value)}/>
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Diary entries</h2>
        {diaries.map((diary) => (
          <p key={diary.id}>
            <b>{diary.date}</b>
            <br />
            visability: {diary.visibility}
            <br />
            weather: {diary.weather}
          </p>
        ))}
     
    </div>
  )
}

export default App
