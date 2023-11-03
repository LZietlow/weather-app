
import './App.css';
import TodayForecast from './Components/today-forecast';
import Searchbar from './Components/Searchbar';
import LocationInfo from './Components/location-info';
import AirCondition from './Components/air-condition';
import DayForecast from './Components/7-day-forecast';
import React, {useState, useEffect} from 'react';


function App() {
  const[lat, setLat] = useState(52.52437);
  const[lon, setLon] = useState(13.41053);
  const [city, setCity] = useState("Berlin");

  const weatherData = useWeatherData(lat, lon);
  const fetchWeather = (lat, lon, selectedCity) => {
    setLat(lat);
    setLon(lon);
    setCity(selectedCity);
  }


  return (
    <div style={{backgroundColor: ""}}>
        <div className='content-wrapper'>
          <div className='middle-content-wrapper'>
        
          <Searchbar fetchWeather={fetchWeather}/>
       
          <LocationInfo  data={weatherData} city={city}/>
          <TodayForecast  data={weatherData}/>
          <AirCondition  data={weatherData}/>
      
      </div>
      <DayForecast data={weatherData}/>
    </div>
    
    </div>
    
  );
}

function useWeatherData(lat, lon) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max&current_weather=true&timezone=auto`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not OK.");
        }
      })
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [lat, lon]);

  return weatherData;
}
export default App;


