import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ArrowLeft, User } from 'lucide-react';
import { blogsData } from '@/data/blogs';
import styles from '@/styles/Blog.module.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return { title: 'Article Not Found' };
  
  return {
    title: `${blog.title} | Mera Digital Insights`,
    description: blog.excerpt,
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="container section">
      <Link href="/blogs" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Back to Blogs
      </Link>

      <div className={styles.heroImageContainer}>
        <img src={blog.image} alt={blog.title} className={styles.blogImage} />
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <span className={styles.heroCategory}>
            {blog.category}
          </span>
          <h1 className={styles.heroTitle}>{blog.title}</h1>
          <div className={styles.heroMeta}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} /> {blog.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {blog.date}</span>
          </div>
        </div>
      </div>

      <div className={styles.detailGrid}>
        <div className={styles.contentBody}>
           <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
        
        <div>
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Tags</h3>
            <div className={styles.tagCloud}>
              {blog.tags.map((tag: string) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Share</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="btn btn-outline" style={{ width: '100%' }}>Twitter</button>
              <button className="btn btn-outline" style={{ width: '100%' }}>LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
