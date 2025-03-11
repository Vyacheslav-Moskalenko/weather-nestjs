import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { WeatherData } from './types/weather-data.type';
dotenv.config();

@Injectable()
export class WeatherService {
  async findOne(city: string): Promise<WeatherData> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      temperature: data.main.temp,
      pressure: data.main.pressure,
    };
  }
}
