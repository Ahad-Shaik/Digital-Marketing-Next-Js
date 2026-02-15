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
            <Link href="/" className={styles.logo}>
              <span className="text-gradient" style={{ fontSize: '2rem', fontWeight: 800 }}>Mera Digitals</span>
            </Link>
            <p className={styles.brandDescription}>
              We help brands grow through data-driven marketing strategies, high-performance websites, and compelling creative design that converts visitors into customers.
            </p>
            <div className={styles.socials}>
              <Link href="#" className={styles.socialIcon}><Facebook size={20} /></Link>
              <Link href="#" className={styles.socialIcon}><Twitter size={20} /></Link>
              <Link href="#" className={styles.socialIcon}><Linkedin size={20} /></Link>
              <Link href="#" className={styles.socialIcon}><Instagram size={20} /></Link>
            </div>
          </div>

          <div className={styles.mascotColumn}>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=400"
                alt="Elephant Mascot"
                className="w-32 h-32 mb-4 object-cover rounded-full shadow-lg"
              />
              <h3 className={styles.mascotText}>
                India's Most Loved <Heart size={24} fill="#f97316" color="#f97316" style={{ display: 'inline', verticalAlign: 'middle' }} /> Digital Agency
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
          <span>© {new Date().getFullYear()} Mera Digitals. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" className={styles.linkItem}>Privacy Policy</Link>
            <Link href="/terms" className={styles.linkItem}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
