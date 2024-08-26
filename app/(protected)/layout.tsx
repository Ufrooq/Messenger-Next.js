"use client"
import { PageLoader } from '@/components/PageLoader';
import { Sidebar } from '@/components/Sidebar';
import useAuth from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

const ProtectedLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const { user, isLoading } = useAuth()
    useEffect(() => {
        if (!user && !isLoading) {
            redirect('/login')
        }
    }, [user])

    return (
        <>
            {isLoading ?
                <PageLoader />
                :
                <div className='w-full h-[100vh] flex gap-4'>
                    <Sidebar />
                    <div className='w-full h-full flex justify-start p-4'>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default ProtectedLayout