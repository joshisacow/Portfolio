import React from 'react'
import Link from 'next/link'

const SideBar = () => {
    return (
        <div className="flex-col sticky top-0 h-screen hidden sm:w-1/3 sm:min-w-64 lg:w-5/12 sm:flex p-10">
            <div>
                <h1>Joshua Chen</h1>
                <h2>Software Engineer</h2>
                <p>I enjoy building things that make people's lives a little bit easier</p>
            </div>
            <div className='mt-10 flex flex-col'>
                <Link href="#about-me" className='text-gray-500 hover:text-gray-200'>About Me</Link>
                <Link href="#experience" className='text-gray-500 hover:text-gray-200'>Experience</Link>
                <Link href="#project" className='text-gray-500 hover:text-gray-200'>Projects</Link>
            </div>
        </div>
    )
}

export default SideBar