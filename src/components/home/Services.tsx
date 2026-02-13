'use client';

import { motion, Variants } from 'framer-motion';
import { Search, Volume2, Globe, TrendingUp, Sparkles, PenTool, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const services = [
  {
    title: 'SEO Mastery',
    desc: 'Dominate search rankings with data-driven strategies that drive organic traffic and qualified leads to your business.',
    icon: Search,
    href: '/services/seo'
  },
  {
    title: 'Media Buying',
    desc: 'Strategic ad placement and budget management for maximum ROI across Facebook, Google, and emerging channels.',
    icon: Volume2,
    href: '/services/media-buying'
  },
  {
    title: 'Web Development',
    desc: 'Blazing fast, secure, and scalable Next.js applications custom-built to convert visitors into loyal customers.',
    icon: Globe,
    href: '/services/website-development'
  },
  {
    title: 'Performance Marketing',
    desc: 'Results-oriented campaigns that scale revenue predictably through rigorous testing and optimization.',
    icon: TrendingUp,
    href: '/services/performance-marketing'
  },
  {
    title: 'Branding & Design',
    desc: 'Crafting memorable brand identities and visual systems that resonate deeply with your target audience.',
    icon: Sparkles,
    href: '/services/branding'
  },
  {
    title: 'Content Strategy',
    desc: 'Compelling narratives and valuable content that engage users and build long-term authority in your niche.',
    icon: PenTool,
    href: '/blogs'
  },
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

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

export default function Services() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target, clientX, clientY } = e;
    const { left, top } = target.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className={`${styles.section} container`} style={{ position: 'relative' }}>
      {/* Background Decorators */}
      <div className={styles.servicesSectionBg}>
        <div className={`${styles.servicesOrb} ${styles.orb1}`} />
        <div className={`${styles.servicesOrb} ${styles.orb2}`} />
      </div>

      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.pillBadge}>
          <Sparkles size={14} />
          <span>Our Expertise</span>
        </div>
        <h2 className={styles.sectionTitle}>
          <span className="text-gradient">Services We Offer</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          We combine data-driven insights with creative excellence to deliver
          digital experiences that transform businesses.
        </p>
      </motion.div>

      <motion.div
        className={styles.servicesGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={styles.serviceCard}
            onMouseMove={handleMouseMove}
          >
            <div className={styles.serviceCardContent}>
              <div className={styles.serviceIconWrapper}>
                <service.icon size={32} className={styles.serviceIcon} />
              </div>

              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>

              <Link href={service.href} className={styles.serviceLink}>
                <span>Learn More</span>
                <ArrowRight size={16} className={styles.serviceLinkIcon} />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
