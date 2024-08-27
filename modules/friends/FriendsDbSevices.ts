import { DB_COLLECTIONS } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { collection } from "firebase/firestore";

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
}