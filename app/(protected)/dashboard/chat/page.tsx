import { ChatboxInput } from '@/components/ChatboxInput'
import { ChatHeader } from '@/components/ChatHeader'
import { ChatBox } from '@/components/ChatBox'
import React from 'react'

const Chat = () => {
    return (
        <div className='flex flex-col justify-between mt-8 w-full h-[90vh] '>
            <ChatHeader />
            <ChatBox />
            <ChatboxInput />
        </div>
    )
}

export default Chat;