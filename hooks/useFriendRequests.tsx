'use client'
import { DB_COLLECTIONS, FriendRequestStatus } from '@/config/constants';
import { database } from '@/config/firebaseConfig';
import { IRequestResponse } from '@/types';
import { collection, DocumentData, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import useAuth from './useAuth';

function useFriendRequests() {

    const [requests, setRequests] = useState<any[]>([]);
    const { user, isLoading: _isLoadingUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setIsLoading(true);
            const q = query(
                collection(database, DB_COLLECTIONS.REQUESTS),
                where('receiverId', '==', user?.uid),
                where('status', '==', FriendRequestStatus.PENDING)
            );

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const newRequests = snapshot.docs.map((doc) => doc);
                setRequests(newRequests);
                setIsLoading(false);
            }, () => {
                setIsLoading(false);
            });
            return () => unsubscribe();
        } else {
            setIsLoading(false);
        }
        return () => [];
    }, [user]);

    return { requests, isLoading, _isLoadingUser };

}


export default useFriendRequests;