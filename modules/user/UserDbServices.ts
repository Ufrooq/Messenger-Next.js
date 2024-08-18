import { database, fireStorage } from "@/config/firebaseConfig";
import { addDoc, collection, CollectionReference } from "firebase/firestore";
import { DB_COLLECTIONS } from "../../config/constants";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export class UserDbServices {
    private static instance: UserDbServices;
    private userColllection;

    private constructor() {
        this.userColllection = collection(database, DB_COLLECTIONS.USER)
    }

    public static getInstance() {
        if (!UserDbServices.instance) {
            UserDbServices.instance = new UserDbServices();
        }
        return UserDbServices.instance;
    }


    public async addUser(data: IUser) {
        try {
            return await addDoc(this.userColllection, data);
        } catch (error) {
            throw error;
        }
    }

    public async addImageInDB(image: File, id: string): Promise<string> {
        try {
            const storageRef = ref(fireStorage, `userProfiles/${image.name + id}`)
            await uploadBytes(storageRef, image);
            const url = await getDownloadURL(ref(storageRef));
            console.log(url)
            return url;
        } catch (error) {
            throw error;
        }
    }
}