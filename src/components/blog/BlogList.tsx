'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import styles from '@/styles/BlogListing.module.css';
import { blogsData } from '@/data/blogs';

export default function BlogList() {
  const featuredBlog = blogsData[0];
  const otherBlogs = blogsData.slice(1);

  return (
    <div className={styles.wrapper}>
      <div className="container">

        {/* Header Section */}
        <div className={styles.header}>
          <span className={styles.label}>
            Mera Insights
          </span>
          <h1 className={styles.title}>
            Strategic Thoughts <br /> & Digital Perspectives
          </h1>
          <p className={styles.subtitle}>
            Explore expert analysis on SEO, performance marketing, and the future of digital ecosystems.
          </p>
        </div>

        {/* Featured Blog */}
        <div className={styles.featuredSection}>
          <Link href={`/blogs/${featuredBlog.slug}`} className={styles.featuredCard}>
            <div className={styles.featuredImageWrapper}>
              <img src={featuredBlog.image} alt={featuredBlog.title} className={styles.featuredImage} />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredCategory}>{featuredBlog.category}</span>
                <span>•</span>
                <span className={styles.featuredDate}>{featuredBlog.date}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredBlog.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredBlog.excerpt}</p>
              <div className={styles.readMoreBtn}>
                Read Full Article <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {otherBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blogs/${blog.slug}`} className={styles.card}>
                <div className={styles.cardImageWrapper}>
                  <img src={blog.image} alt={blog.title} className={styles.cardImage} />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                    {blog.category}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardDate}>
                      <Calendar size={14} /> {blog.date}
                    </div>
                    <div className={styles.cardDate}>
                      <Tag size={14} /> {blog.tags[0]}
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{blog.title}</h3>
                  <p className={styles.cardExcerpt}>{blog.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.author}>
                      <div className={styles.authorAvatar}>
                        {blog.author.charAt(0)}
                      </div>
                      <span className={styles.authorName}>{blog.author}</span>
                    </div>
                    <div className={styles.cardAction}>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterGlow} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join 5,000+ industry leaders receiving our weekly strategic briefings on digital growth and AI.
            </p>

            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
