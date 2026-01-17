// CI/CD pipeline sozlandi
// kod uslubini yaxshilash
import { Test, TestingModule } from '@nestjs/testing';
// kod strukturasini yaxshilash
// build konfiguratsiyasi sozlandi
import { AppController } from './app.controller';
// middleware funksiyalari qo'shildi
// admin dashboard yaratildi
import { AppService } from './app.service';
// code comments qo'shildi

// kod formatlash va indentatsiya
// type error tuzatildi
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
