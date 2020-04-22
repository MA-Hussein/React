import React from 'react';
import './App.css';
import WeatherInfo from './WeatherInfo.jsx';
import cityWeather from './city-weather.json';

function WeatherCard() {
    return (
    <div className="WeatherCard">
    
    {cityWeather.map(cityObject => (
      <WeatherInfo
        key={cityObject.id}
        cityName={cityObject.name}
        countryName={cityObject.sys.country}
        main={cityObject.weather[0].main}
        description={cityObject.weather[0].description}
        temp_min={cityObject.main.temp_min}
        temp_max={cityObject.main.temp_max}
        lon={cityObject.coord.lon}
        lat={cityObject.coord.lat}
      />
    ))}
  </div>
);
}
export default WeatherCard;
