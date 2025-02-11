"use client"
import { ChatBox } from '@/components/ChatBox'
import { ChatboxInput } from '@/components/ChatboxInput'
import { ChatHeader } from '@/components/ChatHeader'
import { PageLoader } from '@/components/PageLoader'
import useAuth from '@/hooks/useAuth'
import { useFetchMessages } from '@/hooks/useFetchMessages'
import { UserControllers } from '@/modules/user/UserControllers'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const Page = ({ params }: { params: any }) => {

    const [friendData, setfriendData] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { user, isLoading: _isloadingUser } = useAuth();
    const { messages, loading, error } = useFetchMessages();


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
        if (params.id && user) {
            const parts = params.id.split("_");
            if (parts[0] != user?.uid) {
                fetchFriend(parts[0]);
            } else {
                fetchFriend(parts[1]);
            }
        }
    }, [params, user])

    return (
        <div className='flex flex-col justify-between mt-8 w-full h-[90vh] '>
            {isLoading || _isloadingUser
                ? <PageLoader />
                :
                <React.Fragment>
                    {friendData && user ?
                        <React.Fragment>
                            <ChatHeader displayName={friendData.displayName} email={friendData.email} />
                            <React.Fragment>
                                {!loading ?
                                    messages.length > 0 ?
                                        <ChatBox userId={user.uid} messages={messages} />
                                        :
                                        <div className='w-full h-full flex justify-center items-center'>
                                            <p>Send Your first Message</p>
                                        </div>
                                    :
                                    <PageLoader />
                                }
                            </React.Fragment>
                            <ChatboxInput
                                userId={user?.uid}
                                chatRoomId={params.id}
                            />
                        </React.Fragment>
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

export default Page