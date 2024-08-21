import { DB_COLLECTIONS, FriendRequestStatus } from '@/config/constants';
import { database } from '@/config/firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

function useFriendRequests(userId: string) {

    const [requests, setRequests] = useState<any[]>([]);

    useEffect(() => {
        const q = query(
            collection(database, 'friendRequests'),
            where('receiverId', '==', userId),
            where('status', '==', FriendRequestStatus.PENDING)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newRequests = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRequests(newRequests);
        });
        return () => unsubscribe();
    }, [userId]);

    return requests;

}


export default useFriendRequests;