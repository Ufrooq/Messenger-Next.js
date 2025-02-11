import React from 'react'
import { Notification } from './Notification'
import useAuth from '@/hooks/useAuth'

export const FriendRequests = (props: { requests: any[] }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className='max-w-[46%] flex flex-col gap-4 mt-4'>
            {user && props.requests.map((request: any, key: any) => (
                <Notification
                    key={key}
                    userId={user?.uid}
                    senderName={request.data().senderData.senderName}
                    senderEmail={request.data().senderData.senderEmail}
                    senderId={request.data().senderData.senderId}
                    requestId={request?.id}
                />
            ))}
        </div>
    )
}
