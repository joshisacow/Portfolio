import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className="flex flex-col min-h-screen h-screen">
            <div className="mx-auto w-2/3 mt-40">
                <Image src='/memoji.png' width={200} height={200} className='rounded-3xl dark:bg-[var(--background-2)] p-2' alt='memoji of me' />
                <h1 className='big-header font-bold'>Hi. I'm Josh.</h1>
                <h2 className="big-header font-bold text-gray-400 dark:text-[var(--secondary-color)]">I'm a Software Engineer.</h2>
                <p className="text-2xl mt-2">I enjoy building things that make people's lives a little bit easier.</p>
            </div>
        </div>
    )
}

export default HeroSection