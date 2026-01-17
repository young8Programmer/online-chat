import { Server, Socket } from 'socket.io';
// README faylini yangilash
// README faylini yangilash
// caching mexanizmi qo'shildi
import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
// README faylini yangilash
// admin dashboard yaratildi
// component testlari yaratildi
// kod formatlash va tozalash
// error handling yaxshilandi
// database migrations yaratildi
import { ChatService } from './chat/chat.service';

// prettier formatlash
@WebSocketGateway({ cors: { origin: '*' } })
// type error tuzatildi
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) {}

  private server: Server;
  private users = 0;

  handleConnection(client: Socket) {
    this.users++;
    console.log(`User connected: ${client.id}`);
    this.server.emit('user-count', { count: this.users });
  }

  handleDisconnect(client: Socket) {
    this.users--;
    this.server.emit('user-count', { count: this.users });
    console.log(`User disconnected: ${client.id}`);
  }

  @SubscribeMessage('new-user')
  async handleNewUser(@MessageBody() name: string, @ConnectedSocket() socket: Socket) {
    socket.data.name = name;

    this.server.emit('user-connected', name);

    const userMessages = await this.chatService.getMessages();
    socket.emit('previous-messages', userMessages);
  }

  @SubscribeMessage('user-message')
  async handleMessage(@MessageBody() { name, text }: { name: string; text: string }, @ConnectedSocket() socket: Socket) {
    await this.chatService.saveMessage(name, text); 
    socket.broadcast.emit('user-message-send', { name, text, senderId: socket.id });
  }

  @SubscribeMessage('typing-user')
  handleTyping(@MessageBody() name: string) {
    this.server.emit('typing-user-send', name);
  }

  afterInit(server: Server) {
    this.server = server;
  }
}
