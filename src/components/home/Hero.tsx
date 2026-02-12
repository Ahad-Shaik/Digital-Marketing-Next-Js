'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import styles from '@/styles/Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent-primary font-semibold mb-4 tracking-wider"
          >
            MODERN DIGITAL AGENCY
          </motion.div>
          
          <h1 className={styles.heroTitle}>
            We Build <span className="text-gradient">Digital</span> <br />
            Experiences That <span style={{ color: 'var(--accent-secondary)' }}>Scale.</span>
          </h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Award-winning agency specializing in high-performance websites, 
            SEO mastery, and data-driven marketing strategies that convert.
          </motion.p>
          
          <motion.div 
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a 
              href="/contact-us" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Project <ArrowRight size={18} className="ml-2" />
            </motion.a>
            
            <motion.a 
              href="/case-studies" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={18} className="mr-2" /> View Our Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div 
        className="bg-gradient-glow" 
        style={{ top: '20%', right: '-10%', width: '600px', height: '600px', filter: 'blur(80px)' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}
