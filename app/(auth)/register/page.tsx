"use client"
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UserControllers } from '@/modules/user/UserControllers'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passowrd, setPassowrd] = useState('');
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);




    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files || e.target.files.length === 0) return;
        setIsUploading(true);
        try {
            const uploadedImageUrl = await UserControllers.getInstance().uploadImage(e.target.files[0]);
            setUploadedImage(uploadedImageUrl);
            setIsUploading(false);
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsUploading(false);
        }
    }


    async function handleSubmit(e: any) {
        e.preventDefault();
        if (name === '' || email === '' || passowrd === '') {
            toast.error("Please fill the required fields !")
            return
        }
        setIsLoading(true);
        try {

        } catch (error: any) {
            console.log(error)
            toast.error(error);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Create your account</CardTitle>
                    <CardDescription>
                        Enter your credentials below or continue with google
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-6">
                        <Button variant="outline" className='text-red-500 border-red-500 hover:bg-red-100 hover:text-red-500'>
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
                    <div className="grid gap-2">
                        <div className='flex items-center gap-4'>
                            {!uploadedImage ?
                                <>
                                    <Label htmlFor="file-zone" className='p-4 border-2 hover:border-slate-400 rounded-xl w-32 h-28 flex justify-center items-center cursor-pointer transition'>
                                        {!isUploading ?
                                            <>
                                                <Image src="/profile.svg" alt='img' width={40} height={40} className='opacity-40' />
                                                <Input onChange={handleUpload} size={10000} type='file' id="file-zone" className='hidden' />
                                            </>
                                            :
                                            <Loader />
                                        }
                                    </Label>
                                </>
                                :
                                <div className='w-32 h-28 border-2 border-slate-400 rounded-xl overflow-hidden'>
                                    <img
                                        className='w-full h-full object-cover'
                                        src={uploadedImage}
                                        alt=""
                                    />
                                </div>
                            }
                            <span className='text-slate-700 text-sm'>
                                {!isUploading && !uploadedImage && "Upload your Profile image"}
                                {isUploading && "Uplaoading...."}
                                {uploadedImage &&
                                    <div className='flex items-center gap-2'>
                                        Uploaded Successfully
                                        <Image src="/check-solid.svg" alt='img' width={20} height={20} />
                                    </div>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name:</Label>
                        <Input id="name" type="text" onChange={(e: any) => setName(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email:</Label>
                        <Input id="email" type="email" placeholder="m@example.com" onChange={(e: any) => setEmail(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password:</Label>
                        <Input id="password" type="password" onChange={(e: any) => setPassowrd(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type='submit'>
                        {isLoading ? <Loader /> : "Create account"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default Register