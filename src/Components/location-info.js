import React from "react";
import { getChanceOfRain, getTime, getWeatherstatus } from "./functions";

export default function(props) {
    const data = props.data;
    if(!data) {
        return <div>Loading...</div>
    }
    
    return (
        <div className='current-wrapper' style={{backgroundColor: "", height: "25%"}}>
        <div style={{textAlign: "left", alignSelf: "center"}}>
            <h2 style={{marginBottom: 0}}>{props.city}</h2>
            <p style={{marginBottom: "2.5vw"}}>Chance of rain: {getChanceOfRain(getTime(0).formattedDateTime, data)}%</p>
            <h1>{Math.round(data.current_weather.temperature)}°</h1>
        </div>
        <div id='current-img-wrapper' style={{textAlign: "center", alignSelf: "center"}}>
            <img src={require(`../media/${getWeatherstatus(data.current_weather.weathercode).path}`)} id='current-image'/>
        </div>
    </div>
    )
}