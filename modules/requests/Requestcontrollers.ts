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
            const reciever: any = await RequestDbServices.getInstance().getReciever(receiverEmail);
            return this.requestDbServices.sendRequest(senderId, reciever);
        } catch (error) {
            console.log(error)
            return error;
        }
    }

}