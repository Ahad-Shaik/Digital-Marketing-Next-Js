import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/home/CTA';
import styles from '@/styles/ServicePage.module.css';

// Define types for the service data
interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  process: { title: string; desc: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  icon: any;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = (servicesData as Record<string, ServiceData>)[slug];
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Premium Digital Agency`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = (servicesData as Record<string, ServiceData>)[slug];
  
  if (!service) {
    notFound();
  }

  // If using Server Components, we can't use framer motion directly. 
  // We should create Client Components for the animated parts.
  // For simplicity here, I'll inline static content but use a client wrapper for animations if needed.
  // Or reuse existing components like CTA.
  
  return (
    <>
      <div className={styles.hero}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.heroContent} style={{ margin: '0 auto' }}>
            <span className="text-accent-primary font-bold tracking-widest uppercase mb-4 block">Our Expertise</span>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>{service.subtitle}</p>
          </div>
        </div>
        
        {/* Animated Background */}
        <div className="bg-gradient-glow" style={{ top: '20%', right: '-10%', width: '500px', height: '500px', opacity: 0.3 }}></div>
      </div>

      <section className="section container">
        <div className={styles.contentGrid}>
          <div>
            <h2 className="text-gradient">Comprehensive Solution</h2>
            <p className={styles.intro}>
              {service.description}
            </p>
            <ul className={styles.benefitList}>
              {service.benefits?.map((benefit: string, i: number) => (
                <li key={i} className={styles.benefitItem}>
                  <span className={styles.checkIcon}>✓</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.serviceImageContainer}>
             {/* Placeholder for service image/illustration */}
             <service.icon size={120} className="text-accent-secondary" style={{ opacity: 0.8 }} />
          </div>
        </div>
      </section>

      <section className="section bg-secondary" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-12">Our Process</h2>
          <div className={styles.process}>
            {service.process?.map((step: { title: string; desc: string }, i: number) => (
              <div key={i} className={styles.stepCard}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <h3 style={{ marginTop: '1rem', fontSize: '1.25rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="text-center mb-12">Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {service.faqs?.map((faq: { q: string; a: string }, i: number) => (
            <div key={i} className={styles.faqItem}>
              <details>
                <summary className={styles.faqQuestion}>
                  {faq.q}
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>+</span>
                </summary>
                <div style={{ paddingBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                  {faq.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
