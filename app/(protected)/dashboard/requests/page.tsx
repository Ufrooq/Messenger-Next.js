'use client'
import { FriendRequests } from '@/components/FriendRequests'
import useFriendRequests from '@/hooks/useFriendRequests';
import { RequestControllers } from '@/modules/requests/Requestcontrollers';
import { IRequestResponse } from '@/types';
import React from 'react'

const Requests = () => {
    const requests: IRequestResponse[] | [] = useFriendRequests();
    console.log(requests);
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