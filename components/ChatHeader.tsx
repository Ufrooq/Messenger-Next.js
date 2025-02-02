import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'



interface ChatHeaderProps {
    displayName: string;
    email: string
}

export const ChatHeader = ({
    displayName,
    email
}: ChatHeaderProps) => {
    return (
        <div className='w-full border-b-[1.5px] border-slate-300 pb-4'>
            <div className="flex items-center space-x-4">
                <Avatar className="h-14 w-14">
                    <AvatarImage src="/avatars/01.png" alt="Image" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-md font-medium leading-none">{displayName}</p>
                    <p className="text-md text-muted-foreground">{email}</p>
                </div>
            </div>
        </div>
    )
}
