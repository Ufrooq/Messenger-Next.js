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

    public async sendRequest() {
        try {
            this.requestDbServices.sendRequest()
        } catch (error) {
            console.log(error)
            return error;
        }
    }

}