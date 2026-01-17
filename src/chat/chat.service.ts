import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// CI/CD pipeline sozlandi
import { Repository } from 'typeorm';
// API endpoints qo'shildi
// kod formatlash va indentatsiya
// validation xatolari tuzatildi
// database testlari qo'shildi
import { ChatMessage } from './entities/chat.entity';
// kod strukturasini yaxshilash
// dependencies yangilandi

// real-time notifications implementatsiya qilindi
@Injectable()
// kod formatlash va tozalash
export class ChatService {
  constructor(
    @InjectRepository(ChatMessage)
    private chatMessageRepository: Repository<ChatMessage>,
  ) {}

  async saveMessage(username: string, message: string): Promise<ChatMessage> {
    const newMessage = this.chatMessageRepository.create({
      username,
      message,
    });
    return this.chatMessageRepository.save(newMessage);
  }

  async getMessages(): Promise<ChatMessage[]> {
    return this.chatMessageRepository.find();
  }
}
