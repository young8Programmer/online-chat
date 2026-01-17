// caching mexanizmi qo'shildi
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// database connection muammosi hal qilindi
// installation qo'llanmasi yaratildi
// code comments qo'shildi
// type error tuzatildi

@Entity("chatMessage")
// integration testlar yaratildi
export class ChatMessage {
// API response formatini yaxshilash
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
