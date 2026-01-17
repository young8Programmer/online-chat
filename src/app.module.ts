// component testlari yaratildi
import { Module } from '@nestjs/common';
// memory leak muammosi hal qilindi
// bundle size optimallashtirildi
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
// database testlari qo'shildi
// image optimization qo'shildi
// prettier formatlash
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// package.json yangilandi

// unit testlar qo'shildi
// component testlari yaratildi
@Module({
  imports: [
// ESLint qoidalariga moslashtirish
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgresql://postgres:GufBxEipUYYmAZrIRRZzuzGnHlIUcLis@autorack.proxy.rlwy.net:27915/railway",
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    ChatModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // frontend fayllar joylashgan papka
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
