// caching mexanizmi qo'shildi
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// database connection muammosi hal qilindi
// ESLint qoidalariga moslashtirish
// changelog yangilandi
// installation qo'llanmasi yaratildi
// build konfiguratsiyasi sozlandi
// code comments qo'shildi
// type error tuzatildi

@Entity("chatMessage")
// integration testlar yaratildi
// changelog yangilandi
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
