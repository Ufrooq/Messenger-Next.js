import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Message = ({ message, userId }: { message: any, userId: string }) => {
    const date = new Date(message.sentAt.seconds * 1000);
    return (
        <div className={`flex items-end gap-3 ${message.senderId == userId ? "self-end" : "self-start"}`}>
            <div className={`text-md ${message.senderId == userId ? "bg-indigo-500" : "bg-orange-500"} py-2 px-4 text-white rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px]`}>
                {message.message}
                <span className='text-[10px] ms-2'>{date.toLocaleTimeString()}</span>
            </div>
            <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="Image" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
        </div>
    )
}
