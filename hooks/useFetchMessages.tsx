import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, onSnapshot, getFirestore } from "firebase/firestore";
import { DB_COLLECTIONS } from "@/config/constants";
import { database } from "@/config/firebaseConfig";


export const useFetchMessages = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const messagesRef = collection(database, DB_COLLECTIONS.MESSAGES);
        const messagesQuery = query(messagesRef, orderBy("sentAt"), limit(25));


        const unsubscribe = onSnapshot(
            messagesQuery,
            (snapshot) => {
                const messagesData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMessages(messagesData);
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            }
        );

        return () => unsubscribe()
    }, []);

    return { messages, loading, error };
};
