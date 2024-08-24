"use client"
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UserControllers } from '@/modules/user/UserControllers'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [passowrd, setPassowrd] = useState('');
    const router = useRouter();




    async function handleSubmit(e: any) {
        e.preventDefault();
        if (email === '' || passowrd === '') {
            toast.error("Please fill the required fields")
            return
        }
        setIsLoading(true);
        const data: ILoginData = {
            email: email,
            password: passowrd
        }
        const response = await UserControllers.getInstance().loginUser(data);
        if (response?.user) {
            setIsLoading(false);
            toast.success("Login Successfull");
            router.push("/dashboard")
        }
    }

    async function continueWithGoogle() {
        try {
            const response = await UserControllers.getInstance().continueWithGoogle();
            if (response?.user) {
                setIsLoading(false);
                toast.success("Login Successfull");
                redirect("/dashboard")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login into account</CardTitle>
                <CardDescription>
                    Enter your credentials below or continue with google
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-6">
                    <Button onClick={continueWithGoogle} variant="outline" className='text-red-500 border-red-500 hover:bg-red-100 hover:text-red-500'>
                        {isLoading ?
                            <Loader />
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
                <form onSubmit={handleSubmit} className='grid gap-4'>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" onChange={(e: any) => setEmail(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" onChange={(e: any) => setPassowrd(e.target.value)} />
                    </div>
                    <Button className="mt-2 grid gap-2" type='submit'>
                        {isLoading ? <Loader /> : "Login"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default Login