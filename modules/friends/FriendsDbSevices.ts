import { DB_COLLECTIONS, FriendRequestStatus } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { and, collection, getDocs, or, query, where } from "firebase/firestore";
import { RequestControllers } from "../requests/Requestcontrollers";
import { ChatsControllers } from "../chats/ChatsControllers";

export class FriendsDbServices {

    private static instance: FriendsDbServices
    private friendsCollection;

    constructor() {
        this.friendsCollection = collection(database, DB_COLLECTIONS.FRIENDS)
    }


    public static getInstance() {
        if (!FriendsDbServices.instance) {
            this.instance = new FriendsDbServices()
        }
        return this.instance
    }

    public async getFriends(currentUserId: string) {
        try {
            const requesteInstance = await ChatsControllers.getInstance().getChatsCollectionInstance();
            const q = query(requesteInstance,
                where('participants', 'array-contains', currentUserId)
            );
            const querySnapshot = await getDocs(q);
            const friends = querySnapshot.docs.map((doc) => doc.data());
            return friends;
        } catch (error) {
            return error;
        }
    }

    // public async addFriend() {
    //     try {

    //     } catch (error) {
    //         return error
    //     }
    // }
}