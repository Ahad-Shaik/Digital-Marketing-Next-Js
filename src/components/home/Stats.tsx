'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import styles from '@/styles/Home.module.css';

const stats = [
  { label: 'Successful Projects', value: 875, suffix: '+' },
  { label: 'Awards Won', value: 34, suffix: '' },
  { label: 'Client Retention', value: 98, suffix: '%' },
  { label: 'Growth Generated', value: 250, suffix: 'M+' },
];

function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    const controls = animate(from, to, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(value).toLocaleString();
        }
      },
    });

    return () => controls.stop();
  }, [isInView, from, to]);

  return <span ref={nodeRef} className={styles.statNumber}></span>;
}

export default function Stats() {
  return (
    <section className="container">
      <motion.div 
        className={styles.statsSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <Counter from={0} to={stat.value} suffix={stat.suffix} />
            <span className={styles.statNumber} style={{ display: 'inline' }}>{stat.suffix}</span>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
