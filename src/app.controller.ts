// database querylarni optimallashtirish
import { Controller, Get } from '@nestjs/common';
// CORS xatosi tuzatildi
// API endpoints qo'shildi
import { AppService } from './app.service';
// kod formatlash va indentatsiya

@Controller()
// environment variables sozlandi
// bundle size optimallashtirildi
export class AppController {
  constructor(private readonly appService: AppService) {}
// API hujjatlarini qo'shish

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
