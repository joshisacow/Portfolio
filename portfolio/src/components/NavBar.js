import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const navigation = [
    { name: 'About Me', href: '#about-me' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#project' },
];

const NavBar = () => {
    return (
        <div className="fixed lg:absolute top-2 sm:top-4 w-full mx-auto h-16">
            <div className="flex items-center justify-center h-full">
                <div className="bg-background/60 backdrop-blur-md backdrop-brightness-95 dark:backdrop-brightness-125 rounded-full px-2 py-2 sm:px-6 lg:px-8 flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg">
                    <Link href="/">
                        <img
                            alt="Your Company"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                            className="h-6 sm:h-10 w-auto sm:px-3 sm:py-2"
                        />
                    </Link>
                    <ThemeSwitcher className='px-2 py-1 sm:px-3 sm:py-2' />
                    
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative rounded-3xl px-2 py-1 sm:px-3 sm:py-2 hover:bg-white/40 dark:hover:bg-white/10 hover:backdrop-blur-2xl hover:text-secondary transition-all duration-200 "
                        >
                            {item.name}
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default NavBar;