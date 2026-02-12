'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Users, Zap, TrendingUp } from 'lucide-react';
import styles from '@/styles/Home.module.css';

const features = [
  { title: 'Data-First Approach', desc: 'Every decision is backed by comprehensive analytics.', icon: TrendingUp },
  { title: 'Transparent Process', desc: 'No hidden fees. Regular updates and clear reporting.', icon: BadgeCheck },
  { title: 'Rapid Execution', desc: 'We launch campaigns and websites faster than the competition.', icon: Zap },
  { title: 'Dedicated Experts', desc: 'Work directly with senior specialists, not account managers.', icon: Users },
];

export default function WhyChooseUs() {
  return (
    <section className="section container">
      <div className="text-center mb-16">
        <h2 className="text-gradient">Why Choose Agency?</h2>
        <p className="subtitle">We deliver results, not just promises.</p>
      </div>
      
      <div className={styles.servicesGrid}>
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            className={styles.serviceCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.serviceIcon}>
              <feature.icon size={28} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
