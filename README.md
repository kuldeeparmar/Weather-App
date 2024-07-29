# Weather App

 
Weather app  is a responsive weather application designed to provide users with accurate and up-to-date weather information. The app offers current weather conditions,  and forecasts to help users plan their day effectively.

**Features**:
- **Current Weather**: Displays current temperature, humidity, wind speed, and weather conditions for any location.
- **Weather Forecast**: Provides weather forecast, including temperature highs and lows.
- **Search Functionality**: Allows users to search for weather information by city name or zip code.
- **Geolocation Support**: Automatically detects and displays weather data for the user’s current location.

**Technologies Used**:
- **Frontend**: HTML,  CSS, Bootstrap
- **Backend**: Node.js, Express
- **APIs**: OpenWeatherMap API for real-time weather data, AccuWeather API for real-time forecast data

## Installation and Setup

Follow these instructions to set up the Weatherly app on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, typically installed with Node.js.
- **Git**: Version control system, download from [git-scm.com](https://git-scm.com/).

### Installation Steps

1. **Clone the Repository**

   Clone the project repository from GitHub to your local machine.

   ```bash
   git clone https://github.com/kuldeeparmar/Weather-App.git

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies.

   ```bash
   npm i

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   apiKey=your_OpenWeather_api_key
   forecastApiKey=your_AccuWeather_api_key


   Replace your_OpenWeather_api_key with your actual OpenWeather API key. You can obtain an API key by signing up at OpenWeather, and same for AccuWeather API key.

###  Running the Application

4. **Start the Front-end Server**

   Use the following command to start the front-end application. This will run the app at `http://localhost:3000`.

   ```bash
   node index.js

5. **Start the Sever for handle User location"**

   Run the following command to start the server, which listens for API requests on port `4000`.

   ```bash
   node server.js

   The server should be running at `http://localhost:4000` and handling User location requests from the front-end .



## Conclusion

The Weather App project is a robust and efficient solution for retrieving real-time weather data. It demonstrates effective integration between a front-end client and a back-end server, using modern web technologies and APIs.

### Key Points

- **Front-End and Back-End Setup**: The front-end server is started using `node index.js`, enabling seamless interaction with users via a user-friendly interface. The server uses the OpenWeatherMap API to provide accurate and up-to-date weather data.

- **Back-End Setup For User Location Fetching**: The back-end server is launched with `node server.js` and handles API requests efficiently. 

- **CORS Configuration**: Ensures that cross-origin requests from the front-end to the back-end are handled correctly, facilitating secure data exchange.

- **Environment Variables**: The project utilizes environment variables to manage API keys and other sensitive information, enhancing security and flexibility across different development environments.

- **Extensibility**: The app is designed with modularity in mind, making it easy to add new features or enhance existing functionality.

### Future Improvements

Potential future enhancements could include:

- Adding more detailed weather data, such as hourly forecasts and alerts.
- Implementing a more sophisticated UI design for better user engagement.
- Integrating additional APIs for expanded functionality.

Contributions, issues, and suggestions are welcome to improve the project further.

Thank you for exploring the Weather App!



