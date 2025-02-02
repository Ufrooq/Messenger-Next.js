"use client"
import { ChatBox } from '@/components/ChatBox'
import { ChatboxInput } from '@/components/ChatboxInput'
import { ChatHeader } from '@/components/ChatHeader'
import { PageLoader } from '@/components/PageLoader'
import { UserControllers } from '@/modules/user/UserControllers'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const page = ({ params }: { params: any }) => {

    const [friendData, setfriendData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchFriend = async (friendId: string) => {
        setIsLoading(true);
        try {
            const _friendData: any = await UserControllers.getInstance().getCurrentUser(friendId);
            setfriendData(_friendData.data());
        } catch (error) {
            toast.error("Error while fetching friend details !")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (params.id) {
            fetchFriend(params.id);
        }
    }, [params])

    return (
        <div className='flex flex-col justify-between mt-8 w-full h-[90vh] '>
            {isLoading
                ? <PageLoader />
                :
                <React.Fragment>
                    {friendData ?
                        <>
                            <ChatHeader displayName={friendData.displayName} email={friendData.email} />
                            <ChatBox />
                            <ChatboxInput />
                        </>
                        :
                        <div className='flex justify-center items-center h-[90vh]'>
                            <p className='text-lg font-bold text-gray-600'>No friend found !</p>
                        </div>
                    }
                </React.Fragment>
            }
        </div>
    )
}

export default page