import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Message = () => {
    return (
        <div className='flex items-end gap-3'>
            <div className='text-md bg-blue-600 py-3 px-4 text-white rounded-tl-lg rounded-bl-lg rounded-tr-lg'>
                Hello Dude
                <span className='text-[10px] ms-2 text-slate-300'>16:55</span>
            </div>
            <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="Image" />
                <AvatarFallback>M</AvatarFallback>
            </Avatar>
        </div>
    )
}
