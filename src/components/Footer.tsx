'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Rocket } from 'lucide-react';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      
      <div className={`container ${styles.content}`}>
        <div className={styles.brand}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Rocket className="text-gradient" size={28} />
            <span className="text-gradient">AGENCY.</span>
          </Link>
          <p>
            Elevating brands through digital innovation. We craft award-winning strategies and designs that drive growth.
          </p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialIcon}><Twitter size={18} /></Link>
            <Link href="#" className={styles.socialIcon}><Linkedin size={18} /></Link>
            <Link href="#" className={styles.socialIcon}><Instagram size={18} /></Link>
            <Link href="#" className={styles.socialIcon}><Facebook size={18} /></Link>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Services</h3>
          <div className={styles.links}>
            <Link href="/services/seo" className={styles.link}>SEO Optimization</Link>
            <Link href="/services/google-ads" className={styles.link}>Google Ads</Link>
            <Link href="/services/website-development" className={styles.link}>Web Development</Link>
            <Link href="/services/branding" className={styles.link}>Branding</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Company</h3>
          <div className={styles.links}>
            <Link href="/about-us" className={styles.link}>About Us</Link>
            <Link href="/careers" className={styles.link}>Careers</Link>
            <Link href="/blogs" className={styles.link}>Blog</Link>
            <Link href="/contact-us" className={styles.link}>Contact</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest digital trends.</p>
          <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={styles.input}
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <span>© {new Date().getFullYear()} Agency. All rights reserved.</span>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
          <Link href="/terms" className={styles.link}>Terms of Service</Link>
        </div>

        <motion.button 
          onClick={scrollToTop}
          className={styles.scrollTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
