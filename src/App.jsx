
import { useEffect, useRef, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import { fetchCoordinates } from './api/geo'
import { fetchWeatherByCoords } from './api/weather'
import { getColorByWeatherId } from './api/bgColor'
const CITIES = ['Seoul', 'Busan', 'Jeju City', 'Tokyo', 'New York']

function App() {

  const [city, setCity] = useState('seoul')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const inputRef = useRef(null)

  const searchCity = async (name) => {
    const q = name.trim()
    if (!q) return

    try {
      setLoading(true)
      setErr('')


      const { lat, lon, name: cityName } = await fetchCoordinates(q)

      const data = await fetchWeatherByCoords(lat, lon)

      setWeather({...data, cityName})
      setCity('')

    } catch (error) {
      console.error(error.message)
      setErr('도시를 찾을 수 없어요. 영어 이름으로도 검색해 보세요')
    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    searchCity('seoul')

  }, [])
  const handleSearch = () => searchCity(city)
  const onChangeInput = (e) => setCity(e.target.value)
  const onKeyup = (e) => {
    if (e.key == 'Enter') handleSearch()
  }


  const bg = weather?.weather?.[0]?.id
    ? getColorByWeatherId(weather.weather[0].id)
    : 'linear-gradient(135deg, #98b8ff 0%, #60a5fa 100%)'


  return (
    <section style={{ background: bg }}>
      <div className='app'>
        <h1>☁️오늘의 날씨</h1>
        <div className="input-wrap">
          <input type="text"
            ref={inputRef}
            value={city}
            onKeyUp={onKeyup}
            onChange={onChangeInput}
            placeholder='도시 이름을 입력하세요' />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? '검색중...' : '검색'}
          </button>
        </div>
        <div className="chips">
          {CITIES.map((name) => (
            <button key={name} onClick={()=>searchCity(name)}>{name}</button>
          ))}
        </div>
        {err && <p className='error'>{err}</p>}
       { loading && <p className='info'>불러오는 중...</p>}
        <WeatherCard weather={weather}/>
      </div>
    </section>
  )
}

export default App
