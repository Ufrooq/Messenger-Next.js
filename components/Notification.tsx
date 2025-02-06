import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { RequestControllers } from '@/modules/requests/Requestcontrollers';

export const Notification = (props: { senderName: string; senderEmail: string, senderId: string, requestId: string, userId: string }) => {

    async function handleAccept() {
        RequestControllers.getInstance().handleRequestAccept(props.requestId, props.senderId, props.userId)
    }

    async function handleReject() {
        RequestControllers.getInstance().handleDeclineAccept(props.requestId)

    }
    return (
        <div className='p-4 rounded-xl border border-blue-500 bg-blue-50 flex items-start justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="/bell-solid.svg" alt='direact-icon' width={24} height={24} />
                <p><span className='font-semibold'>{props.senderName} </span>  having email address <span className='font-semibold'>{props.senderEmail}</span> requested you</p>
            </div >
            <div className='flex items-center gap-4'>
                <Button onClick={handleAccept}>Accept</Button>
                <Button onClick={handleReject} variant="outline">Decline</Button>
            </div>
        </div >
    )
}
