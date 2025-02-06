"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Separator } from './ui/separator'
import { Avatar, AvatarImage } from './ui/avatar'
import useAuth from '@/hooks/useAuth'
import Loader from './Loader'
import { toast } from 'sonner'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebaseConfig'
import { useRouter } from 'next/navigation'
import { Friend } from './Friend'
import { Profile } from './Profile'
import { ModeToggle } from './ModeToggle'
import { FriendsControllers } from '@/modules/friends/FriendsControllers'
import { Loader2 } from 'lucide-react'

export const Sidebar = () => {
    const { user, isLoading, currentUserData } = useAuth();
    const router = useRouter()
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [isFriendsLoading, setIsFriendsLoading] = useState(false);
    const [friends, setFriends] = useState<any[]>([]);


    async function handleLogout() {
        setIsLoggingOut(true);
        try {
            await signOut(auth)
            setIsLoggingOut(false)
            toast.success('Logged out successfully')
            router.push("/login")
        } catch (error) {
            toast.error("error while loggingout")
        }
    }


    const fetchFriends = async (userId: string) => {
        setIsFriendsLoading(true)
        try {
            const _friends: any = await FriendsControllers.getInstance().getFriends(userId);
            setFriends(_friends);
        } catch (error) {
            toast.error("error occured while fetching friends !")
        }
        finally {
            setIsFriendsLoading(false)
        }
    }

    useEffect(() => {

        if (!isLoading && user) {
            fetchFriends(user.uid);
        }
    }, [user, isLoading])


    return (
        <div className='w-[440px] pl-6 pt-6 pe-4  border border-e-slate-200 flex flex-col'>
            <div className='max-w-[100px]'>
                {/* <ModeToggle /> */}
                <Link href='/dashboard'>
                    <Image src="/direct-message.svg" alt='direact-icon' className='rotate-45' width={72} height={72} />
                </Link>
            </div>
            <Separator className='my-4 h-[0.5px]' />
            {/* friends list  */}
            <div className='flex flex-col gap-2 mt-4'>
                <div className='p-2'>
                    <span className='text-slate-500 text-sm'>Your chats</span>
                </div>
                {isLoading || isFriendsLoading ?
                    <Loader2 className='animate-spin' />
                    :
                    <React.Fragment>
                        {
                            friends.length > 0 ?
                                <>
                                    {friends.map((friend: any, key: any) => {
                                        return (
                                            <Friend
                                                key={key}
                                                friendId={user?.uid == friend.participants[0] ? friend.participants[1] : friend.participants[0]}
                                                roomId={friend.chatRoomId}
                                            />
                                        )
                                    })}
                                </>
                                :
                                <p>No friends found !</p>
                        }
                    </React.Fragment>

                }
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <div className='p-2'>
                    <span className='text-slate-500 text-sm'>Overview</span>
                </div>
                <div className='space-y-3'>
                    <Link href="/dashboard/add-friend" className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition focus:text-blue-500 focus:bg-slate-200'>
                        <span className='border-2 border-slate-100 p-[5px] rounded-[12px]'>
                            <Image src="/user-plus-solid (1).svg" alt='direact-icon' width={24} height={24} className='opacity-65' />
                        </span>
                        Add Friend
                    </Link>
                    <Link href="/dashboard/requests" className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition focus:text-blue-500 focus:bg-slate-200'>
                        <span className='border-2 border-slate-100 p-[5px] rounded-[12px]'>
                            <Image src="/person-circle-question-solid.svg" alt='direact-icon' width={24} height={24} className='opacity-65' />
                        </span>
                        Friend Request
                        <span className='w-2 h-2 bg-blue-500 rounded-full ms-6'></span>
                    </Link>
                </div>
            </div>

            {/* profile component  */}
            <Profile
                user={user}
                isLoading={isLoading}
                currentUserData={currentUserData}
                isLoggingOut={isLoggingOut}
                handleLogout={handleLogout}
            />
        </div >
    )
}
