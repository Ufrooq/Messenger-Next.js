import { FriendsDbServices } from "./FriendsDbSevices";

export class FriendsControllers {
    private static instance: FriendsControllers;
    private friendsDbServices: FriendsDbServices

    constructor() {
        this.friendsDbServices = new FriendsDbServices();
    }

    public static getInstance() {
        if (!FriendsControllers.instance) {
            this.instance = new FriendsControllers()
        }
        return this.instance
    }

    public async getFriends(currentUserId: string) {
        return this.friendsDbServices.getFriends(currentUserId)
    }
    // public async handleAddFriend() {
    //     try {
    //         await 
    //     } catch (error) {
    //         return error
    //     }
    // }
}