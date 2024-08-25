import { DB_COLLECTIONS, FriendRequestStatus } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { addDoc, collection, CollectionReference, doc, DocumentData, getDoc, getDocs, onSnapshot, query, QuerySnapshot, Timestamp, updateDoc, where } from "firebase/firestore";
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
        return await UserDbServices.getInstance().getReciever(recieverEmail);
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

    public async getRequestsByCurrentUserId(currentUserId: string) {
        const q = query(this.requestCollection,
            where("receiverId", "==", currentUserId),
            where("status", "==", FriendRequestStatus.PENDING),
        )
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type == "added") {
                    console.log('New friend request: ', change.doc.data());
                }
            })
        })
    }

    public async acceptRequest(requestId: string) {
        const docRef = doc(this.requestCollection, requestId);
        try {
            return await updateDoc(docRef, {
                status: FriendRequestStatus.ACCEPTED
            })
        } catch (error) {
            console.log(error);
            return error;
        }
    }


    public async declineRequest(requestId: string) {
        const docRef = doc(this.requestCollection, requestId);
        try {
            return await updateDoc(docRef, {
                status: FriendRequestStatus.REJECTED
            })
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}