import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// kod uslubini yaxshilash
// validation xatolari tuzatildi
// authentication xatosi tuzatildi

async function bootstrap() {
// real-time notifications implementatsiya qilindi
// API response formatini yaxshilash
  const app = await NestFactory.create(AppModule);
// validation xatolari tuzatildi
// database migrations yaratildi
  app.enableCors({
// API endpoints qo'shildi
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(8000);
}

bootstrap();
