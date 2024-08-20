import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export const ChatboxInput = () => {
    return (
        <div className='flex mx-auto gap-4 w-[80%]'>
            <Input />
            <Button>Send</Button>
        </div>
    )
}
