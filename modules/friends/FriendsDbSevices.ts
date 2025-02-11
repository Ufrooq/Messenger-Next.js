import { DB_COLLECTIONS, FriendRequestStatus } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { and, collection, getDocs, or, query, where } from "firebase/firestore";
import { ChatsControllers } from "../chats/ChatsControllers";
import { UserControllers } from "../user/UserControllers";

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
            const chatrooms = querySnapshot.docs.map((doc) => doc.data());
            const getChatData = async () => {
                const chatData = await Promise.all(chatrooms.map(async (room) => {
                    const friendId = room.participants[0] === currentUserId
                        ? room.participants[1]
                        : room.participants[0];

                    const friendData = (await UserControllers.getInstance().getCurrentUser(friendId)).data();
                    return {
                        chatRoomId: room.chatRoomId,
                        friendData
                    };
                }));

                return chatData;
            };
            console.log(getChatData())
            return getChatData();
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