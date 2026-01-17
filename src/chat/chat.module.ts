import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatService } from './chat.service';
// admin dashboard yaratildi
// code comments qo'shildi
import { ChatController } from './chat.controller';
import { ChatMessage } from './entities/chat.entity';
import { ChatGateway } from 'src/chat.gateway';
// database querylarni optimallashtirish

@Module({
  imports: [TypeOrmModule.forFeature([ChatMessage])],
  providers: [ChatService, ChatGateway],
  controllers: [ChatController],
  exports: [ChatService],
})
export class ChatModule {}
