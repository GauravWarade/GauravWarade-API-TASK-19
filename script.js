console.log("Hii");
const cityName = document.getElementById('weatherInput');
const form = document.getElementById('weatherForm');
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const tempp = document.getElementById('temp');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    console.log(city);
    const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
    weather_api(city);
async function weather_api (city){
    try {
        
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`)
        .then(res => res.json())
        .then(data=>{
            let temp = Math.floor(data.main.temp);
            let weather_data = data.weather[0].main;
            console.log(temp);
            console.log(weather);
            //document.getElementById("temp").innerHTML= city+" Temperature is : "+temp;
            myCity.innerHTML = city;
            weather.innerHTML = weather_data;
            tempp.innerHTML = `${temp}<span><sup>o</sup>C</span.`;

            // Updating the Images according to the weather
        if (weather_data == 'Clear') {
            image.src = `./Images/sunny.jpg`
            myWeatherContainer.style.backgroundColor = '#ec6e4c'
        }
        if (weather_data == 'Clouds') {
            image.src = `./Images/cloudy.jpg`
            myWeatherContainer.style.backgroundColor = '#86d3d3'
        }
        if (weather_data == 'Rain') {
            image.src = `./Images/rainny.jpg`
            myWeatherContainer.style.backgroundColor = '#494bcf'
        }
        if (weather_data == 'Drizzle') {
            image.src = `./Images/haze.jpg`
            myWeatherContainer.style.backgroundColor = '#8ecfcf'
        }
        if (weather_data == 'Haze') {
            image.src = `./Images/haze.jpg`
            myWeatherContainer.style.backgroundColor = '#d8ced2'
        }
        if (weather_data == 'Smoke') {
            image.src = `./Images/smoke.png`
            myWeatherContainer.style.backgroundColor = '#d8ced2'
        }
        if (weather_data == 'Fog') {
            image.src = `./Images/fog.png`
            myWeatherContainer.style.backgroundColor = '#d8ced2'
        }
        if (weather_data == 'Mist') {
            image.src = `./Images/fog.png`
            myWeatherContainer.style.backgroundColor = '#d8ced2'
        }
        })
    
    console.log("Resolved");
    
    } catch (error) {
        console.log('fetch:error', error);
        console.log("Rejected");
    }
}

})