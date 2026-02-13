'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/ThreeDCard';
import styles from '@/styles/Expertise.module.css';

const expertiseData = [
    {
        title: 'Modern Web Apps',
        description: 'We build scalable, high-performance web applications using the latest technologies like Next.js and React.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
        link: '/services/website-development',
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven strategies to boost your online presence and drive meaningful engagement and conversions.',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop',
        link: '/services/marketing',
    },
    {
        title: 'Brand Identity',
        description: 'Create a memorable brand that resonates with your audience through stunning design and storytelling.',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop',
        link: '/services/branding',
    },
];

export default function Expertise() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className="text-gradient">Our Expertise</h2>
                    <p>Cutting-edge solutions tailored to elevate your business in the digital landscape.</p>
                </div>

                <div className={styles.grid}>
                    {expertiseData.map((item, index) => (
                        <CardContainer key={index} className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className={styles.cardTitle}
                                >
                                    {item.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className={styles.cardDesc}
                                >
                                    {item.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={item.image}
                                        height={1000}
                                        width={1000}
                                        className={styles.cardImage}
                                        alt={item.title}
                                    />
                                </CardItem>
                                <div className={styles.cardAction}>
                                    <CardItem
                                        translateZ={20}
                                        as="a"
                                        href={item.link}
                                        className={styles.learnMore}
                                    >
                                        Learn More →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className={styles.actionBtn}
                                    >
                                        Get Started
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}
