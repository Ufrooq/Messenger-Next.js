import Image from 'next/image'
import React from 'react'

export const Sidebar = () => {
    return (
        <div className='w-[260px] pl-6 pt-6 pe-4 shadow-sm'>
            <div>
                <Image src="/direct-message.svg" alt='direact-icon' className='rotate-45' width={72} height={72} />
            </div>
            <div className='flex flex-col gap-4 mt-12'>
                <div className='p-2'>
                    <span className='text-slate-500'>Overview</span>
                </div>
                <div className='space-y-3'>
                    <button className='w-full flex items-center gap-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 p-2 rounded-md transition'>
                        <span className='border-2 border-slate-100 p-[5px] rounded-[12px]'>
                            <Image src="/user-plus-solid (1).svg" alt='direact-icon' width={24} height={24} className='opacity-65' />
                        </span>
                        Add Friend
                    </button>
                    <button className='w-full flex items-center gap-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 p-2 rounded-md transition'>
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
