# WeatherReport_WebProject
Weather App
This is a simple weather application built with HTML, CSS, and JavaScript. It uses the OpenWeatherMap API to fetch weather data for a given city and displays the temperature, humidity, and a corresponding weather icon.

Features
City Search: Users can enter the name of a city in the input field to fetch its weather data.
Temperature Display: The application displays the current temperature in Celsius for the searched city.
Humidity Display: The current humidity level for the searched city is shown.
Weather Icon: Based on the current weather condition (currently supports "Clouds" and "Clear" conditions), a relevant weather icon is displayed.
Technologies Used
HTML: Used for structuring the web page.
CSS: Used for styling the application's user interface.
JavaScript: Used for fetching data from the OpenWeatherMap API and manipulating the DOM to display the weather information.
OpenWeatherMap API: A third-party API used to retrieve weather data based on the city name.
Getting Started
To run the application locally, follow these steps:

Clone the Repository:
git clone https://github.com/your-username/weather-app.git



Open the Project:
Open the project in your preferred code editor.

Obtain an API Key:
Create an account on OpenWeatherMap and obtain an API key.

Update the API Key:
Replace the apiKey variable in the script.js file with your actual API key:

let apiKey = "your-api-key-here";



Open the Application:
Open the index.html file in a web browser.

Search for a City:
Enter the name of a city in the input field and click the "Get Weather" button.

View the Weather Data:
The application will fetch the weather data for the searched city and display the temperature, humidity, and a corresponding weather icon.

File Structure
index.html: The main HTML file that contains the structure of the application.
style.css: The CSS file that styles the application's user interface.
script.js: The JavaScript file that handles the logic and API calls for fetching and displaying weather data.
