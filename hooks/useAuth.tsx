'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';

function useAuth() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                setUser(user);
                setIsLoading(false)
            } else {
                setUser(user);
                setIsLoading(false)
            }
        });

        return () => unsubscribe();
    }, [router]);

    return { isLoading, user };
}

export default useAuth;
