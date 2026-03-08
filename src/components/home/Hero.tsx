'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface HeroProps {
  data?: {
    badge?: string;
    titlePart1?: string;
    titleGradient?: string;
    titlePart2?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    mainImage?: string;
    secondaryImage?: string;
  };
}

export default function Hero({ data }: HeroProps) {
  // Safe defaults
  const content = {
    badge: "Elevate Your Brand With Us",
    title: "Empowering Your Success with Digital Expertise",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    ctaText: "Explore More",
    secondaryCtaText: "View All Services",
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Dots */}
      <div className={styles.dotsTop} />
      <div className={styles.dotsBottom} />

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.heroLeft}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.heroBadge}>
            <div className={styles.badgeIcon}>
              <div className={styles.badgeCircle} />
              <div className={styles.badgeLine} />
            </div>
            <span>{content.badge}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.heroMainTitle}>
            {content.title}
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.heroSubText}>
            {content.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.heroActions}>
            <Link href="/contact-us" className={styles.primaryBtn}>
              {content.ctaText} <ArrowRight size={18} />
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              {content.secondaryCtaText}
            </Link>
          </motion.div>
        </motion.div>

        <div className={styles.heroRight}>
          <div className={styles.collageGrid}>
            {/* Image Collage Shapes */}
            <motion.div
              className={`${styles.collageItem} ${styles.itemMedium}`}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" alt="Digital Strategy" />
            </motion.div>

            <motion.div
              className={`${styles.collageItem} ${styles.itemSmall}`}
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop" alt="Data Analytics" />
            </motion.div>

            {/* HIRE US Stamp */}
            <motion.div
              className={styles.stampWrapper}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className={styles.stampSvg}>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className={styles.stampText}>
                  <textPath xlinkHref="#circlePath">
                    HIRE US • HIRE US • HIRE US • HIRE US •
                  </textPath>
                </text>
              </svg>
              <div className={styles.stampInner}>
                <ArrowRight size={20} className={styles.stampArrow} />
              </div>
            </motion.div>

            {/* Sparkles */}
            <div className={styles.sparkle1} />
            <div className={styles.sparkle2} />
          </div>
        </div>
      </div>
    </section>
  );
}
