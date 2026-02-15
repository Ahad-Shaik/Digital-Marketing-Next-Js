'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import styles from '@/styles/LatestBlogs.module.css';

const blogs = [
  {
    title: 'The Future of AI in Digital Marketing: 2026 and Beyond',
    date: 'Oct 12, 2025',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
    slug: 'future-of-ai-marketing',
    desc: 'Artificial Intelligence is not just a buzzword; it’s reshaping how brands connect with consumers. From hyper-personalization to predictive analytics, discover the key trends that will define the next decade of marketing.',
    readTime: '8 min read',
    author: 'Sarah Jenkins'
  },
  {
    title: 'SEO Strategies for 2026: What Changed?',
    date: 'Sep 28, 2025',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=800',
    slug: 'seo-strategies-2026',
    readTime: '5 min read',
    author: 'Mike Ross'
  },
  {
    title: 'Why Minimalist Design Converts Better',
    date: 'Sep 15, 2025',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800',
    slug: 'minimalist-design-converts',
    readTime: '6 min read',
    author: 'Elena Fisher'
  }
];

export default function LatestBlogs() {
  const featuredBlog = blogs[0];
  const sidebarBlogs = blogs.slice(1);

  return (
    <section className={styles.section} id="blogs">
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

        <div className={styles.magazineGrid}>
          {/* Main Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredOverlay}>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredCategory}>{featuredBlog.category}</span>
                  <span>{featuredBlog.readTime}</span>
                  <span>•</span>
                  <span>{featuredBlog.date}</span>
                </div>
                <h3 className={styles.featuredTitle}>{featuredBlog.title}</h3>
                <p className={styles.featuredDesc}>{featuredBlog.desc}</p>
                <div className={styles.readMoreBtn}>
                  Read Full Story <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Articles */}
          <div className={styles.sidebar}>
            {sidebarBlogs.map((blog, i) => (
              <motion.div
                key={i}
                className="h-full"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className={styles.sidebarCard}>
                  <div className={styles.sidebarImageWrapper}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className={styles.sidebarImage}
                    />
                    <span className={styles.sidebarBadges}>{blog.category}</span>
                  </div>
                  <div className={styles.sidebarContent}>
                    <div className={styles.sidebarMeta}>
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                      <span className="mx-1">•</span>
                      <span>{blog.date}</span>
                    </div>
                    <h4 className={styles.sidebarTitle}>{blog.title}</h4>
                    <div className={styles.sidebarLink}>
                      Read Article <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: 'auto' }}
            >
              <div className="btn btn-outline w-full justify-center">
                View All Articles <ArrowRight size={18} className="ml-2" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
