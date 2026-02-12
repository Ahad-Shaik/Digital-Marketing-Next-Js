'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from '@/styles/LatestBlogs.module.css';

const blogs = [
  {
    title: 'The Future of AI in Digital Marketing',
    date: 'Oct 12, 2025',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600',
    slug: 'future-of-ai-marketing'
  },
  {
    title: 'SEO Strategies for 2026: What Changed?',
    date: 'Sep 28, 2025',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600',
    slug: 'seo-strategies-2026'
  },
  {
    title: 'Why Minimalist Design Converts Better',
    date: 'Sep 15, 2025',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1545665277-5937a59539fc?auto=format&fit=crop&q=80&w=600',
    slug: 'minimalist-design-converts'
  }
];

export default function LatestBlogs() {
  return (
    <section className="section container">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-gradient">Latest Insights</h2>
          <p className="subtitle">Expert analysis and industry trends.</p>
        </div>
        <Link href="/blogs" className="btn btn-outline">
          Read All <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/blogs/${blog.slug}`}>
              <img src={blog.image} alt={blog.title} className={styles.image} />
              <div className={styles.content}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Calendar size={14} className="text-accent-secondary" />
                  <span className={styles.date}>{blog.date}</span>
                </div>
                <h3 className={styles.title}>{blog.title}</h3>
                <span className={styles.readMore}>Read Article <ArrowRight size={16} /></span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
