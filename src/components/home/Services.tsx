'use client';

import { motion } from 'framer-motion';
import { Search, Volume2, Globe, TrendingUp, Sparkles, PenTool } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const services = [
  { 
    title: 'SEO Mastery', 
    desc: 'Top rankings that drive organic traffic and qualified leads.', 
    icon: Search, 
    href: '/services/seo' 
  },
  { 
    title: 'Media Buying', 
    desc: 'Strategic ad placement for maximum ROI across all channels.', 
    icon: Volume2, 
    href: '/services/media-buying' 
  },
  { 
    title: 'Web Development', 
    desc: 'Blazing fast, secure, and scalable Next.js applications.', 
    icon: Globe, 
    href: '/services/website-development' 
  },
  { 
    title: 'Performance Marketing', 
    desc: 'Data-driven campaigns that scale revenue predictably.', 
    icon: TrendingUp, 
    href: '/services/performance-marketing' 
  },
  { 
    title: 'Branding & Design', 
    desc: 'Memorable brand identities that resonate with your audience.', 
    icon: Sparkles, 
    href: '/services/branding' 
  },
  { 
    title: 'Content Strategy', 
    desc: 'Compelling narratives that engage and convert users.', 
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Services() {
  return (
    <section className="section container">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-gradient">Our Expertise</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          We combine creativity and technology to deliver exceptional digital experiences.
        </p>
      </motion.div>

      <motion.div 
        className={styles.servicesGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className={styles.serviceCard}
          >
            <div className={styles.serviceIcon}>
              <service.icon size={28} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <Link 
              href={service.href} 
              className="mt-4 inline-block text-accent-secondary font-semibold hover:underline"
              style={{ color: 'var(--accent-secondary)' }}
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
