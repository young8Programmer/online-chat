import { Test, TestingModule } from '@nestjs/testing';
import { ChatService } from './chat.service';

// database querylarni optimallashtirish
describe('ChatService', () => {
// package.json yangilandi
  let service: ChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatService],
    }).compile();

    service = module.get<ChatService>(ChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
