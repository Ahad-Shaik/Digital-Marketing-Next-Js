'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket, Search, DollarSign, Code, ShieldCheck, Award, TrendingUp, Megaphone, Sun, Moon } from 'lucide-react';
import styles from '@/styles/Header.module.css';
import { useTheme } from '@/components/ThemeProvider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  {
    href: '#',
    label: 'Services',
    isMega: true,
    subItems: [
      { href: '/services/seo', label: 'SEO Services', icon: Search, desc: 'Rank #1 on Google' },
      { href: '/services/google-ads', label: 'Google Ads', icon: DollarSign, desc: 'High ROI Campaigns' },
      { href: '/services/website-development', label: 'Web Development', icon: Code, desc: 'Custom Next.js Apps' },
      { href: '/services/online-reputation-management', label: 'ORM', icon: ShieldCheck, desc: 'Build Trust' },
      { href: '/services/branding', label: 'Branding', icon: Award, desc: 'Establish Your Identity' },
      { href: '/services/performance-marketing', label: 'Performance', icon: TrendingUp, desc: 'Data-Driven Growth' },
    ]
  },
  { href: '/blogs', label: 'Blogs' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact-us', label: 'Contact Us', isCta: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  // Prevent hydration mismatch for icon
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Rocket className="text-gradient" size={32} style={{ color: 'var(--accent-primary)' }} />
          <span className="text-gradient">Mera Digital</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <div key={link.label} className={`${styles.navItem} ${styles.group}`}>
              {link.isMega ? (
                <>
                  <span className={styles.flexCenter} style={{ cursor: 'pointer' }}>
                    {link.label} <ChevronDown size={14} />
                  </span>

                  <div className={styles.megaMenu}>
                    {link.subItems?.map((sub) => (
                      <Link key={sub.href} href={sub.href} className={styles.megaLink}>
                        <div className={styles.iconWrapper}>
                          <sub.icon size={20} className={styles.megaIcon} />
                        </div>
                        <div className={styles.itemText}>
                          <h4>{sub.label}</h4>
                          <p>{sub.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`${link.isCta ? 'btn btn-primary' : ''} ${pathname === link.href ? 'text-gradient' : ''}`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          {/* Theme Toggle Desktop */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'background 0.3s'
            }}
          >
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.isMega ? (
                  <div style={{ marginTop: '1rem' }}>
                    <h3 style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Services</h3>
                    <div style={{ display: 'grid', gap: '1rem', paddingLeft: '1rem' }}>
                      {link.subItems?.map(sub => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className={styles.mobileSubLink}
                        >
                          <sub.icon size={18} />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`${styles.mobileLink} ${link.isCta ? styles.ctaButton : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Theme Toggle */}
            <div style={{ padding: '1rem 0', borderTop: '1px solid var(--glass-border)', marginTop: 'auto' }}>
              <button
                onClick={toggleTheme}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  width: '100%'
                }}
              >
                {mounted && theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                <span>{mounted && theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
}
