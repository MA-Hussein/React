import React from 'react';

const WeatherCard = ({ props, deleteItem }) => {

	const {id , name , sys: { country } , weather , main: { temp_min, temp_max } , coord: { lon, lat }} = props;

	const kelvinToCelcius = (kelvin) => {
		return (kelvin - 273).toFixed(2);
	};
	return (
		<div className="main">
			<h3>
				{name} {country}
			</h3>
			<button className="deleteBtn" onClick={() => deleteItem(id)}>
				X
			</button>
			<div className="weatherMain">
				<h5>{weather[0].main}</h5>
				<p> {weather[0].description} </p>
			</div>

			<p> min temp: {kelvinToCelcius(temp_min)} °C </p>
			<p> max temp: {kelvinToCelcius(temp_max)} °C </p>
			<p>
				location: {lat} {lon}
			</p>
		</div>
	);
};
export default WeatherCard;
