
  export function getTempAt(time, data) {
    return Math.round(data.hourly.temperature_2m[getIndexOfTime(time, data)]);
  }

  export function getChanceOfRain(time, data) {
    
    let index = getIndexOfTime(time,data);
    return data.hourly.precipitation_probability[index];
  }

  export function getTime(offset) {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHours = now.getHours();
    const newHours = currentHours + offset;
  
    
    let newDay = currentDay + Math.floor(newHours / 24);
    

    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate() + (newDay - currentDay);
   
    const hours = newHours % 24;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    
    if (newDay > 6) {
      newDay -= 7;
    } 
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = dayNames[newDay];

    switch(month) {
      case 2:
        if((year % 4 == 0) && (year % 100 != 0) || year % 400 == 0) {
          if(day > 29) {
            month++;
            day = day % 29
          }
        } else {
          if(day > 28) {
            month++;
            day = day % 28
          }
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if(day > 31) {
          month++;
          day = day % 31;
        }
        break;
      default:
        if(day > 30) {
          month++;
          day = day % 30;
        }
    }
  
   
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    
   
    const formattedDateTime = `${year}-${formattedMonth}-${formattedDay}T${formattedHours}:00`;
    const hoursTime = `${formattedHours}:00`
    const dateNoHours = `${year}-${formattedMonth}-${formattedDay}`;

    return {formattedDateTime, dayOfWeek, hoursTime, dateNoHours};
  }

  export function getWeatherstatus(weatherCode) {


   switch(weatherCode) {
    case 0:
      return {path: "sun.png", desc: "Sunny"};
    case 1:
    case 2:
    case 3:
      return {path: "cloudy-day.png", desc: "Cloudy, a bit sun" };
    case 45:
    case 48:
      return {path: "cloud.png", desc: "Cloudy" };
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return {path: "raining.png", desc: "Raining" };
    case 71:
    case 73:
    case 75:
    case 77: 
    case 85:
    case 86:
      return {path: "snow.png", desc: "Snowing" };
    case 95:
    case 96:
    case 99:
      return {path: "storm.png", desc: "Storming" };
    default:
      return {path: "sun.png", desc: "Sunny"};

   }

  }


  export function getIndexOfTime(time, data) {
  let hourlyArray = [...data.hourly.time];
  return hourlyArray.indexOf(time);
}
