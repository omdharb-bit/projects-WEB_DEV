document.addEventListener('DOMContentLoaded', () => {
const cityInput = document.getElementById("city-input")
const getWeatherBtn = document.getElementById("get-weather-btn")
const weatherInfo = document.getElementById("weather-info")
const cityNameDisplay = document.getElementById("city-name")
const tempratureDisplay = document.getElementById("temprature")
const descriptionDispaly = document.getElementById("description")
  const errorMessage = document.getElementById("error-message")
  
 const API_KEY = "4f7dd6c3eb4e83eb30a80a1da0a2ec01"; //env variable

   getWeatherBtn.addEventListener('click', async() => {
  const city= cityInput.value.trim()
     if (!city) return
     
     // itnmay throw an error
     // server/database is also iin another continent
     
     try {
     const weatherData = await fetchWeatherData(city)
     displayWearther(weatherData)
     } catch (error) {
       showError()
     }
     
     
  })
  
  async function fetchWeatherData(city) {
  //gets the data
  }
  
  function displayWearther(weatherData) {
    //display
  }
  
  function showError() {
  weatherInfo.classList.add('hidden')
  errorMessage.classList.remove('hidden')
  }
  
})