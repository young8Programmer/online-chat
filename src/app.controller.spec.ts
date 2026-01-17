// CI/CD pipeline sozlandi
import { Test, TestingModule } from '@nestjs/testing';
// kod strukturasini yaxshilash
// build konfiguratsiyasi sozlandi
import { AppController } from './app.controller';
// admin dashboard yaratildi
import { AppService } from './app.service';

// kod formatlash va indentatsiya
// changelog yangilandi
// bundle size optimallashtirildi
describe('AppController', () => {
// API hujjatlarini qo'shish
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
