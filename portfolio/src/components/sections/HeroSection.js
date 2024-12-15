import React from 'react'
import LinkedinIcon from '../icons/LinkedinIcon'

const HeroSection = () => {
    return (
        <div className="flex flex-col min-h-screen h-screen items-start">
            <div className="mx-auto mt-40 w-1/2">
                <h1>hi, my name is</h1>
                {/* <LinkedinIcon color='#ffffff' /> */}
                <h2 className="big-header">Joshua Chen</h2>
                <p className="text-lg">I enjoy building things that make people's lives a little bit easier</p>
            </div>
        </div>
    )
}

export default HeroSection