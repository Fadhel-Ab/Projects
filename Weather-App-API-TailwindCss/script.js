function start() {
     document.getElementById('day').innerHTML=new Date().toLocaleString('en-US', {weekday:'long'});
     document.getElementById('daymonth').innerHTML=new Date().toLocaleString('en-US', {day:"2-digit"});
     document.getElementById('month').innerHTML=new Date().toLocaleString('en-US', {month:'long'});
}
function Bahrain(){

}
async function city(lat, lon  ) {
    const apikey = "fa4317d01968b19270983d42f310cee4";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
    
    try {
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("something went wrong")
      }
      const data = await response.json();
        console.log("Full API response:", data);//kept just in case 
        document.getElementById("temp").innerHTML=Math.round(data.main.temp);
        document.getElementById("city").innerHTML=data.name;
        document.getElementById("wspeed").innerHTML=data.wind.speed;
        document.getElementById("humidity").innerHTML=data.main.humidity;
        document.getElementById("direction").innerHTML=data.wind.deg;
        //document.getElementById("icon").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`  can be used to change image icon provided at api website
    }catch (Error)
    {
      console.Error(Error)
    }
   
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(weather);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function weather(position) {
    const x = document.getElementById("demo");
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  /*x.innerHTML =  "Latitude: " + lat +
    "<br>Longitude: " + lon;*/
    city(lat,lon);
}

