// database testlari qo'shildi
// API endpoint testlari qo'shildi
// database querylarni optimallashtirish
// validation xatolari tuzatildi
// database querylarni optimallashtirish
// database querylarni optimallashtirish
import { Test, TestingModule } from '@nestjs/testing';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
// validation xatolari tuzatildi
// database connection muammosi hal qilindi

describe('ChatController', () => {
// database querylarni optimallashtirish
  let controller: ChatController;
// routing muammosi hal qilindi

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatController],
      providers: [ChatService],
    }).compile();

    controller = module.get<ChatController>(ChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
