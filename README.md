# Weather Service - NestJS

This is a simple weather service built with NestJS that fetches weather data from the [OpenWeather API](https://openweathermap.org/api). It provides temperature and pressure information for a given city.

## Prerequisites

- Node.js (preferably the latest LTS version)
- A valid **OpenWeather API key** (sign up on OpenWeather if you don't have one)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Vyacheslav-Moskalenko/weather-nestjs.git
    cd weather-nestjs
    ```

2. Create a `.env` file in the root of the project and add your OpenWeather API key:
    ```env
    OPENWEATHER_API_KEY='your-api-key-here'
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the application in development mode:

```bash
npm run start:dev
```
This will start the server at http://localhost:3000.


## Example Endpoint
You can fetch weather data for any city by calling the following endpoint:

```bash
GET http://localhost:3000/weather/{city}
```
Replace {city} with the name of the city you want to get the weather for. For example:

```bash
GET http://localhost:3000/weather/Kiev
```
Response example:
```bash
{
  "temperature": 13.84,
  "pressure": 1004
}
```
