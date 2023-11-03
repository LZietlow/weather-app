import React from "react";
import { getWeatherstatus } from "./functions";


export default function(props) {
    return(
        <div style={{maxWidth: "16.6%", textAlign: "center"}}>
            <h2 style={{color: "#9ea3ab"}}>{props.time.dayOfWeek}, {props.time.hoursTime}</h2>
            <img src={require(`../media/${getWeatherstatus(props.weatherCode).path}`)} style={{maxHeight: "30%", maxWidth: "30%"}}/>
            <h2>{props.temp}°</h2>
        </div>

    )
}