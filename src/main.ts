import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// validation xatolari tuzatildi

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// validation xatolari tuzatildi
  app.enableCors({
// API endpoints qo'shildi
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(8000);
}

bootstrap();
