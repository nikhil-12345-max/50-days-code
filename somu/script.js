function init(weatherData) {
               document.body.style.backgroundRepeat='no-repeat';
               document.body.style.backgroundSize='cover';
               document.body.style.backgroundPosition='center';
               switch(weatherData.weather[0].main){
                case 'Clear':{
                    document.body.style.backgroundImage="url('c:\Users\Nikhil\Downloads\wind.jpg')";
                }
                case 'Clouds':{
                    document.body.style.backgroundImage="url(cloud.jpg)";
                    break;
                }
                case 'Mist':{
                    document.body.style.backgroundImage="url('c:\Users\Nikhil\Downloads\mist.jpg')"; 
                    break;
                }
                case 'Rain':{
                    document.body.style.backgroundImage="url('c:\Users\Nikhil\Downloads\rain.jpg')"; 
                    break;
                }
                case 'Snow':{
                    document.body.style.backgroundImage="url('c:\Users\Nikhil\Downloads\snow.jpg')"; 
                    break;
                }
                case 'Thunderstrom':{
                    document.body.style.backgroundImage="url('c:\Users\Nikhil\Downloads\thunderstom.jpg')"; 
                    break;
                }
                case 'Sunny':{
                    document.body.style.backgroundImage="url('c:\Users\Nikhil\Downloads\sunny.jpg')"; 
                    break;
                }
                default:
                    break;
               }
            }
            async function getWeather(city){
                const API_KEY="85aa86ef4dac3f26edfad725a1c290f2";
                try {
                    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

            const data = await res.json();
            document.getElementById("weatherOutput").textContent = `Temperature:${data.main.temp}°C`;
            document.getElementById("weatherOutput1").textContent =` Pressure: ${data.main.pressure} hPa`;
            document.getElementById("weatherOutput2").textContent = 'Humidity: ${data.main.humidity}%';
            document.getElementById("weatherOutput3").textContent =` WindSpeed: ${data.wind.speed} m/s`;
            init(data);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                    document.getElementById("weatherOutput").textContent = 'Error: ' + error.message;
                }
            }
document.getElementById('button').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});