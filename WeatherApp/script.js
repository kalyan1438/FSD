const city = document.querySelector("#city").value.trim();
const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d560d3a9ac71a1e87062423c94c65417`;
const seample = async ()=>{
    const res = await fetch(url)
    const data  = await res.json();
    const dis = document.querySelector("#dis")
    dis.innerHTML=`${JSON.stringify(data)}`;
    ///
    ///
    /// sample
    ///

}
