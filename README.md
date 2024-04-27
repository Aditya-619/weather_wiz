## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Aditya-619/weather_wiz
   ```

2. Navigate to the project directory:

   ```bash
   cd weather_wiz
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create an account on [WeatherAPI](https://openweathermap.org/api) for weather data and obtain an API key.

5. Create a `.env` file in the root directory of the project and add your API key:

   ```
   API_KEY={your-api-key}
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open the application in your browser:

   ```
   http://localhost:5173
   ```

## Technology Used:

- React.js

## Implemented Features:

- **Search Functionality**: Users can enter the name of a city to search for its current weather information.
- **Current Weather Details**: The application displays current weather details including temperature, humidity, and wind speed for the searched city.