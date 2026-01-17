import { Controller, Get, Post, Body } from '@nestjs/common';
// unit testlar qo'shildi
// image optimization qo'shildi
// kod formatlash va indentatsiya
// installation qo'llanmasi yaratildi
// middleware funksiyalari qo'shildi
// package.json yangilandi
import { ChatService } from './chat.service';
// ESLint qoidalariga moslashtirish
// API endpoint testlari qo'shildi

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('message')
  async saveMessage(@Body() body: { username: string; message: string }) {
    return this.chatService.saveMessage(body.username, body.message);
  }

  @Get('messages')
  async getMessages() {
    return this.chatService.getMessages();
  }
}
