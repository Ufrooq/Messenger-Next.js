import Image from 'next/image'
import React from 'react'
import { Notification } from './Notification'

export const FriendRequests = () => {
    return (
        <div className='max-w-[46%] flex flex-col gap-4 mt-4'>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
        </div>
    )
}
