
import React, { useState} from "react";


export default function(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    

    const handleSearch = (cityId) => {
        if(searchQuery) {
            fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}`)
            .then((response) => response.json())
            .then((data) => {
                const city = data.results.find(c => c.id === cityId);
                setSearchQuery(city.name);
                props.fetchWeather(city.latitude, city.longitude, city.name);
            })
            .catch((error) => console.error(error));
        }
    };

    const getSuggestions = (input) => {
        if(input <= 1) {
            setSuggestions([]);
            return;
        }
        if (input) {
          fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}`)
            .then((response) => response.json())
            .then((data) => {
              setSuggestions(data.results.slice(0, 6));
            })
            .catch((error) => console.error(error));
        }
      };

      const handleSelectCity = (cityId, cityName) => {
        setSearchQuery(cityName);
        setSuggestions([]);
        handleSearch(cityId);

      }

    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            handleSearch();
        }
    }

    

    return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                 <div className="search-bar" style={{height: "5%", width: "100%"}}>
                <input style={{width: "70%", height: "3dvh", borderRadius: "30px", border: "hidden", outline: "none", backgroundColor: "#eaecef", margin: "1vh"}} type="text" name="search-bar" placeholder="Search for cities" value={searchQuery}  onKeyDown={handleKeyDown} onInput={(e) => {setSearchQuery(e.target.value); getSuggestions(e.target.value);}} />
                </div>
            
                <div style={{listStyle: "none", zIndex: "10", position: "absolute", width: "53.3%", backgroundColor: "#eaecef", opacity: "0.95", marginTop: "3%", borderRadius: "30px"}}>
                {suggestions.map((city, index) => (
                    <div className="suggestion_Element" key={city.id} onClick={() => handleSelectCity(city.id, city.name)} style={{cursor: "pointer",
                     borderTopLeftRadius: index === 0 ? "15px" : "0px",  borderTopRightRadius: index === 0 ? "15px" : "0px", borderBottomLeftRadius: index === suggestions.length-1 ? "15px": "0px", borderBottomRightRadius: index === suggestions.length-1 ? "15px": "0px"}}>
                        <p style={{margin: "1%", marginLeft: "1%"}}>
                            <span style={{fontSize: "1.1em", fontWeight: "520"}}> {city.name}</span>
                            <span style={{fontSize: "1em", fontWeight: "200"}}>, {city.country}</span>
                            <span style={{fontSize: "0.9em", fontWeight: "100"}}>, {city.admin1}</span>
                        </p>
            
                        </div>
                ))}
            </div>
            </div>
           
    )

}
