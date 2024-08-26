import React from 'react'

export const PageLoader = () => {
    return (
        <div className="text-center w-full h-[100vh] flex justify-center items-center flex-col">
            <div
                className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-blue-600"
            ></div>
            <h2 className="text-zinc-500 dark:text-white mt-4 text-sm">Loading...</h2>
        </div>

    )
}
