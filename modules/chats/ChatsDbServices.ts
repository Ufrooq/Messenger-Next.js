import { DB_COLLECTIONS } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { addDoc, collection, doc } from "firebase/firestore";

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
        const chatRoomRef = doc(this.chatsCollection, chatRoomId);
        const messagesCollectionRef = collection(chatRoomRef, DB_COLLECTIONS.MESSAGES);
        await addDoc(messagesCollectionRef, {
            senderId,
            message,
            timestamp: Date,
        });
    };

}