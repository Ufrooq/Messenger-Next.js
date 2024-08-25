'use client'
import { DB_COLLECTIONS, FriendRequestStatus } from '@/config/constants';
import { database } from '@/config/firebaseConfig';
import { IRequestResponse } from '@/types';
import { collection, DocumentData, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import useAuth from './useAuth';

function useFriendRequests() {

    const [requests, setRequests] = useState<any[]>([]);
    const { user } = useAuth();


    useEffect(() => {
        if (user) {
            const q = query(
                collection(database, DB_COLLECTIONS.REQUESTS),
                where('receiverId', '==', user?.uid),
                where('status', '==', FriendRequestStatus.PENDING)
            );

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const newRequests = snapshot.docs.map((doc) => doc);
                setRequests(newRequests);
            });
            return () => unsubscribe();
        }
        return () => [];
    }, [user]);

    return requests;

}


export default useFriendRequests;