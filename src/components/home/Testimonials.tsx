'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import styles from '@/styles/Testimonials.module.css';

interface Testimonial {
  rating: number;
  text: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5.0,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Dianne Russell',
    position: 'Owner, Architecture Studio',
  },
  {
    rating: 5.0,
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    name: 'James Carter',
    position: 'CEO, TechVision Co.',
  },
  {
    rating: 4.9,
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia.',
    name: 'Sarah Mitchell',
    position: 'Marketing Director, BrandForce',
  },
];

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=80&auto=format&fit=crop',
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={18} fill="#a3e635" color="#a3e635" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const active = testimonials[current];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">

        {/* Section Header — two columns */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerLeft}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                <div className={styles.badgeCircle} />
                <div className={styles.badgeLine} />
              </div>
              <span>Testimonials</span>
            </div>
            <h2 className={styles.heading}>
              Testimonials: Trusted<br />by Our Clients
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <Link href="/about-us" className={styles.allBtn}>
              All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Cards Row */}
        <div className={styles.cardsRow}>

          {/* Left — Rating Summary Card */}
          <motion.div
            className={styles.ratingCard}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className={styles.ratingNumber}>4.9</div>
            <StarRow />
            <p className={styles.reviewCount}>(40+ Reviews)</p>
            <p className={styles.ratingTagline}>
              Customer experiences that speak for them selves
            </p>
            <div className={styles.avatarStack}>
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Client ${i + 1}`}
                  className={styles.avatar}
                  style={{ zIndex: AVATARS.length - i }}
                />
              ))}
              <div className={styles.avatarMore}>+</div>
            </div>
          </motion.div>

          {/* Right — Testimonial Slider */}
          <motion.div
            className={styles.testimonialCard}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className={styles.reviewHeader}>
              <StarRow count={5} />
              <span className={styles.reviewScore}>
                {active.rating.toFixed(1)}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className={styles.reviewBody}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
              >
                <p className={styles.reviewText}>{active.text}</p>

                <div className={styles.reviewFooter}>
                  <div className={styles.reviewerInfo}>
                    <span className={styles.reviewerName}>{active.name}</span>
                    <span className={styles.reviewerPos}>{active.position}</span>
                  </div>

                  <div className={styles.navBtns}>
                    <button
                      className={styles.navBtnPrev}
                      onClick={prev}
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      className={styles.navBtnNext}
                      onClick={next}
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
