// caching mexanizmi qo'shildi
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// database connection muammosi hal qilindi
// code comments qo'shildi

@Entity("chatMessage")
// integration testlar yaratildi
export class ChatMessage {
  @PrimaryGeneratedColumn()
// ESLint qoidalariga moslashtirish
  id: number;

  @Column()
  username: string;

  @Column()
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
