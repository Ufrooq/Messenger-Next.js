import { DB_COLLECTIONS, FriendRequestStatus } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { addDoc, collection, CollectionReference, DocumentData, getDoc, getDocs, query, QuerySnapshot, Timestamp, where } from "firebase/firestore";
import { UserDbServices } from "../user/UserDbServices";

export class RequestDbServices {
    private static instance: RequestDbServices;
    private requestCollection: CollectionReference;

    private constructor() {
        this.requestCollection = collection(database, DB_COLLECTIONS.REQUESTS);
    }

    public static getInstance() {
        if (!RequestDbServices.instance) {
            RequestDbServices.instance = new RequestDbServices();
        }
        return RequestDbServices.instance;
    }

    public async getReciever(recieverEmail: string) {
        return (await UserDbServices.getInstance().getReciever(recieverEmail)).id;
    }

    public async sendRequest(senderId: string, receiverId: string) {
        try {
            return await addDoc(this.requestCollection, {
                senderId,
                receiverId,
                status: FriendRequestStatus.PENDING,
                sentAt: Timestamp.now(),
            })
        } catch (error) {
            console.log(error)
        }
    }
}