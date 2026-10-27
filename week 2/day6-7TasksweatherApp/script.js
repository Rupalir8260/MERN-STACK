const API_KEY = "b26f91716ff7e762dc91075e1f1d5bee"
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const statusText = document.getElementById("status");
const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

const city = cityInput.value.trim();
if (!city) {
        statusText.textContent = "Please enter a city name.";
        weatherResult.hidden = true;
        return;
}
   await getWeather(city);
});

async function getWeather(city) {
    statusText.textContent = "Fetching weather data...";
    weatherResult.hidden = true;
    searchBtn.disabled = true;
    searchBtn.textContent = "Loading...";

 try {
    const params = new URLSearchParams({
        q:city,
        appid:API_KEY,
        units:"metric"
    })
    const response = await fetch(`${API_URL}?${params}`);
    if (!response.ok) {
     if (response.status === 404) {
                throw new Error("City not found. Check the spelling.");
}
     if (response.status === 401) {
                throw new Error(
                    "Invalid API key or the key is not active yet."
 );
 }
     if (response.status === 429) {
         throw new Error(
                    "Too many requests. Please try again later."
 );
}
    throw new Error(
                "Unable to fetch weather. Please try again."
  );
}
    const data = await response.json();
    console.log(data)
    cityName.textContent =
            `${data.name}, ${data.sys.country}`;
    temperature.textContent =
            `${Math.round(data.main.temp)}°C`;
    description.textContent =
            data.weather[0].description;
    weatherIcon.src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} m/s`;
    changeBackground(data.weather[0].main);
     weatherResult.hidden = false;
     statusText.textContent = "Weather updated successfully!";

    } catch (error) {
        statusText.textContent =
            error.message === "Failed to fetch"
                ? "Network error. Check your internet connection."
                : error.message;
         weatherResult.hidden = true;

    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = "Search";
}
}

function changeBackground(condition) {
    const weather = condition.toLowerCase();

    if (weather.includes("rain") || weather.includes("drizzle")) {
        document.body.style.background =
            "linear-gradient(135deg, #314755, #26a0da)";
    } else if (weather.includes("cloud")) {
        document.body.style.background =
            "linear-gradient(135deg, #757f9a, #d7dde8)";
    } else if (weather.includes("clear")) {
        document.body.style.background =
            "linear-gradient(135deg, #f6d365, #fda085)";
    } else if (weather.includes("snow")) {
        document.body.style.background =
            "linear-gradient(135deg, #83a4d4, #b6fbff)";
    } else if (weather.includes("thunderstorm")) {
        document.body.style.background =
            "linear-gradient(135deg, #232526, #414345)";
    } else {
        document.body.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";
    }
}