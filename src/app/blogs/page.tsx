import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import styles from '@/styles/Blog.module.css';
import { blogsData } from '@/data/blogs';

export const metadata = {
  title: 'Blog | Insights & News',
  description: 'Stay updated with the latest trends in digital marketing and web development.',
};

export default function BlogListing() {
  const categories = Array.from(new Set(blogsData.map(b => b.category)));
  const recentPosts = blogsData.slice(0, 3);
  
  return (
    <div className="container section">
      <div className="text-center mb-16">
        <h1 className="text-gradient">Our Latest Thinking</h1>
        <p className="subtitle">Expert insights to help your business grow.</p>
      </div>

      <div className={styles.blogContainer}>
        <div className={styles.mainColumn}>
          {blogsData.map((blog) => (
            <article key={blog.slug} className={styles.blogCard}>
              <Link href={`/blogs/${blog.slug}`}>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className={styles.blogImage}
                />
                <div className={styles.blogContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{blog.category}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} /> {blog.date}</span>
                    <span className="flex items-center gap-2"><User size={14} /> {blog.author}</span>
                  </div>
                  <h2 className={styles.title}>{blog.title}</h2>
                  <p className={styles.excerpt}>
                    {/* Dummy excerpt extraction */}
                     A quick look at the key concepts discussed in this article about {blog.category}...
                  </p>
                  <span className={styles.readMore}>Read Article <ArrowRight size={16} /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Categories</h3>
            <div className={styles.tagCloud}>
              {categories.map(cat => (
                <Link key={cat} href={`/blogs?category=${cat}`} className={styles.tag}>
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Recent Posts</h3>
            <ul className={styles.recentList}>
              {recentPosts.map(post => (
                <li key={post.slug} className={styles.recentItem}>
                  <Link href={`/blogs/${post.slug}`}>
                    <img src={post.image} alt={post.title} className={styles.sidebarImage} />
                    <span className={styles.recentTitle}>{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
