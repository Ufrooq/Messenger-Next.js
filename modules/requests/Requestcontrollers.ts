import { IUserResponse } from "@/types";
import { RequestDbServices } from "./RequestDbServices";

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

    public async sendRequest(senderId: string, receiverEmail: string) {
        try {
            const reciever = ((await RequestDbServices.getInstance().getReciever(receiverEmail)).data()) as IUserResponse;
            return this.requestDbServices.sendRequest(senderId, reciever.userId);
        } catch (error) {
            console.log(error)
            return error;
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

    public async handleRequestAccept(requestId: string) {
        try {
            return await RequestDbServices.getInstance().acceptRequest(requestId);
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




}