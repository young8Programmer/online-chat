// CI/CD pipeline sozlandi
// ESLint qoidalariga moslashtirish
// build konfiguratsiyasi sozlandi
// database querylarni optimallashtirish
// CI/CD pipeline sozlandi
import { Test, TestingModule } from '@nestjs/testing';
// README faylini yangilash
// unit testlar qo'shildi
import { INestApplication } from '@nestjs/common';
// shopping cart funksiyasi qo'shildi
import * as request from 'supertest';
// real-time notifications implementatsiya qilindi
import { AppModule } from './../src/app.module';

// database testlari qo'shildi
// integration testlar yaratildi
// CI/CD pipeline sozlandi
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
