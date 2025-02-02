"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useAuth from '@/hooks/useAuth';
import { RequestControllers } from '@/modules/requests/Requestcontrollers';
import React, { useState } from 'react'
import { toast } from 'sonner';

const AddFriend = () => {
    const [recieverEmail, setRecieverEmail] = useState("")
    const [isAdding, setIsAdding] = useState(false)
    const { user, currentUserData } = useAuth()


    async function handleSumbit(e: any) {
        e.preventDefault();
        if (!recieverEmail) {
            toast.info("Please enter the email of the user you want to add as a friend");
            return;
        }
        if (recieverEmail == user?.email) {
            toast.info("You can't add yourself as a friend");
            return;
        }
        setIsAdding(true)
        try {
            if (!user?.uid) return;
            const senderData = {
                senderId: user.uid,
                senderName: currentUserData?.displayName,
                senderEmail: user.email
            }
            const response = await RequestControllers.getInstance().sendRequest(senderData, recieverEmail)
            if (response) {
                setRecieverEmail("")
                toast.success("Friend request sent !");
            }
            setIsAdding(false);
        } catch (error: any) {
            setIsAdding(false)
            toast.error(error.message)
        }
    }
    return (
        <div className='mt-8 space-y-4'>
            <h1 className='text-5xl font-semibold'>Add Friend</h1>
            <div className="w-full max-w-sm items-center space-y-4">
                <p className='text-md'>Add friend by Email</p>
                <form onSubmit={handleSumbit} className='space-y-4'>
                    <Input onChange={(e: any) => setRecieverEmail(e.target.value)} type="email" placeholder="Email" />
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