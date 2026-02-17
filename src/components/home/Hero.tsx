'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Plus, TrendingUp } from 'lucide-react';
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
    badge: data?.badge || "Premier Digital Agency Since 5 Years",
    titlePart1: data?.titlePart1 || "Build Your Digital",
    titleGradient: data?.titleGradient || "Presence",
    titlePart2: data?.titlePart2 || "To Scale.",
    subtitle: data?.subtitle || "We help brands grow through data-driven marketing strategies, high-performance websites, and compelling creative design that converts visitors into customers.",
    ctaText: data?.ctaText || "Get Started",
    ctaLink: data?.ctaLink || "/contact-us",
    secondaryCtaText: data?.secondaryCtaText || "How it Works",
    mainImage: data?.mainImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    secondaryImage: data?.secondaryImage || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>

        {/* Left Column: Text Content */}
        <motion.div
          className={styles.heroLeft}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            {content.badge}
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.heroTitle}>
            {content.titlePart1} <span className="text-gradient">{content.titleGradient}</span> <br />
            {content.titlePart2}
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.heroSubtitle}>
            {content.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.heroButtons}>
            <motion.a
              href={content.ctaLink}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.ctaText} <ArrowRight size={18} className="ml-2" />
            </motion.a>

            <button
              className="btn btn-outline"
              style={{ borderRadius: '999px', padding: '0.75rem 1.5rem', fontWeight: 600 }}
            >
              {content.secondaryCtaText}
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Composition */}
        <div className={styles.heroRight}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Blob Shape */}
            <div className={styles.bgShape}></div>

            {/* Main Image */}
            <img
              src={content.mainImage}
              alt="Digital Marketer"
              className={styles.mainImage}
            />

            {/* Secondary Circular Image */}
            <motion.div
              className={styles.secondaryImageWrapper}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <img
                src={content.secondaryImage}
                alt="Teammate"
                className={styles.secondaryImage}
              />
            </motion.div>

            {/* Floating Card: Happy Client */}
            <motion.div
              className={`${styles.floatCard} ${styles.clientCard}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>580+ Happy Clients</span>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus size={14} color="#333" />
                </div>
              </div>
              <div className={styles.clientAvatars}>
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Client"
                    className={styles.avatar}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Card: Stats */}
            <motion.div
              className={`${styles.floatCard} ${styles.statsCard}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Audience Reach</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>560k</span>
                  <span style={{ fontSize: '0.75rem', color: '#22c55e', display: 'flex', alignItems: 'center' }}>
                    <TrendingUp size={12} className="mr-1" /> 12.5%
                  </span>
                </div>
                {/* Miniature Graph Representation */}
                <div style={{ height: '30px', width: '100%', marginTop: '5px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                  {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                    <div key={i} style={{ width: '100%', height: `${h}%`, background: 'var(--accent-secondary)', borderRadius: '2px', opacity: 0.7 }}></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <svg className={`${styles.decorator} ${styles.squiggle}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" style={{ top: '25%', left: '40%' }}>
              <path d="M10 50 Q 25 25, 50 50 T 90 50" />
            </svg>

            <Plus size={24} className={`${styles.decorator} ${styles.star}`} style={{ top: '10%', right: '10%', color: '#fbbf24' }} />
            <div style={{ position: 'absolute', bottom: '20%', right: '5%', width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }}></div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
