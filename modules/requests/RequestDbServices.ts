import { DB_COLLECTIONS } from "@/config/constants";
import { database } from "@/config/firebaseConfig";
import { collection } from "firebase/firestore";

export class RequestDbServices {
    private static instance: RequestDbServices;
    private requestCollection;

    private constructor() {
        this.requestCollection = collection(database, DB_COLLECTIONS.REQUESTS);
    }

    public static getInstance() {
        if (!RequestDbServices.instance) {
            RequestDbServices.instance = new RequestDbServices();
        }
        return RequestDbServices.instance;
    }

    public async sendRequest() {

    }
}