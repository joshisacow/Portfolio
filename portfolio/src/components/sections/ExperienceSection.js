"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetchDB from '@/utils/db-requests';
import { FaArrowRight } from "react-icons/fa";

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
                    <div className="shadow rounded-lg p-4 mb-2 group hover:bg-background2 hover:-translate-y-1 hover:shadow-2xl transform transition-transform duration-300">
                        <h2 className='font-semibold group-hover:text-secondary z-20'>{experience.company} | {experience.position}</h2>
                        <p className="text-xs text-gray-400">{experience.start} - {experience.end}</p>
                        <p className="">{experience.desc}</p>
                        <div className="flex flex-row flex-wrap">
                            {experience.skills && experience.skills.map((skill, index) => (
                                <p key={index} className="rounded-xl p-1.5 bg-secondary/20 dark:bg-secondary/30 text-secondary mr-1 text-xs">{skill}</p>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
            <Link className='font-semibold group inline-flex items-center gap-1 p-2 hover:underline' href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Full Resume
                <span className='group-hover:translate-x-2 transform transition-transform duration-300'>
                    <FaArrowRight  />
                </span>
            </Link>
        </div>

    )
}

export default ExperienceSection