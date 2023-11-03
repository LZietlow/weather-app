import React from 'react'
import Divider from './Divider'
import { getIndexOfTime, getTempAt, getTime } from './functions'
import TodayHourlyForecast from './TodayHourlyForecast'



export default function(props) {

    if(!props.data) {
        return <div>Loading...</div>
    }

    const timeArray = [
        getTime(3), getTime(6), getTime(9), getTime(12), getTime(15), getTime(18)
    ]
    return (
        <div style={{backgroundColor: "#eaecef", justifyContent: "space-between", marginTop: "1vh", marginBottom: "1vh", marginRight: "1vw",
         borderRadius: "30px", maxWidth: "75vw", height: "30%"}}>
            <h2 style={{color: "#9ea3ab", margin: "1vw"}}>TODAY'S FORECAST</h2>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <TodayHourlyForecast time={timeArray[0]} temp={getTempAt(timeArray[0].formattedDateTime, props.data)} weatherCode={props.data.hourly.weathercode[getIndexOfTime(timeArray[0].formattedDateTime, props.data)]}/>
                <Divider />
                <TodayHourlyForecast time={timeArray[1]} temp={getTempAt(timeArray[1].formattedDateTime, props.data)} weatherCode={props.data.hourly.weathercode[getIndexOfTime(timeArray[1].formattedDateTime, props.data)]}/>
                <Divider />
                <TodayHourlyForecast time={timeArray[2]} temp={getTempAt(timeArray[2].formattedDateTime, props.data)} weatherCode={props.data.hourly.weathercode[getIndexOfTime(timeArray[2].formattedDateTime, props.data)]}/>
                <Divider />
                <TodayHourlyForecast time={timeArray[3]} temp={getTempAt(timeArray[3].formattedDateTime, props.data)} weatherCode={props.data.hourly.weathercode[getIndexOfTime(timeArray[3].formattedDateTime, props.data)]}/>
                <Divider />
                <TodayHourlyForecast time={timeArray[4]} temp={getTempAt(timeArray[4].formattedDateTime, props.data)} weatherCode={props.data.hourly.weathercode[getIndexOfTime(timeArray[4].formattedDateTime, props.data)]}/>
                <Divider />
                <TodayHourlyForecast time={timeArray[5]} temp={getTempAt(timeArray[5].formattedDateTime, props.data)} weatherCode={props.data.hourly.weathercode[getIndexOfTime(timeArray[5].formattedDateTime, props.data)]}/>
            </div>
        </div>

    )
}