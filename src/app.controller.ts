import { Controller, Get } from '@nestjs/common';
// CORS xatosi tuzatildi
import { AppService } from './app.service';

@Controller()
// bundle size optimallashtirildi
export class AppController {
  constructor(private readonly appService: AppService) {}
// API hujjatlarini qo'shish

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
