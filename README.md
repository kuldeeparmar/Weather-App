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

   



