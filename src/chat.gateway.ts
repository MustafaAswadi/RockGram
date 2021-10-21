import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway(80,{namespace:'chat'})
export class ChatGateway {
    @WebSocketServer()
    server;
    @SubscribeMessage('message')
    handleMeesage(@MessageBody() message: string ): void {
        this.server.emit('message', message);
    }
}