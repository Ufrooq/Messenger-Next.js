"use client"
import { PageLoader } from '@/components/PageLoader';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter();
    const { user, isLoading } = useAuth();
    useEffect(() => {
        if (!isLoading && user) {
            router.push('/dashboard'); // Redirect to dashboard or any other page if user is logged in
        }
    }, [isLoading, user, router]);

    if (isLoading) {
        return (
            <PageLoader />
        )
    }

    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className='w-[400px]'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout