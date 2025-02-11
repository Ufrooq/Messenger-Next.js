"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Separator } from './ui/separator'
import useAuth from '@/hooks/useAuth'
import { toast } from 'sonner'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebaseConfig'
import { useRouter } from 'next/navigation'
import { Profile } from './Profile'
import { FriendsControllers } from '@/modules/friends/FriendsControllers'
import { Loader2, Plus, User } from 'lucide-react'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarImage } from './ui/avatar'



export function AppSidebar() {

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
        <Sidebar>
            <SidebarHeader>
                <div className='flex items-center gap-4'>
                    <Image src="/direct-message.svg" alt='direact-icon' className='rotate-45' width={52} height={52} />
                    <h1 className='text-xl font-bold'>Messenger</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Friends</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {isLoading || isFriendsLoading ?
                            <Loader2 className='animate-spin ms-2' />
                            :
                            <SidebarMenu>
                                {friends.length > 0 && friends.map((item, key) => (
                                    <SidebarMenuItem key={key}>
                                        <SidebarMenuButton className='h-14' asChild>
                                            <Link href={`/dashboard/chat/${item.chatRoomId}`}>
                                                <div className='flex items-center gap-4'>
                                                    <Avatar className='bg-black rounded-full w-10 h-10 overflow-hidden'>
                                                        <AvatarImage className='h-full' src={item.friendData?.photoURL} />
                                                    </Avatar>
                                                    <div className='cursor-pointer'>
                                                        <p className="text-md font-bold text-slate-700 leading-none">{item.friendData?.displayName}</p>
                                                        <p className="text-sm text-slate-600">{item.friendData?.email}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        }
                    </SidebarGroupContent>
                    <Separator className='my-4 h-[0.5px]' />
                    <SidebarGroupLabel>Overview</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={`/dashboard/add-friend`}>
                                        <Plus />
                                        <span>Add Friend</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={`/dashboard/requests`}>
                                        <User />
                                        <span>Friend Request</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className='mt-auto'>
                    <SidebarGroupContent>
                        <Profile
                            user={user}
                            isLoading={isLoading}
                            currentUserData={currentUserData}
                            isLoggingOut={isLoggingOut}
                            handleLogout={handleLogout}
                        />
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
