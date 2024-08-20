import { ChatBox } from '@/components/ChatBox'
import { ChatboxInput } from '@/components/ChatboxInput'
import { ChatHeader } from '@/components/ChatHeader'
import React from 'react'

const page = ({ params }: { params: any }) => {
    return (
        <div className='flex flex-col justify-between mt-8 w-full h-[90vh] '>
            <h1>Cat with {params.id}</h1>
            <ChatHeader />
            <ChatBox />
            <ChatboxInput />
        </div>
    )
}

export default page