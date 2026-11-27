import React from 'react'
import './WeatherCard.css'
import { getOutfit } from '../utils/outfit'
const WeatherCard = ({ weather }) => {

  if (!weather) return null
  const { name, cityName, main, wind, weather: info } = weather
  const displayName = cityName ?? name

  const { temp, feels_like, humidity } = main
  const { description, icon } = info[0]
  const iconUrl =`https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <div className='card' key={displayName}>
      <h2>{displayName}</h2>
      <div className="img-wrap">
        <img src={iconUrl} alt={description} />
      </div>
      <p className="temp">{Math.round(temp)}°</p>
      <p className="desc">{description}</p>
      <p className="outfit">오늘 옷차림 
{/* feels_like */}
{getOutfit(Math.round(temp))}
      </p>
      <div className="meta">
        <div><span>체감</span><strong>{Math.round(feels_like)}°</strong></div>
        <div><span>습도</span><strong>{humidity}%</strong></div>
        <div><span>바람</span><strong>{wind.speed}m/s</strong></div>
      </div>
    </div>
  )
}

export default WeatherCard