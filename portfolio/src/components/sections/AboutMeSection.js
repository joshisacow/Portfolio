import React from 'react'
import Image from 'next/image'

const AboutMeSection = () => {
    return (
        <div className='flex flex-row gap-4'>
            <Image src='/sunglass-squirtle.jpg' width='424' height='320' alt="image of me" />
            <div>
                <h1 className="text-xl">About Me</h1>
                <p className="">
                    My name is Josh and I am a Senior at Duke studying Computer Science. I started out as a Biology major on the pre-med track, but after taking a few Computer Science classes and coming into closer contact with the injustices rooted in the healthcare system, I decided to make the switch to work on projects that can help people on a larger scale. I enjoy creating tools that seek to solve the little inconveniences in my life.  
                </p>
            </div>    
        </div>
    )
}

export default AboutMeSection