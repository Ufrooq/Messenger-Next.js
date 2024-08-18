"use client"
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [passowrd, setPassowrd] = useState('');




    async function handleSubmit(e: any) {
        e.preventDefault();
        if (email === '' || passowrd === '') {
            toast.error("Please fill the required fields")
            return
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Login into account</CardTitle>
                    <CardDescription>
                        Enter your credentials below or continue with google
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-6">
                        <Button variant="outline" className='text-red-500 border-red-500 hover:bg-red-100 hover:text-red-500'>
                            {isLoading ?
                                <Loader color='red-500' />
                                :
                                <>
                                    <Image src='/google.svg' alt='google' width={20} height={20} />
                                    Continue with Google
                                </>
                            }
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" onChange={(e: any) => setEmail(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" onChange={(e: any) => setPassowrd(e.target.value)} />
                    </div>

                </CardContent>
                <CardFooter>
                    <Button className="w-full" type='submit'>
                        {isLoading ? <Loader color='white' /> : "Login"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Login