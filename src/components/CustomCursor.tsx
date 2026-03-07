'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from '@/styles/CustomCursor.module.css';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse coordinates using Motion Values for performance (avoids re-renders)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring physics for the outer ring
    const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Detect mobile/touch devices
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches);
        };
        checkMobile();

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        const handleInteractiveHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleInteractiveHover);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleInteractiveHover);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    if (isMobile) return null;

    return (
        <div className={styles.cursorContainer} style={{ opacity: isVisible ? 1 : 0 }}>
            {/* Main Precision Dot */}
            <motion.div
                className={styles.dot}
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
            />

            {/* Smooth Trailing Ring */}
            <motion.div
                className={styles.ring}
                style={{
                    x: springX,
                    y: springY,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(255, 107, 0, 0.15)' : 'rgba(255, 255, 255, 0)',
                    borderColor: isHovering ? 'rgba(255, 107, 0, 0.5)' : 'rgba(255, 255, 255, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
        </div>
    );
}
