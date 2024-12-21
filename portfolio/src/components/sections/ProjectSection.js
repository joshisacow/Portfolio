"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fetchDB from '@/utils/db-requests'
import { FaArrowRight } from "react-icons/fa";

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchDB('projects')
            .then((data) => {
                data.sort((a, b) => a.id - b.id)
                setProjects(data.slice(0, 3));
            });
    }, []);

    return (
        <div className='mt-10'>
            ProjectSection
            {projects && projects.map((project, index) => (
                <Link key={project.id} href={project.link ?? "/"}>
                    <div className="shadow rounded-lg p-4 hover:bg-background2 flex flex-row gap-4 group">
                        {project.image_id && 
                            <Image 
                                src={'/project_photos/' + project.image_id} 
                                width={200} 
                                height={200} 
                                alt={project.name} 
                                className='rounded-md border-2 border-gray-600 group-hover:border-gray-400'
                            />}
                        <div>
                            <h2 className='font-semibold group-hover:text-secondary'>{project.name}</h2>
                            <p className="text-xs text-gray-400">{project.year}</p>
                            <p className="">{project.short_desc}</p>
                            <div className="flex flex-row flex-wrap">
                                {project.skills && project.skills.map((skill, index) => (
                                    <p key={index} className="rounded-xl p-1.5 bg-secondary text-background mr-1 text-xs">{skill}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <Link className='font-semibold group inline-flex items-center gap-1 p-2 hover:underline' href="/projects">
                View All Projects
                <span className='group-hover:translate-x-2 transform transition-transform duration-300'>
                    <FaArrowRight  />
                </span>
            </Link>
        </div>
    )
}

export default ProjectSection