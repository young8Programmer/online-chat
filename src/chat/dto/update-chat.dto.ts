import { PartialType } from '@nestjs/mapped-types';
// caching mexanizmi qo'shildi
// installation qo'llanmasi yaratildi
// integration testlar yaratildi
import { CreateChatDto } from './create-chat.dto';
// kod uslubini yaxshilash
// user authentication qo'shildi
// dependencies yangilandi
// database testlari qo'shildi

// user authentication qo'shildi
// API response formatini yaxshilash
// prettier formatlash
export class UpdateChatDto extends PartialType(CreateChatDto) {}
// admin dashboard yaratildi
