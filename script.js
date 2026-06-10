const apiKey="10e0f928b2403e736a6ce00847fa1d2b";

const apiUrl=
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=
document.querySelector(".search input");

const searchBtn=
document.querySelector(".search button");

const weatherIcon=
document.querySelector(".weather-icon");

async function checkWeather(city){

const response=
await fetch(apiUrl+city+`&appid=${apiKey}`);

const data=
await response.json();

document.querySelector(".city").innerHTML=
data.name;

document.querySelector(".temp").innerHTML=
Math.round(data.main.temp)+"°C";

document.querySelector(".humidity").innerHTML=
data.main.humidity+"%";

document.querySelector(".wind").innerHTML=
data.wind.speed+" km/h";
document.querySelector(".condition").innerHTML =
data.weather[0].description;

const weatherMain=
data.weather[0].main;

if(weatherMain=="Clouds"){
weatherIcon.src="images/clouds.png";
}
else if(weatherMain=="Rain"){
weatherIcon.src="images/rain.png";
}
else if(weatherMain=="Drizzle"){
weatherIcon.src="images/drizzle.png";
}
else if(weatherMain=="Mist"){
weatherIcon.src="images/mist.png";
}
else if(weatherMain=="Snow"){
weatherIcon.src="images/snow.png";
}
else{
weatherIcon.src="images/clear.png";
}
}

searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress",(e)=>{
if(e.key==="Enter"){
checkWeather(searchBox.value);
}
});

navigator.geolocation.getCurrentPosition(
async(position)=>{

const lat=position.coords.latitude;
const lon=position.coords.longitude;

const response=await fetch(
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
);

const data=await response.json();

document.querySelector(".city").innerHTML=data.name;

document.querySelector(".temp").innerHTML=
Math.round(data.main.temp)+"°C";

document.querySelector(".humidity").innerHTML=
data.main.humidity+"%";

document.querySelector(".wind").innerHTML=
data.wind.speed+" km/h";
}
);
