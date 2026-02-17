'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Volume2, Globe, TrendingUp, Sparkles, PenTool, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Services.module.css';
import homeStyles from '@/styles/Home.module.css';

const services = [
  {
    id: 'seo',
    title: 'SEO Mastery',
    desc: 'Dominate search rankings with data-driven strategies that drive organic traffic and qualified leads to your business.',
    fullDesc: 'We don’t just optimize for keywords; we optimize for revenue. Our holistic SEO approach combines technical audits, content strategy, and authoritative link building to ensure your brand dominates the SERPs.',
    icon: Search,
    href: '/services/seo',
    features: ['Technical SEO Audits', 'On-Page Optimization', 'Off-Page Link Building', 'Local SEO Dominance'],
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'media',
    title: 'Media Buying',
    desc: 'Strategic ad placement and budget management for maximum ROI across Facebook, Google, and emerging channels.',
    fullDesc: 'Stop wasting budget on ads that don\'t convert. We design high-converting ad campaigns across Meta, Google, and LinkedIn, leveraging precise targeting and A/B testing to lower your CPA and scale your ROAS.',
    icon: Volume2,
    href: '/services/media-buying',
    features: ['Meta & Google Ads', 'Audience Segmentation', 'Retargeting Campaigns', 'Creative A/B Testing'],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'web',
    title: 'Web Development',
    desc: 'Blazing fast, secure, and scalable Next.js applications custom-built to convert visitors into loyal customers.',
    fullDesc: 'Your website is your 24/7 salesperson. We build lightning-fast, SEO-friendly, and visually stunning websites using Next.js and modern technologies that provide an exceptional user experience on every device.',
    icon: Globe,
    href: '/services/website-development',
    features: ['Custom Next.js Development', 'E-commerce Solutions', 'Performance Optimization', 'Headless CMS Integration'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    desc: 'Results-oriented campaigns that scale revenue predictably through rigorous testing and optimization.',
    fullDesc: 'Growth isn\'t a guessing game. Our performance marketing strategies focus purely on data and results. We track every click and conversion to ensure every dollar you spend contributes to your bottom line.',
    icon: TrendingUp,
    href: '/services/performance-marketing',
    features: ['Conversion Rate Optimization', 'Funnel Analysis', 'Data Analytics & Reporting', 'Lead Generation Systems'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    desc: 'Crafting memorable brand identities and visual systems that resonate deeply with your target audience.',
    fullDesc: 'A strong brand is your most valuable asset. We help you define your voice, visual identity, and story to create a lasting connection with your audience and stand out in a crowded marketplace.',
    icon: Sparkles,
    href: '/services/branding',
    features: ['Logo & Identity Design', 'Brand Guidelines', 'UI/UX Design', 'Visual Storytelling'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className={styles.section} id="services">
      <div className="container">

        {/* Header (reusing Home styles for consistency) */}
        <div className="text-center mb-12">
          <div className={homeStyles.pillBadge} style={{ margin: '0 auto 1rem' }}>
            <Sparkles size={14} />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Services We Offer
          </h2>
          <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We combine data-driven insights with creative excellence to deliver
            digital experiences that transform businesses.
          </p>
        </div>

        <div className={styles.servicesContainer}>
          {/* Left Side: Navigation */}
          <div className={styles.servicesList}>
            {services.map((service) => (
              <div
                key={service.id}
                className={`${styles.serviceItem} ${activeService.id === service.id ? styles.active : ''}`}
                onClick={() => setActiveService(service)}
              >
                <div className={styles.serviceItemContent}>
                  <div className={styles.serviceIconWrapper}>
                    <service.icon size={24} />
                  </div>
                  <span className={styles.serviceTitle}>{service.title}</span>
                </div>
                <ArrowRight size={20} className={styles.activeArrow} />
              </div>
            ))}
          </div>

          {/* Right Side: Detailed Content */}
          <div className={styles.detailsPanel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.detailsContent}
              >
                <div className={styles.textContent}>
                  <div className={styles.detailsHeader}>
                    <div className={styles.detailsIcon}>
                      <activeService.icon size={32} />
                    </div>
                    <h3 className={styles.detailsTitle}>{activeService.title}</h3>
                    <p className={styles.detailsDesc}>{activeService.fullDesc}</p>
                  </div>

                  <div className={styles.featureList}>
                    {activeService.features.map((feature, i) => (
                      <div key={i} className={styles.featureItem}>
                        <div className={styles.checkIcon}>
                          <Check size={18} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={activeService.href} className="btn btn-primary w-fit">
                    Explore {activeService.title} <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>

                {/* Right Side Image - Now properly contained */}
                <div className={styles.imageContainer}>
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className={styles.detailsImage}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
