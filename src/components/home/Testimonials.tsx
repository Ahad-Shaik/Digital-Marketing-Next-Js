'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from '@/styles/Home.module.css';

const testimonials = [
  {
    name: 'Sarah Jordan',
    role: 'CMO, TechFlow Inc.',
    text: 'Agency transformed our digital presence completely. Our conversion rates have doubled since the redesign.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupBase',
    text: 'The best investment we made this year. Professional, creative, and data-driven team.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Emma Wilson',
    role: 'Director, UrbanSpace',
    text: 'Incredible attention to detail. The new website is simply stunning and performs flawlessly.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section bg-secondary" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="text-center mb-12">What Our Clients Say</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.testimonialCard}
                style={{ position: 'absolute', width: '100%' }}
              >
                <Quote size={40} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{testimonials[index].text}"
                </p>
                <div className={styles.clientInfo}>
                  <img 
                    src={testimonials[index].image} 
                    alt={testimonials[index].name} 
                    className={styles.clientAvatar} 
                  />
                  <div>
                    <h4 style={{ marginBottom: 0 }}>{testimonials[index].name}</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      {testimonials[index].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button onClick={prev} className="btn btn-outline" style={{ borderRadius: '50%', width: 40, height: 40, padding: 0 }}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="btn btn-outline" style={{ borderRadius: '50%', width: 40, height: 40, padding: 0 }}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
