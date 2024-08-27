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
}