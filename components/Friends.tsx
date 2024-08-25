import Link from 'next/link'
import React from 'react'

export const Friends = () => {
    return (
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
    )
}
