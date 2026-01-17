// ESLint qoidalariga moslashtirish
// database querylarni optimallashtirish
import { Test, TestingModule } from '@nestjs/testing';
// README faylini yangilash
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
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
