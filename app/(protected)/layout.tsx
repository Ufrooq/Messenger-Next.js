import { Sidebar } from '@/components/Sidebar';
import React from 'react'

const ProtectedLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-full h-[100vh] flex'>
            <Sidebar />
            {children}
        </div>
    )
}

export default ProtectedLayout