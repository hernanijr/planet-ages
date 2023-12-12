import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('calculate-age')
  calculateAge(@Query('seconds') seconds: number, @Query('type') type: string) {
    return this.appService.calculateAge(seconds, type);
  }
}
