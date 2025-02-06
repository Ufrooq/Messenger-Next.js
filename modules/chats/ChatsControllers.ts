import { ChatsDbServices } from "./ChatsDbServices";

export class ChatsControllers {
    private static instance: ChatsControllers;
    private chatsDbServices: ChatsDbServices;

    constructor() {
        this.chatsDbServices = new ChatsDbServices();
    }

    public static getInstance() {
        if (!ChatsControllers.instance) {
            this.instance = new ChatsControllers()
        }
        return this.instance
    }


    public async getChatsCollectionInstance() {
        return this.chatsDbServices.getChatsCollectionInstance();
    }

    public async sendMessage(chatRoomId: string, senderId: string, message: string) {
        this.chatsDbServices.sendMessage(chatRoomId, senderId, message)
    }


}