// const getWeather = async (city) => {
//     cityname.innerHTML = city.value;
const citynameElement = document.getElementById("cityname");
const errorMessageElement = document.getElementById("error-message");
const city = document.getElementById("city"); 

const clearWeatherData = () => {
  citynameElement.innerHTML = "No Data Available";
  cloudPctElement.innerHTML = "No Data Available";
  humidityElement.innerHTML = "No Data Available";
  minTempElement.innerHTML = "No Data Available";
  // ... (clear other elements)
};

city.innerHTML = "Delhi";

const fetchCityWeather = async (city, rowIdPrefix) => {
  const cloudPctElement = document.getElementById(`${rowIdPrefix}-cloud_pct`);
  const humidityElement = document.getElementById(`${rowIdPrefix}-humidity`);
  const minTempElement = document.getElementById(`${rowIdPrefix}-min_temp`);
  const maxTempElement = document.getElementById(`${rowIdPrefix}-max_temp`);
  const windSpeedElement = document.getElementById(`${rowIdPrefix}-wind_speed`);
  const sunriseElement = document.getElementById(`${rowIdPrefix}-sunrise`);
  const sunsetElement = document.getElementById(`${rowIdPrefix}-sunset`);

  //   const url =
  //     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7a64865cbmshad4e4feb88d4837p1b8e61jsndbdb8a525f4d",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (!result || result.error) {
      console.error("City not found or undefined.");

      // Display error message on the DOM
      const errorMessageElement = document.getElementById("error-message");
      if (errorMessageElement) {
        errorMessageElement.innerHTML = "City not found or undefined.";
      }
      clearWeatherData();

      return;
    }

    console.log(result);

    const errorMessageElement = document.getElementById("error-message");
    if (errorMessageElement) {
      errorMessageElement.innerHTML = "";
    }

    // city.innerHTML = city.value;

    cloud_pct.innerHTML = result.cloud_pct || "";
    temp.innerHTML = result.temp || "";
    temp1.innerHTML = result.temp || "";
    feels_like.innerHTML = result.feels_like || "";
    humidity.innerHTML = result.humidity || "";
    min_temp.innerHTML = result.min_temp || "";
    max_temp.innerHTML = result.max_temp || "";
    wind_speed.innerHTML = result.wind_speed || "";
    wind_speed1.innerHTML = result.wind_speed || "";

    wind_degrees.innerHTML = result.wind_degrees || "";
    sunrise.innerHTML = result.sunrise || "";
    sunset.innerHTML = result.sunset || "";

    //for table
    //cloudPctElement.innerHTML = result.cloud_pct;
    humidityElement.innerHTML = result.humidity;
    minTempElement.innerHTML = result.min_temp;
    maxTempElement.innerHTML = result.max_temp;
    windSpeedElement.innerHTML = result.wind_speed;
    sunriseElement.innerHTML = result.sunrise;
    sunsetElement.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener("click", (e) => {
  if (citynameElement) {
    
    city.innerHTML = citynameElement.value;
    const cityValue = cityname.value;
    fetchCityWeather(cityValue);
    // await fetchCityWeather(cityValue, "your_row_id_prefix");

  }
  e.preventDefault();
});

  

// Call this function for each city
fetchCityWeather("shanghai", "shanghai");
fetchCityWeather("tokyo", "tokyo");
fetchCityWeather("Gujarat", "gujarat");

// Add more cities as needed
