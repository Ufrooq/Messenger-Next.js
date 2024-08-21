import { Sidebar } from '@/components/Sidebar';
import React from 'react'

const ProtectedLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-full h-[100vh] flex gap-4'>
            <Sidebar />
            <div className='w-full h-full flex justify-start p-4'>
                {children}
            </div>
        </div>
    )
}

export default ProtectedLayout