'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import { UserControllers } from '@/modules/user/UserControllers';

function useAuth() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentUserData, setCurrentUserData] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setUser(user);
                setIsLoading(false)
            } else {
                try {
                    const currentUser = (await UserControllers.getInstance().getCurrentUser(user.uid)).data();
                    setCurrentUserData(currentUser);
                    setUser(user);
                    setIsLoading(false)
                } catch (error) {
                    console.log(error);
                    setCurrentUserData(null);
                }
            }
        });

        return () => unsubscribe();
    }, [router]);

    return { isLoading, user, currentUserData };
}

export default useAuth;
