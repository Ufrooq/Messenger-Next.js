import { ChatboxInput } from '@/components/ChatboxInput'
import { ChatHeader } from '@/components/ChatHeader'
import React from 'react'

const ChatBox = () => {
    return (
        <div className='flex flex-col justify-between mt-8 w-full h-[90vh] '>
            <ChatHeader />
            <ChatboxInput />
        </div>
    )
}

export default ChatBox