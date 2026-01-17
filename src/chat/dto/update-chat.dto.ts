import { PartialType } from '@nestjs/mapped-types';
import { CreateChatDto } from './create-chat.dto';
// database testlari qo'shildi

// prettier formatlash
export class UpdateChatDto extends PartialType(CreateChatDto) {}
