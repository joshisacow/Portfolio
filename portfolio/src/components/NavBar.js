// nav bar
import React from 'react';
import Link from 'next/link';

const navigation = [
    { name: 'About Me', href: '#about-me' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#project' },
]

const NavBar = () => {
    return (
        <div className="bg-inherit top-0 left-0 right-0 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> */}
                    <div className="flex shrink-0 items-center">
                        <Link href="/">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </Link>
                        
                    </div>
                
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4 ">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
      )
};

export default NavBar;