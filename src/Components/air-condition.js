import React from "react";
import { getChanceOfRain, getIndexOfTime, getTime } from "./functions";



export default function(props) {
    if(!props.data) {
        return <div>Loading...</div>
    }
    const data = props.data;
    return(
        <div style={{backgroundColor: "#eaecef", borderRadius: "30px", color: "#9ea3ab", maxWidth: "75vw", marginRight: "1vw", marginTop: "4vh", marginBottom: "1vh", height: "35%"}}>
            <h2 style={{margin: "1vw"}} >AIR CONDITION</h2>
            <div style={{display: "flex", paddingBottom: "0", whiteSpace: "nowrap", height: "70%"}}>
            <div style={{paddingRight: "18.75vw", paddingLeft: "10vw", marginLeft: "8.75vw", marginBottom: "1vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div>
                    <div style={{display: "flex" , alignItems: "center"}}>
                        <img src={require(`../media/termos_condition.png`)} style={{height:"20%" , width: "20%", margin: "1%"}}></img>
                        <h2>Real Feel</h2>
                    </div>
                   <h2 style={{color: "black", margin: "0", marginLeft: "20%"}}>{Math.round(data.hourly.apparent_temperature[getIndexOfTime(getTime(0).formattedDateTime, data)])}°</h2>
                </div>
                <div>
                    <div style={{display: "flex",alignItems: "center"}}>
                        <img src={require(`../media/drop_condition.png`)} style={{height:"20%" , width: "20%", margin: "1%"}}></img>
                        <h2>Chance of rain</h2>
                    </div>
                    <h2 style={{color: "black" , margin: "0", marginLeft: "20%"}}>{getChanceOfRain(getTime(0).formattedDateTime, data)}%</h2>
                </div>
            </div>
            <div style={{paddingRight: "18.75vw", paddingLeft: "10vw", marginBottom: "1vh", marginRight: "8.75vw", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div>
                    <div style={{display: "flex" , alignItems: "center"}}>
                        <img src={require(`../media/wind_condition.png`)} style={{height:"25%" , width: "25%", margin: "1%"}}></img>
                        <h2>Wind</h2>
                    </div>
                    <h2 style={{color: "black", margin: "0", marginLeft: "25%"}}>{data.current_weather.windspeed} km/h</h2>
                </div>
                <div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={require(`../media/sun_condition.png`)} style={{height:"25%" , width: "25%", margin: "1%"}}></img>
                        <h2>UV Index</h2>
                    </div>
                    <h2 style={{color: "black", margin: "0", marginLeft: "25%"}}>{data.daily.uv_index_max[0] != null ? Math.round(data.daily.uv_index_max[data.daily.time.indexOf(getTime(0).dateNoHours)]) : "currently not available"}</h2>
                </div>
            </div>
            </div>
        </div>
    ) 



}