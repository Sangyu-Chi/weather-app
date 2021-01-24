
  let currentDate = document.querySelector("#currentDate");
    let now = new Date();   
  function formatDate(now){
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let day = days[now.getDay()];
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(days)
    let formattedDate= `${day}  ${hour}:${minute}`;
    return formattedDate;
    }


      currentDate.innerHTML = formatDate(now);
     
     
     
     
  function displayWeatherCondition(response){
    console.log(response);
     document.querySelector("#selectedCity").innerHTML = response.data.name;
     document.querySelector("#currentTemp").innerHTML = Math.round(response.data.main.temp)+"°F";
     document.querySelector("#temperature-description").innerHTML = response.data.weather[0].description;
  }   
     
  function searchCity(city){
        let apiKey = "237e358ff71c78869daf7fd212ce8369";
        let units = "imperial";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(displayWeatherCondition);
        
  }

  function handleSearch(event){
       event.preventDefault();
        
        let city = document.querySelector("#search-text-input").value;
        searchCity(city);
            
     }

  function searchLocation(position){
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiKey="237e358ff71c78869daf7fd212ce8369";
      let units = "imperial";
      let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
       axios.get(apiUrl).then(displayWeatherCondition);
  }   

  function displayCurrentLocation(event){
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(searchLocation);

  }

        let form = document.querySelector("#search-form");
        form.addEventListener("submit", handleSearch);
       
        let homeBtn = document.querySelector("#homeBtn");
        homeBtn.addEventListener("click",displayCurrentLocation)

        searchCity("New York");

function changeToCelsius(event){
  event.preventDefault();

  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = `4°`;  

}

function changeToFahrenheit(event){
  event.preventDefault();

  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = `39°`;  

}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeToCelsius);  

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFahrenheit);  



  function showCurrentTemp(response){
    console.log(response);
      let temperature = Math.round(response.data.main.temp);
      let city = response.data.name;
     
      let currentCity = document.querySelector("#selectedCity");
      currentCity.innerHTML =`${city}`;

      let currentTemp = document.querySelector("#currentTemp");
      currentTemp.innerHTML = `${temperature}°F`;

      let description = document.querySelector("#temperatrure-description");
      description.innerHTML = response.data.weather[0].main;
    }

   

 
 

 





