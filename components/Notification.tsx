import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export const Notification = () => {
    return (
        <div className='h-[70px] p-4 rounded-xl border border-blue-500 bg-blue-50 flex items-center gap-4'>
            <Image src="/bell-solid.svg" alt='direact-icon' width={24} height={24} />
            <p><span className='font-semibold'>Umar@12gmail.com </span>requested you</p>
            <Button >Accept</Button>
            <Button variant="outline">Decline</Button>
        </div>
    )
}
