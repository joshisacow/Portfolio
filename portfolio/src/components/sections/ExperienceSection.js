"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fetchDB from '@/utils/db-requests';

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
                    <div className="shadow rounded-lg p-4 hover:bg-gray-700">
                        <h2 className='font-medium'>{experience.company} | {experience.position}</h2>
                        <p className="text-xs text-gray-400">{experience.start} - {experience.end}</p>
                        <p className="text-gray-300">{experience.desc}</p>
                        <div className="flex flex-row flex-wrap">
                            {experience.skills && experience.skills.map((skill, index) => (
                                <p key={index} className="rounded-xl p-1.5 bg-[--secondary-color] mr-1 text-xs">{skill}</p>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
            <Link className='font-semibold' href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Full Resume</Link>
        </div>

    )
}

export default ExperienceSection