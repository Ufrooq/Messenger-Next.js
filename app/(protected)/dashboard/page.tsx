import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Dashboard = () => {

    return (
        <main className='w-full h-full'>
            <div className='mt-8 space-y-4'>
                <h1 className='text-5xl font-bold'>Recent Chats</h1>
                <p className='text-slate-600'>Nothing to show here...</p>
            </div>
            {/* <Tabs defaultValue="personal-info" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                <TabsContent value="personal-info">Make changes to your account here.</TabsContent>
                <TabsContent value="preferences">Change your password here.</TabsContent>
                <TabsContent value="activity">Change your password here.</TabsContent>
            </Tabs> */}
        </main>
    )
}

export default Dashboard