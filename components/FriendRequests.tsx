import React from 'react'
import { Notification } from './Notification'
import { IRequestResponse } from '@/types'

export const FriendRequests = (props: { requests: any[] }) => {
    return (
        <div className='max-w-[46%] flex flex-col gap-4 mt-4'>
            {props.requests.map((request: any) => (
                <Notification
                    senderName={request.data().senderData.senderName}
                    senderEmail={request.data().senderData.senderEmail}
                    requestId={request?.id}
                />
            ))}
        </div>
    )
}
