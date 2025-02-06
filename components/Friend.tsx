import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';


interface FriendProps {
    friendId: string;
    roomId: string;
}
export const Friend = ({ friendId, roomId }: FriendProps) => {

    const params = useParams()
    const paramsId = params.id;
    return (
        <div className='space-y-2'>
            <Link href={`/dashboard/chat/${roomId}`} className={`w-full flex items-center gap-4 text-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-500 p-2 rounded-md transition`}>
                <p className='overflow-hidden truncate'>{roomId}</p>
            </Link>
        </div>
    )
}
