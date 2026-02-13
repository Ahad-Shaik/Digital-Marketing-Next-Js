'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import styles from '@/styles/Blog.module.css';
import { blogsData } from '@/data/blogs';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function BlogList() {
  return (
    <div className={styles.blogWrapper}>
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className={styles.blogHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 border border-[rgba(255,255,255,0.1)] rounded-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md mb-6">
            <span style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
              Latest Insights
            </span>
          </div>
          <h1 className={`${styles.titleMain} text-gradient`}>Mera Insights</h1>
          <p className={styles.subtitleMain}>
            Professional perspectives on digital growth, performance engineering, and strategic brand authority.
          </p>
        </motion.div>

        {/* Uniform 3-Column Blog Grid */}
        <motion.div 
          className={styles.blogGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogsData.map((blog) => (
            <motion.div 
              key={blog.slug} 
              variants={itemVariants}
            >
              <Link href={`/blogs/${blog.slug}`} className={styles.blogCard}>
                <div className={styles.imageWrapper}>
                  <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryTag}>{blog.category}</span>
                    <span style={{ opacity: 0.6 }}>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                  </div>
                  
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                  <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                  
                  <div className={styles.readMoreAction}>
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Simplified Subscription Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container text-center">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Subscribed to Success?</h2>
            <p className={styles.subtitleMain} style={{ marginBottom: '2.5rem' }}>
              Join 5,000+ industry leaders who receive our strategic digital briefings.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
               <input 
                type="email" 
                placeholder="Business Email" 
                className="btn btn-outline" 
                style={{ width: '100%', maxWidth: '350px', background: 'var(--bg-primary)', textAlign: 'left', borderRadius: '12px', height: '50px' }}
               />
               <button className="btn btn-primary" style={{ padding: '0 2.5rem', height: '50px' }}>Join the Newsletter</button>
            </div>
        </div>
      </section>
    </div>
  );
}
