'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/Home.module.css';

export default function CTA() {
  return (
    <section className="container section">
      <motion.div 
        className={styles.ctaSection}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', opacity: 0.2 }} />
        
        <div className={styles.ctaContent}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Scale Your Business?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.8)' }}>
            Let's build something extraordinary together. Schedule a free consultation with our experts today.
          </p>
          
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Get Started Now <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
