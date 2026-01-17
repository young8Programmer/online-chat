import { PartialType } from '@nestjs/mapped-types';
import { CreateChatDto } from './create-chat.dto';

// prettier formatlash
export class UpdateChatDto extends PartialType(CreateChatDto) {}
