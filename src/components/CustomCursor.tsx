'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from '@/styles/CustomCursor.module.css';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tighter spring — ring follows quickly but still has a subtle lag
  const springConfig = { damping: 28, stiffness: 500, mass: 0.3 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);

    const onMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        !!(
          target.closest('a') ||
          target.closest('button') ||
          window.getComputedStyle(target).cursor === 'pointer'
        )
      );
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.body.addEventListener('mouseleave', onLeave);
    document.body.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.body.removeEventListener('mouseleave', onLeave);
      document.body.removeEventListener('mouseenter', onEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <div className={styles.cursorContainer} style={{ opacity: isVisible ? 1 : 0 }}>
      {/* Inner precision dot — snaps instantly */}
      <motion.div
        className={styles.dot}
        style={{ x: mouseX, y: mouseY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring — follows with spring lag */}
      <motion.div
        className={styles.ring}
        style={{ x: springX, y: springY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(163, 230, 53, 0.9)' : 'rgba(18, 42, 32, 0.4)',
          backgroundColor: isHovering ? 'rgba(163, 230, 53, 0.12)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </div>
  );
}
