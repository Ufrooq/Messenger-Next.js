import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Sidebar = () => {
    return (
        <div className='w-[420px] pl-6 pt-6 pe-4  border border-e-slate-200 flex flex-col'>
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
                    <button className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        Umar Admin
                    </button>
                    <button className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        Ali Admin
                    </button>
                    <button className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        Junaid Ali
                    </button>

                </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <div className='p-2'>
                    <span className='text-slate-500 text-sm'>Overview</span>
                </div>
                <div className='space-y-3'>
                    <button className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition '>
                        <span className='border-2 border-slate-100 p-[5px] rounded-[12px]'>
                            <Image src="/user-plus-solid (1).svg" alt='direact-icon' width={24} height={24} className='opacity-65' />
                        </span>
                        Add Friend
                    </button>
                    <button className='w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition'>
                        <span className='border-2 border-slate-100 p-[5px] rounded-[12px]'>
                            <Image src="/person-circle-question-solid.svg" alt='direact-icon' width={24} height={24} className='opacity-65' />
                        </span>
                        Friend Request
                    </button>
                </div>
            </div>
            <div className="flex items-center space-x-4 rounded-lg px-3 py-2 bg-slate-200 mt-auto mb-4">
                <Avatar className="h-12 w-12">
                    <AvatarImage src="/avatars/01.png" alt="Image" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className='cursor-pointer'>
                    <p className="text-sm font-medium leading-none">Umar Farooq</p>
                    <p className="text-sm text-muted-foreground">umar12@gmail.com</p>
                </div>
                <div className='pl-4'>
                    <Image
                        src="/right-from-bracket-solid.svg"
                        alt='direact-icon'
                        width={24} height={24}
                        className='opacity-85 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
