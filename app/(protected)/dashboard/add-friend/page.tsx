"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { toast } from 'sonner';

const AddFriend = () => {
    const [email, setEmail] = useState("")
    const [isAdding, setIsAdding] = useState(false)


    async function handleSumbit(e: any) {
        e.preventDefault();
        setIsAdding(true)
        try {
            setTimeout(() => {
                setIsAdding(false);
                toast.success(email);
            }, 3000)
        } catch (error) {
            setIsAdding(false)
            console.log(error)
            toast.error("Error occured")
        }
    }
    return (
        <div className='mt-8 space-y-4'>
            <h1 className='text-5xl font-bold'>Add Friend</h1>
            <div className="w-full max-w-sm items-center space-y-4">
                <h1>Add friend by Email</h1>
                <form onSubmit={handleSumbit} className='space-y-4'>
                    <Input onChange={(e: any) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    <Button type="submit">
                        {isAdding ?
                            "Adding..." :
                            "Add +"
                        }
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddFriend;