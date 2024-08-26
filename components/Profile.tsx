import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import Loader from './Loader'
import { User } from 'firebase/auth'
import { IUserResponse } from '@/types'


interface IProfileProps {
    user: User | null
    isLoading: boolean
    currentUserData: IUserResponse | undefined
    isLoggingOut: boolean,
    handleLogout: () => Promise<void>
}
export const Profile: React.FC<IProfileProps> = ({ user, isLoading, currentUserData, isLoggingOut, handleLogout }) => {
    return (
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
    )
}
