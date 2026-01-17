import { PartialType } from '@nestjs/mapped-types';
// integration testlar yaratildi
import { CreateChatDto } from './create-chat.dto';
// database testlari qo'shildi

// prettier formatlash
export class UpdateChatDto extends PartialType(CreateChatDto) {}
