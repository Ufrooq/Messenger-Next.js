import { auth, database, fireStorage } from "@/config/firebaseConfig";
import { addDoc, collection, CollectionReference, DocumentData, getDocs, query, QuerySnapshot, where } from "firebase/firestore";
import { DB_COLLECTIONS } from "../../config/constants";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential } from "firebase/auth";

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
            const userCredentials: UserCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const userId = userCredentials.user.uid;
            return await addDoc(this.userColllection, {
                userId: userId,
                displayName: data.displayName,
                email: data.email,
                photoURL: data.photoURL
            });
        } catch (error) {
            throw error;
        }
    }

    public async getCurrentUser(uid: string) {
        try {
            const q = query(this.userColllection, where('userId', '==', uid));
            const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
            return querySnapshot.docs[0];
        } catch (error) {
            throw error
        }
    }
    public async getReciever(recieverEmail: string) {
        const q = query(this.userColllection, where('email', '==', recieverEmail));
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
        return querySnapshot.docs[0];
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