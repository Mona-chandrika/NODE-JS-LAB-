import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
} from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
const Weather = () => {
const [city, setCity] = useState('');
const [weatherData, setWeatherData] = useState(null);
const fetchData = async () => {
if (!city) return;
try {
const response = await axios.get(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b8c1b2e690a
d3c2498f275cf926a674e`
);
setWeatherData(response.data);
} catch (error) {
console.error(error);
}
};
const handleSubmit = (e) => {
e.preventDefault();
fetchData();
};
const chartData = {
labels: ['Temperature', 'Feels Like', 'Humidity', 'Pressure'],
datasets: [
{
label: 'Weather Data',

data: weatherData
? [
weatherData.main.temp,
weatherData.main.feels_like,
weatherData.main.humidity,
weatherData.main.pressure,
]
: [],
borderColor: 'blue',
backgroundColor: 'rgba(0, 0, 255, 0.2)',
pointBackgroundColor: 'red',
pointBorderColor: 'black',
fill: true,
tension: 0.4,
},
],
};
return (
<div
style={{
textAlign: 'center',
marginTop: '50px',
fontFamily: 'Arial',
background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
minHeight: '100vh',
padding: '20px',
}}
>
<h1 style={{ color: '#333' }}>Weather Forecast App</h1>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter city"
value={city}
onChange={(e) => setCity(e.target.value)}
style={{
padding: '10px',
marginRight: '10px',
borderRadius: '5px',
border: '1px solid #ccc',
}}
/>
<button
type="submit"
style={{
Title : 13.WeatherApp Date :
Roll No. 24WH1A05BK Page No.: 82
BVRIT HYDERABAD College of Engineering for Women
padding: '10px 15px',
borderRadius: '5px',
border: 'none',
backgroundColor: '#007BFF',
color: 'white',
cursor: 'pointer',
}}
>
Get Weather
</button>
</form>
{weatherData && (
<div
style={{
marginTop: '30px',
padding: '20px',
borderRadius: '15px',
display: 'inline-block',
backgroundColor: 'white',
boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
}}
>
<h2>{weatherData.name}</h2>
<p> 24WH1A0570</p>
<p> Temperature: {weatherData.main.temp} °C</p>
<p> Feels Like: {weatherData.main.feels_like} °C</p>
<p> Humidity: {weatherData.main.humidity}%</p>
<p> Pressure: {weatherData.main.pressure}</p>
<p> Wind Speed: {weatherData.wind.speed} m/s</p>
<p> Description: {weatherData.weather[0].description}</p>
<h3> Weather Graph</h3>
<div style={{ width: '400px', margin: '0 auto' }}>
<Line data={chartData} />
</div>
</div>
)}
</div>
);
};
export default Weather;
app.js:
import React from 'react';

import Weather from './Weather';
const App = () => {
return (
<div>
<h1>Weather Forecast App</h1>
<Weather />
</div>
);
};
export default App;
