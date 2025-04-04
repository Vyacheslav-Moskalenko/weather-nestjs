import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}
  @Get(':city')
  findOne(@Param('city') city: string) {
    return this.weatherService.findOne(city);
  }
}
