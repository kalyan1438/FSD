const city = document.getElementById("city").value || "guntur";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d560d3a9ac71a1e87062423c94c65417`;
const sample = async ()=>{
    const res = await fetch(url);
    const data  = await res.json();
    const dis = document.querySelector("#dis");
    dis.innerHTML=`<h1>CityName:${data.name}</h1><br>
    <h2>Main :</h2> <br>
    ${JSON.stringify({
    "temp": 299.6,
    "feels_like": 299.6,
    "temp_min": 299.6,
    "temp_max": 299.6,
    "pressure": 1017,
    "humidity": 56,
    "sea_level": 1017,
    "grnd_level": 1014
  })}`;
}
