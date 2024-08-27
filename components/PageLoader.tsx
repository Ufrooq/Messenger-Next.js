import React from 'react'

export const PageLoader = () => {
    return (
        <div className="text-center w-full h-[100vh] flex justify-center items-center flex-col">
            <div className="flex flex-row gap-2">
                <div className={`w-[16px] h-[16px] rounded-full bg-blue-500 animate-bounce`}></div>
                <div
                    className={`w-[16px] h-[16px] rounded-full bg-blue-700 animate-bounce [animation-delay:-.1s]`}
                ></div>
                <div
                    className={`w-[16px] h-[16px] rounded-full bg-blue-500 animate-bounce [animation-delay:-.4s]`}
                ></div>
            </div>
        </div>

    )
}
