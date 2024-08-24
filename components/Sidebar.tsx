"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Separator } from './ui/separator'
import { Avatar, AvatarImage } from './ui/avatar'
import useAuth from '@/hooks/useAuth'
import Loader from './Loader'
import { toast } from 'sonner'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebaseConfig'
import { useRouter } from 'next/navigation'

export const Sidebar = () => {
    const { user, isLoading, currentUserData } = useAuth();
    const router = useRouter()
    const [isLoggingOut, setIsLoggingOut] = useState(false);
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

    return (
        <div className='w-[440px] pl-6 pt-6 pe-4  border border-e-slate-200 flex flex-col'>
            <div className='max-w-[100px]'>
                <Link href='/dashboard'>
                    <Image src="/direct-message.svg" alt='direact-icon' className='rotate-45' width={72} height={72} />
                </Link>
            </div>
            <Separator className='my-4 h-[0.5px]' />
            <div className='flex flex-col gap-2 mt-4'>
                <div className='p-2'>
                    <span className='text-slate-500 text-sm'>Your chats</span>
                </div>
                <div className='space-y-2'>
                    <Link href="/dashboard/chat/1" className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        Umar Admin
                    </Link>
                    <Link href="/dashboard/chat/2" className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        Ali Admin
                    </Link>
                    <Link href="/dashboard/chat/3" className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        Junaid Ali
                    </Link>

                </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <div className='p-2'>
                    <span className='text-slate-500 text-sm'>Overview</span>
                </div>
                <div className='space-y-3'>
                    <Link href="/dashboard/add-friend" className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition '>
                        <span className='border-2 border-slate-100 p-[5px] rounded-[12px]'>
                            <Image src="/user-plus-solid (1).svg" alt='direact-icon' width={24} height={24} className='opacity-65' />
                        </span>
                        Add Friend
                    </Link>
                    <Link href="/dashboard/requests" className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        <span className='border-2 border-slate-100 p-[5px] rounded-[12px]'>
                            <Image src="/person-circle-question-solid.svg" alt='direact-icon' width={24} height={24} className='opacity-65' />
                        </span>
                        Friend Request
                    </Link>
                </div>
            </div>
            <div className="flex min-h-[70px] justify-center items-center space-x-4 rounded-lg px-3 py-2 bg-slate-200 mt-auto mb-4">
                {isLoading || isLoggingOut ?
                    <Loader />
                    :
                    <>
                        <Avatar className='bg-black rounded-full w-10 h-10 overflow-hidden'>
                            <AvatarImage className='h-full' src={user?.photoURL || currentUserData?.photoURL} />
                        </Avatar>
                        <div className='cursor-pointer'>
                            <p className="text-md font-bold text-slate-700 leading-none">{user?.displayName || currentUserData?.displayName}</p>
                            <p className="text-sm text-slate-600">{user?.email || currentUserData?.email}</p>
                        </div>
                        <button onClick={handleLogout} className='pl-4'>
                            <Image
                                src="/right-from-bracket-solid.svg"
                                alt='direact-icon'
                                width={24} height={24}
                                className='opacity-85 cursor-pointer'
                            />
                        </button>
                    </>
                }
            </div>
        </div >
    )
}
