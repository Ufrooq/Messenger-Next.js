import { FriendRequests } from '@/components/FriendRequests'
import React from 'react'

const Requests = () => {
    return (

        <div className='w-full flex flex-col mt-8 h-[90vh]'>
            <h1 className='text-5xl font-semibold'>Friend Requests</h1>
            <FriendRequests />
        </div>
    )
}

export default Requests;