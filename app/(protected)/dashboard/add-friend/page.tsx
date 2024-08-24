"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useAuth from '@/hooks/useAuth';
import { RequestControllers } from '@/modules/requests/Requestcontrollers';
import { UserControllers } from '@/modules/user/UserControllers';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import React, { useState } from 'react'
import { toast } from 'sonner';

const AddFriend = () => {
    const [recieverEmail, setRecieverEmail] = useState("")
    const [isAdding, setIsAdding] = useState(false)
    const { user } = useAuth()


    async function handleSumbit(e: any) {
        e.preventDefault();
        setIsAdding(true)
        try {
            if (!user?.uid) return;
            const senderId: string = (await UserControllers.getInstance().getCurrentUser(user?.uid)).id;
            const response = await RequestControllers.getInstance().sendRequest(senderId, recieverEmail)
            console.log(response);
            setIsAdding(false);
            toast.success(recieverEmail);
        } catch (error) {
            setIsAdding(false)
            console.log(error)
            toast.error("Error occured")
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