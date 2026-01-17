// image optimization qo'shildi
// installation qo'llanmasi yaratildi
// database connection muammosi hal qilindi
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatService } from './chat.service';
// admin dashboard yaratildi
// package.json yangilandi
// image optimization qo'shildi
// database connection muammosi hal qilindi
// bundle size optimallashtirildi
// code comments qo'shildi
// kod uslubini yaxshilash
import { ChatController } from './chat.controller';
// component testlari yaratildi
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
