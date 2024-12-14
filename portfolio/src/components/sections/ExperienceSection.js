"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import fetchDB from '@/services/db-requests';

const ExperienceSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(fetchDB('experiences'));
    }, []);

    return (
        <div>
            ExperienceSection
            <Image src='/squirtle-chomp.jpg' width='424' height='320' alt="image of me" />
        </div>

    )
}

export default ExperienceSection