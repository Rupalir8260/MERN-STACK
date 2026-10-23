async function fetchWeather() {
    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true"
);
   if (!response.ok) {
    throw new Error("Failed to fetch weather data");
}
   const data = await response.json();
   const Currenttemperature = data.current_weather.temperature;
   const windSpeed = data.current_weather.windspeed;
   console.log("Fetching Weather in Mumbai");
   console.log("Current Temperature:", Currenttemperature, "°C");
   console.log("Wind Speed:", windSpeed, "km/h");
} catch (error) {
  console.error("Error fetching weather:", error.message);
 }
}

fetchWeather();