import React from 'react'

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className='w-[400px]'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout