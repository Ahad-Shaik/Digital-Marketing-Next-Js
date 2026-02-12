import { Users, History, Award } from 'lucide-react';
import CTA from '@/components/home/CTA';
import styles from '@/styles/About.module.css';

export const metadata = {
  title: 'About Us | Our Story & Vision',
  description: 'Learn about the team driving digital innovation.',
};

export default function AboutPage() {
  return (
    <>
      <div className={`container ${styles.introSection}`}>
        <h1 className="text-gradient">About Agency.</h1>
        <p className={styles.introText}>
          We are a team of visionaries, creators, and strategists redefining the digital landscape.
        </p>
      </div>

      <section className="section container">
        <div className={styles.missionGrid}>
          <div>
            <h2 className="text-gradient">Our Mission</h2>
            <p className="subtitle">
              To empower businesses with cutting-edge digital solutions that drive real growth. We believe in transparency, innovation, and results.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <p className="text-muted">Years Experience</p>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <p className="text-muted">Team Members</p>
              </div>
            </div>
          </div>
          <div className={styles.imagePlaceholder}>
             {/* Placeholder for team image */}
             <Users size={100} style={{ color: 'var(--accent-secondary)', opacity: 0.5 }} />
          </div>
        </div>
      </section>

      <section className="section bg-secondary" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="text-gradient text-center mb-12">Our Values</h2>
          <div className={styles.valuesGrid}>
            {[
              { title: 'Innovation', icon: Award, desc: 'We constantly push boundaries to find better solutions.' },
              { title: 'Integrity', icon: Users, desc: 'Honesty and transparency are at the core of everything we do.' },
              { title: 'Excellence', icon: History, desc: 'We don\'t settle for good. We aim for extraordinary.' },
            ].map((val, i) => (
              <div key={i} className={styles.valueCard}>
                <val.icon size={40} className={styles.valueIcon} />
                <h3>{val.title}</h3>
                <p className="text-muted">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
