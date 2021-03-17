import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


const WeatherContainer = styled.div `
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    width: 400px;
    text-align: center;
    font-size: 20px;
`;

const Weather = () => {
    const [weatherData, setWeatherData] = useState();
    const getWeather = async () => {

        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        console.log(response.data);
        setWeatherData(response.data);
     };
     
     useEffect(() => {
        getWeather();
      }, []);

      const WeatherLoader = () => {
        if (weatherData === undefined) {
            return (
                <div>Loading!</div>
            )
        } else {
            return (
                <WeatherContainer>
                    <div>Temp:</div>
                    <div>Real Feel:</div>
                    <div>Pressure:</div>
                    <div>{weatherData.main.temp}</div>
                    <div>{weatherData.main.humidity}</div>
                    <div>{weatherData.main.pressure}</div>
                </WeatherContainer>
            )
        }
    }

    return (
        WeatherLoader()
    )
}

export default Weather;