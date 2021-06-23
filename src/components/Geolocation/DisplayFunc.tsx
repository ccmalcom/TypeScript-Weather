import React from "react";
// import CurrentWeather from "./DisplayClass";
type AcceptedProps = {
    // temp: string;
    // humidity: string;
    locationWeather: {
        main: {
            temp: string;
            humidity: string
        },
        clouds: {
            all: number
        },
        wind: {
            speed: number
        }
    }
}

const CurrentWeatherDisplay = (props: AcceptedProps) => {
    return (
        <div>
            <h2>Current:</h2>
            <h5>Temp</h5>
            <p>{props.locationWeather.main.temp}deg</p>
            <h5>Humidity</h5>
            <p>{props.locationWeather.main.humidity}%</p>
            <h5>Wind Speed</h5>
            <p>{props.locationWeather.wind.speed}mph</p>
            <h5>Cloud Coverage</h5>
            <p>{props.locationWeather.clouds.all}%</p>
        </div>
    )
}

export default CurrentWeatherDisplay;