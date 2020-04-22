import React from 'react';

  const WeatherInfo = ({ cityName, countryName, main, description, temp_min, temp_max, lon, lat}) => {
  return (
    <div>
      <div className="box">
        <h4>
          {cityName}, {countryName}
        </h4>
        <h6> {main} </h6>
        <p> {description} </p>
        <p> min temp: {temp_min} °C </p>
        <p> max temp: {temp_max} °C </p>
        <p>
          location: {lon}, {lat}
        </p>
      </div>
    </div>
  );
}

export default WeatherInfo;
