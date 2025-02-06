import { IRequestResponse, IUserResponse } from "@/types";
import { RequestDbServices } from "./RequestDbServices";
import { UserControllers } from "../user/UserControllers";

export class RequestControllers {
    private static instance: RequestControllers;
    private requestDbServices: RequestDbServices;

    private constructor() {
        this.requestDbServices = RequestDbServices.getInstance();
    }


    public static getInstance() {
        if (!RequestControllers.instance) {
            this.instance = new RequestControllers()
        }
        return RequestControllers.instance
    }

    public getRequestCollectionInstance() {
        return this.requestDbServices.getRequestCollectionInstance();
    }


    public async sendRequest(senderData: any, receiverEmail: string) {
        try {
            const isUserExists = await UserControllers.getInstance().checkIfUserExists(receiverEmail);
            if (!isUserExists) {
                throw new Error('User does not exist');
            }
            const reciever = ((await RequestDbServices.getInstance().getReciever(receiverEmail)).data()) as IUserResponse;
            return this.requestDbServices.sendRequest(senderData, reciever.userId);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async requestListner(currentUserId: string) {
        try {
            const requests: any = await RequestDbServices.getInstance().getRequestsByCurrentUserId(currentUserId);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    public async handleRequestAccept(requestId: string, senderId: string, currentUserId: string) {
        try {
            return await RequestDbServices.getInstance().acceptRequest(requestId, senderId, currentUserId);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    public async handleDeclineAccept(requestId: string) {
        try {
            return await RequestDbServices.getInstance().declineRequest(requestId);
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    public async handleFetchAcceptedRequests(currentUserId: string) {
        try {
            const combinedResults = await RequestDbServices.getInstance().fetchAcceptedRequests(currentUserId) as IRequestResponse[];
            const uniqueResults = combinedResults.reduce((acc: any, current: any) => {
                const x = acc.find((item: any) => item.id === current.id)
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, [])
            return uniqueResults || [];
        } catch (error) {
            console.log(error);
            return error;
        }
    }

}