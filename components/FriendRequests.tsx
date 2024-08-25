import Image from 'next/image'
import React from 'react'
import { Notification } from './Notification'
import { IRequestResponse } from '@/types'

export const FriendRequests = (props: { requests: IRequestResponse[] }) => {
    return (
        <div className='max-w-[46%] flex flex-col gap-4 mt-4'>
            {props.requests.map((request: IRequestResponse) => (
                <Notification senderId={request.senderId} />
            ))}

        </div>
    )
}
