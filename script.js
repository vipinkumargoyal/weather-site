let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click",(e) => {
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = "";
});

const getWeather = async (city) =>{
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4fcd089dfa078c38b588f24be524bd10`
        );

        const weatherData = await response.json();
        console.log(weatherData);
        const {name} = weatherData;
        const {feels_like} = weatherData.main;
        const {id,main} = weatherData.weather[0];
        loc.textContent= name;
        climate.textContent= main;
        tempvalue.textContent= Math.round(feels_like - 273);
        if(id<300 && id>200){
            tempicon.src = "./icons/thunderstorm.png";
        } else if (id<400 && id>300){
         tempicon.src = "./icons/sun-cloud.png";
        } else if (id<600 && id> 500){
         tempicon.src = "./icons/rain.png";
        }else if (id<700 && id>600){
         tempicon.src = "./icons/snow.png";
        }else if (id<800 && id>700){
         tempicon.src = "./icons/cloud big.png";
        }else if (id == 800){
         tempicon.src = "./icons/cloudy_day.png";
        }
    }catch(error){
        alert("city not found");
    }
};