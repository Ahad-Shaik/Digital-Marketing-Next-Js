'use client';

import React from 'react';
import styles from '@/styles/Expertise.module.css';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Search,
    Share2,
    MousePointerClick,
    FileText,
    Monitor,
    Smartphone,
    LayoutGrid // Default fallback icon
} from 'lucide-react';

// Icon mapping for dynamic rendering
const ICON_MAP: Record<string, React.ElementType> = {
    'Search': Search,
    'Share2': Share2,
    'MousePointerClick': MousePointerClick,
    'FileText': FileText,
    'Monitor': Monitor,
    'Smartphone': Smartphone,
    'LayoutGrid': LayoutGrid
};

const defaultItems = [
    {
        id: 'seo',
        title: 'SEO & Optimization',
        description: 'Dominate search rankings with data-backed strategies that drive organic traffic and qualified leads to your business.',
        icon: 'Search',
        link: '/services/seo',
    },
    {
        id: 'social',
        title: 'Social Media',
        description: 'Build a loyal community and boost brand awareness with creative, high-engagement campaigns across platforms.',
        icon: 'Share2',
        link: '/services/social-media',
    },
    {
        id: 'ppc',
        title: 'PPC & Performance',
        description: 'Maximize your ROI with precision-targeted advertisements on Google, Meta, and LinkedIn. Pay only for results.',
        icon: 'MousePointerClick',
        link: '/services/ppc',
    },
    {
        id: 'content',
        title: 'Content Strategy',
        description: 'Engage your audience with compelling storytelling and value-driven content that establishes your authority.',
        icon: 'FileText',
        link: '/services/content',
    },
    {
        id: 'web',
        title: 'Web Experiences',
        description: 'Create stunning, high-performance websites that not only look good but convert visitors into loyal customers.',
        icon: 'Monitor',
        link: '/services/web',
    },
    {
        id: 'mobile',
        title: 'Mobile Advertising',
        description: 'Reach your audience on their most personal devices with optimized mobile ad campaigns and app marketing.',
        icon: 'Smartphone',
        link: '/services/mobile',
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

interface ExpertiseProps {
    data?: {
        title?: string;
        subtitle?: string;
        items?: Array<{
            id: string;
            title: string;
            description: string;
            icon: string;
            link: string;
        }>;
    };
}

export default function Expertise({ data }: ExpertiseProps) {
    const title = data?.title || "Our Expertise";
    const subtitle = data?.subtitle || "Strategic solutions designed to amplify your brand's voice.";
    const items = data?.items || defaultItems;

    return (
        <section className={styles.section}>
            <div className={styles.bgGlow} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-gradient">{title}</h2>
                        <p>{subtitle}</p>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {items.map((item) => {
                        const IconComponent = ICON_MAP[item.icon] || LayoutGrid;

                        return (
                            <motion.div
                                key={item.id}
                                className={styles.card}
                                variants={itemVariants}
                            >
                                <div className={styles.iconWrapper}>
                                    <IconComponent size={30} strokeWidth={1.5} />
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                                <a href={item.link} className={styles.learnMore}>
                                    Learn More <ArrowRight className={styles.arrowIcon} size={16} />
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
