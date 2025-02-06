import React, { useEffect, useRef } from 'react'
import { Message } from './Message'
import { ScrollArea } from './ui/scroll-area'

export const ChatBox = ({ userId, messages }: { userId: string, messages: any[] }) => {
    const scrollToBottomRef = useRef<HTMLDivElement | null>(null)
    const scrollToBottom = () => {
        if (scrollToBottomRef.current) {
            scrollToBottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <ScrollArea className='h-[540px]'>
            <div className='inline-flex flex-col items-start w-full h-full py-4 px-10 space-y-4'>
                {messages.map((message, index) => (
                    <Message key={index} message={message} userId={userId} />
                ))}
            </div>
            <div ref={scrollToBottomRef} />
        </ScrollArea>
    )
}
