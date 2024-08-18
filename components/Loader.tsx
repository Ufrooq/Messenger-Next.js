const Loader = () => {
    return (

        <div className="flex flex-row gap-2">
            <div className={`w-[8px] h-[8px] rounded-full bg-black animate-bounce`}></div>
            <div
                className={`w-[8px] h-[8px] rounded-full bg-black animate-bounce [animation-delay:-.2s]`}
            ></div>
            <div
                className={`w-[8px] h-[8px] rounded-full bg-black animate-bounce [animation-delay:-.4s]`}
            ></div>
        </div>

    )
}

export default Loader;