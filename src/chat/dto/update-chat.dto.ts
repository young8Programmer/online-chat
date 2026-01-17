import { PartialType } from '@nestjs/mapped-types';
// caching mexanizmi qo'shildi
// integration testlar yaratildi
import { CreateChatDto } from './create-chat.dto';
// database testlari qo'shildi

// user authentication qo'shildi
// API response formatini yaxshilash
// prettier formatlash
export class UpdateChatDto extends PartialType(CreateChatDto) {}
// admin dashboard yaratildi
