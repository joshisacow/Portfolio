import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='flex min-h-screen h-screen'>
            <div className="flex flex-col m-auto w-11/12 sm:w-2/3 text-center place-items-center gap-2 lg:gap-3">
                <Image src='/memoji.png' width={200} height={200} className='rounded-3xl bg-background2 p-2' alt='memoji of me' />
                <h1 className='big-header font-bold'>Hi, I'm Josh.</h1>
                <h2 className="big-header font-bold text-secondary">I'm a Software Engineer.</h2>
                <p className="text-lg sm:text-xl lg:text-2xl">I enjoy building things that make people's lives a little bit easier.</p>
            </div>
        </div>
    )
}

export default HeroSection