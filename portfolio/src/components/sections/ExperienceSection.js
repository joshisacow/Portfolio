"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetchDB from '@/utils/db-requests';
import { GoArrowUpRight } from "react-icons/go";

const ExperienceSection = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchDB('experiences')
            .then((res) => setData(res.sort((a, b) => a.id - b.id)));
    }, []);

    return (
        <div className='mt-10'>
            ExperienceSection
            {data && data.map((experience, index) => (
                <Link key={experience.id} href={experience.link ?? "/"} target="_blank" rel="noopener noreferrer">
                    <div className="shadow rounded-lg p-4 group hover:bg-[--background-2]">
                        <h2 className='font-semibold group-hover:text-[--secondary-color]'>{experience.company} | {experience.position}</h2>
                        <p className="text-xs text-gray-400">{experience.start} - {experience.end}</p>
                        <p className="text-[--foreground]">{experience.desc}</p>
                        <div className="flex flex-row flex-wrap">
                            {experience.skills && experience.skills.map((skill, index) => (
                                <p key={index} className="rounded-xl p-1.5 bg-[--secondary-color] text-[--background] mr-1 text-xs">{skill}</p>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
            <Link className='font-semibold group inline-flex items-center gap-1' href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Full Resume
                <span className='relative -bottom-0.5 -left-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-transform duration-300 text-sm'>
                    <GoArrowUpRight />
                </span>
            </Link>
        </div>

    )
}

export default ExperienceSection