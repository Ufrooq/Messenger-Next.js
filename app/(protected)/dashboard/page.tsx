import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Dashboard = () => {

    return (
        <main className='w-full'>
            <div className='mt-8 space-y-4'>
                <h1 className='text-5xl font-bold'>Recent Chats</h1>
                <p className='text-slate-600'>Nothing to show here...</p>
            </div>
        </main>
    )
}

export default Dashboard;