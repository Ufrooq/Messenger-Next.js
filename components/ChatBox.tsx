import React from 'react'
import { Message } from './Message'

export const ChatBox = () => {
    return (
        <div className='inline-flex flex-col items-start w-full h-full p-4'>
            <Message />
        </div>
    )
}
