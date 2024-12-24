import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutMeSection = () => {
    return (
        <div className='flex flex-row gap-4'>
            {/* <Image src='/sunglass-squirtle.jpg' width='424' height='320' alt="image of me" /> */}
            <div>
                <h1 className="text-xl">About Me</h1>
                <p className="">
                    My name is Josh, and I'm a Senior studying Computer Science at Duke. My academic journey began in Biology on a pre-medical track, but at the end of my sophomore year, I made a pivotal decision to transition to Computer Science. This shift was catalyzed by two key realizations: first, a growing awareness of the structural limitations I would face in addressing systemic healthcare inequities as a physician, and second, the discovery of my passion for elegant problem-solving through code.
                </p>
                <p>
                    What particularly draws me to software engineering is its unique combination of logical rigor and creative potential. I find deep satisfaction in crafting systematic solutions that can be scaled to impact thousands, if not millions, of users - an opportunity I'm excited to pursue in my upcoming role as a software engineer at <Link className='text-secondary' target="_blank" rel="noopener noreferrer" href="https://www.duolingo.com/">Duolingo</Link>. Beyond my professional aspirations, I derive great joy from developing custom software solutions that streamline everyday challenges, whether they're my own or those faced by my community.
                </p>
            </div>    
        </div>
    )
}

export default AboutMeSection