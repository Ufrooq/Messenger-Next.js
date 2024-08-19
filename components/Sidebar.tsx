import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

export const Sidebar = () => {
    return (
        <div className='w-[300px] pl-6 pt-6 pe-4 border border-e-slate-200'>
            <div className='max-w-[100px]'>
                <Link href='/'>
                    <Image src="/direct-message.svg" alt='direact-icon' className='rotate-45' width={72} height={72} />
                </Link>
            </div>
            <Separator className='my-4  h-[0.5px]' />
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
            <Separator className='my-4 h-[0.5px]' />
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
        </div>
    )
}
