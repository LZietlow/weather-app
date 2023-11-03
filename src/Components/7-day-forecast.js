import React from "react";
import DailyForecastPanel from "./7-day-forecast-panel";
import { getTime } from "./functions";
import Divider from "./Divider";


export default function(props) {
    if(!props.data) {
        return <div>Loading...</div>
    }
    return (
        <div className="seven_day_forecast" style={{backgroundColor: "#eaecef", marginTop: "1vh", display: "flex", flexDirection: "column",
         borderRadius: "30px", maxWidth: "25vw", marginBottom: "1vh"}}> 
            <h2 style={{color: "#9ea3ab", margin: "1vw"}}>7-DAY-FORECAST</h2>
            <DailyForecastPanel data={props.data} time={"Today"}/>
            <Divider />
            <DailyForecastPanel data={props.data} time={getTime(24)}/>
            <Divider />
            <DailyForecastPanel data={props.data} time={getTime(48)}/>
            <Divider />
            <DailyForecastPanel data={props.data} time={getTime(72)}/>
            <Divider />
            <DailyForecastPanel data={props.data} time={getTime(96)}/>
            <Divider />
            <DailyForecastPanel data={props.data} time={getTime(120)}/>
            <Divider />
            <DailyForecastPanel data={props.data} time={getTime(144)}/>
        </div>
    ) 
}