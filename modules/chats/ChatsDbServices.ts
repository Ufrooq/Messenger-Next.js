import { DB_COLLECTIONS } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { addDoc, collection, doc, limit, orderBy, query, Timestamp } from "firebase/firestore";

export class ChatsDbServices {

    private static instance: ChatsDbServices

    private chatsCollection;
    private messagesCollection;

    constructor() {
        this.chatsCollection = collection(database, DB_COLLECTIONS.CHAT_ROOMS)
        this.messagesCollection = collection(database, DB_COLLECTIONS.MESSAGES)
    }


    public async getChatsCollectionInstance() {
        return this.chatsCollection;
    }



    public static getInstance() {
        if (!ChatsDbServices.instance) {
            this.instance = new ChatsDbServices()
        }
        return this.instance
    }
    public async sendMessage(chatRoomId: string, senderId: string, message: string) {
        await addDoc(this.messagesCollection, {
            senderId,
            chatRoomId,
            message,
            sentAt: Timestamp.now()
        });
    };



}