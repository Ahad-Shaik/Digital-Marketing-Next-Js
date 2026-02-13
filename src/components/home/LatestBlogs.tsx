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
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=600',
    slug: 'minimalist-design-converts'
  }
];

export default function LatestBlogs() {
  return (
    <section className={styles.section}>
      {/* Background Decorators */}
      <div className={styles.bgDecor}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      <div className="container relative z-10">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.pillBadge}>
            <Calendar size={14} />
            <span>Latest Insights</span>
          </div>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">Trends & Analysis</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Stay ahead of the curve with our expert analysis on digital marketing, design, and technology.
          </p>
        </motion.div>

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
              <Link href={`/blogs/${blog.slug}`} className="h-full flex flex-col">
                <div className={styles.imageWrapper}>
                  <img src={blog.image} alt={blog.title} className={styles.image} />
                  <span className={styles.categoryBadge}>{blog.category}</span>
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className={styles.title}>{blog.title}</h3>

                  <div className={styles.footer}>
                    <span className={styles.readMore}>
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/blogs" className="btn btn-primary">
            View All Articles <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
