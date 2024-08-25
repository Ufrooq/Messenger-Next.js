'use client'
import { FriendRequests } from '@/components/FriendRequests'
import useFriendRequests from '@/hooks/useFriendRequests';
import React from 'react'

const Requests = () => {
    const requests: any = useFriendRequests();
    // console.log(requests[0]?.id)
    return (
        <div className='w-full flex flex-col mt-8 h-[90vh]'>
            <h1 className='text-5xl font-semibold'>Friend Requests</h1>
            {
                requests && requests?.length > 0 ?
                    <FriendRequests requests={requests} />
                    :
                    <h1 className='text-1xl font-base'>No Friend Requests found !</h1>
            }
        </div>
    )
}

export default Requests;