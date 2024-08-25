import { FriendRequestStatus } from "@/config/constants";
import { Timestamp } from "firebase/firestore";

export interface IUserDefault {
    displayName: string,
    email: string,
    password?: string,
    photoURL?: string | null
}
export interface IUser {
    displayName: string,
    email: string,
    password: string,
    photoURL: string | null;
}
export interface IUserResponse {
    id?: string
    displayName: string,
    email: string,
    photoURL?: string
    userId: string
}

export interface ILoginData {
    email: string,
    password: string
}

export interface IMessage {
    userId: string,
    text: string,
    sentAt: Timestamp,
}

export interface IRequestResponse {
    id: string,
    receiverId: string,
    senderId: string,
    sentAt: Timestamp,
    status: FriendRequestStatus
}