"use client"
import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/ModeToggle';
import { PageLoader } from '@/components/PageLoader';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import useAuth from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

const ProtectedLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const { user, isLoading } = useAuth();
    useEffect(() => {
        if (!user && !isLoading) {
            redirect('/login')
        }
    }, [user, isLoading])

    return (
        <React.Fragment>
            {isLoading ?
                <PageLoader />
                :
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarTrigger className='mx-4 mt-2' />
                    <main className='px-6 w-full relative'>
                        {children}
                        <div className='absolute top-4 right-4'>
                            <ModeToggle />
                        </div>
                    </main>
                </SidebarProvider>
            }
        </React.Fragment>

    )
}

export default ProtectedLayout