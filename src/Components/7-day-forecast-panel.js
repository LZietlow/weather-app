import React from "react";
import { getWeatherstatus } from "./functions";


export default function DailyForecastPanel(props) {
   
    const index = props.time == "Today" ? 0 : props.data.daily.time.indexOf(props.time.dateNoHours);
    
    const imageSrc = require(`../media/${getWeatherstatus(props.data.daily.weathercode[index]).path}`)
   
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "14%"}}>
            <p style={{margin: "5%", width: "20%"}}>{props.time == "Today" ? props.time : props.time.dayOfWeek}</p>
            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", width: "50%", marginLeft: "4%"}}>
            <img src={imageSrc} id="daily-forecast-img" style={{height: "30%", width:"30%"}}/>
            <p style={{margin: "5%"}}>{getWeatherstatus(props.data.daily.weathercode[index]).desc}</p>
            </div>
            <p style={{marginRight: "3%", width: "10%"}}>{Math.round(props.data.daily.temperature_2m_max[index])}/{Math.round(props.data.daily.temperature_2m_min[index])}</p>
        </div>
    )
}