'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from '@/styles/CaseStudies.module.css';

const projects = [
  {
    title: 'Fintech Revolution',
    client: 'NeoBank',
    category: 'App Development & Branding',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Sustainable E-Commerce',
    client: 'GreenLife',
    category: 'SEO & CRO',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'AI Dashboard',
    client: 'DataFlow',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  }
];

export default function CaseStudies() {
  return (
    <section className="section container">
      <div className={styles.header}>
        <div>
          <h2 className="text-gradient">Featured Work</h2>
          <p className="subtitle">Transforming ideas into digital reality.</p>
        </div>
        <Link href="/case-studies" className="btn btn-outline">
          View All <ArrowUpRight size={18} className="ml-2" />
        </Link>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.image} 
              />
              <div className={styles.overlay}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.client}>{project.client}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
