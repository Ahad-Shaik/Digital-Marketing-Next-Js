'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const industries = [
    "AR/VR Based Solutions",
    "CA/Accounting Firms",
    "Community Building Platforms",
    "Digital Twin Platforms",
    "Ecommerce Platforms",
    "Event Management",
    "Industrial Digitization Platforms",
    "Interiors",
    "IoT/AI/ML Based Solution Providers",
    "IT Services Industry",
    "Manufacturing",
    "Marketplaces (B2B/B2C)",
    "Overseas visa consultancy",
    "Packaging",
    "Pharmaceuticals",
    "Real estate",
    "Self-publishing Platforms",
    "Social Networking Platforms"
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Brand Bucket', href: '/brand-bucket' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Gyr</span>
              <span style={{ color: '#ef4444', fontSize: '2rem', verticalAlign: 'top' }}>●</span>
            </div>
            <p className={styles.brandDescription}>
              A 360-Degree Branding Agency rooted in purpose, powered by
              design, and led by story, your trusted Digital Marketing Agency
              in Ahmedabad.
            </p>
            <div className={styles.socials}>
              <Link href="#" className={styles.socialIcon}><Facebook size={20} /></Link>
              <Link href="#" className={styles.socialIcon}><Twitter size={20} /></Link>
              {/* Using Twitter icon for Behance as placeholder, actual Behance icon not in basic Lucide set usually, or just use generic */}
              <Link href="#" className={styles.socialIcon}><Linkedin size={20} /></Link>
              <Link href="#" className={styles.socialIcon}><Instagram size={20} /></Link>
            </div>
          </div>

          <div className={styles.mascotColumn}>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://placehold.co/200x200/png?text=Elephant+Mascot"
                alt="Elephant Mascot"
                className="w-32 h-32 mb-4 object-contain"
              />
              <h3 className={styles.mascotText}>
                India's Most Loved <Heart size={24} fill="#ef4444" color="#ef4444" style={{ display: 'inline', verticalAlign: 'middle' }} /> Branding Agency
                <br />by US, APAC & GCC Clients
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.quickLinks}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <div className={styles.linkList}>
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className={styles.linkItem}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.industries}>
            <h4 className={styles.sectionTitle}>Industries</h4>
            <div className={styles.industriesGrid}>
              {industries.map((industry) => (
                <Link key={industry} href="#" className={styles.linkItem}>
                  {industry}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <span>© {new Date().getFullYear()} Gyr Agency. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" className={styles.linkItem}>Privacy Policy</Link>
            <Link href="/terms" className={styles.linkItem}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
