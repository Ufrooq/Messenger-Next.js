"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { ChatsControllers } from '@/modules/chats/ChatsControllers'

export const ChatboxInput = ({ userId, chatRoomId }: { userId: string, chatRoomId: string }) => {

    const [inputVal, setInputVal] = useState<string>('');
    const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);



    const handleSendMessage = async (e: any) => {
        e.preventDefault();
        if (!(chatRoomId && userId && inputVal)) return;
        setIsSendingMessage(true);
        try {
            await ChatsControllers.getInstance().sendMessage(chatRoomId, userId, inputVal)
            setInputVal("")
        } catch (error) {
            toast.error("Error while fetching messages details !")
        } finally {
            setIsSendingMessage(false);
        }
    }


    return (
        <form onSubmit={handleSendMessage} className='flex w-full mx-auto gap-4'>
            <Input
                placeholder='write your message here ...'
                value={inputVal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)}
            />
            <Button
                disabled={inputVal == '' || isSendingMessage}
                type='submit'
            >
                {isSendingMessage ? "Sending..." : "Send"}
            </Button>
        </form>
    )
}
