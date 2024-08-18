import { UserDbServices } from "./UserDbServices";
import { v4 } from "uuid";

export class UserControllers {
    private static instance: UserControllers;
    private userDbServices: UserDbServices;

    private constructor() {
        this.userDbServices = UserDbServices.getInstance()
    }

    public static getInstance() {
        if (!UserControllers.instance) {
            UserControllers.instance = new UserControllers();
        }
        return UserControllers.instance;
    }


    public async addUserFun(data: string) {
        try {
            // const response = UserDbServices.getInstance().addUser(data)
            console.log(data)
            // return response;
        } catch (error) {
            throw error;
        }
    }


    public async uploadImage(image: File): Promise<string> {
        try {
            const id = v4();
            const imgURL: string = await UserDbServices.getInstance().addImageInDB(image, id)
            return imgURL;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}