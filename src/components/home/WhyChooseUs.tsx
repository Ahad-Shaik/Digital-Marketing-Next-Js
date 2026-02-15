"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BadgeCheck, Zap, Users, ShieldCheck, Target } from "lucide-react";
import styles from "@/styles/WhyChooseUs.module.css";
import homeStyles from "@/styles/Home.module.css";

const features = [
  {
    title: "Data-First Approach",
    description: "Every decision is backed by comprehensive analytics. We don't guess; we measure, optimize, and scale based on real-world performance metrics.",
    icon: TrendingUp,
    gridClass: "col-span-2",
  },
  {
    title: "Transparent Process",
    description: "No hidden fees. You get 24/7 access to live dashboards and weekly reports, so you always know where your budget is going.",
    icon: BadgeCheck,
    gridClass: "col-span-1",
  },
  {
    title: "Rapid Execution",
    description: "Speed is currency. Our agile workflows allow us to launch campaigns and websites faster than the competition without sacrificing quality.",
    icon: Zap,
    gridClass: "col-span-1",
  },
  {
    title: "Dedicated Experts",
    description: "Work directly with senior strategists and developers. No middle-men, just direct communication with the experts handling your growth.",
    icon: Users,
    gridClass: "col-span-2",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-choose-us">
      {/* Background Decorators */}
      <div className={styles.bgDecor}>
        <div className={styles.orb} />
      </div>

      <div className="container relative z-10">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={homeStyles.pillBadge} style={{ margin: '0 auto 1.5rem' }}>
            <Target size={14} />
            <span>Why Us?</span>
          </div>
          <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Why Choose Mera Digitals?
          </h2>
          <p className={styles.sectionSubtitle}>
            We combine creative excellence with technical precision to deliver results that matter.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Subtle Background Gradient for visual richness */}
              <div className={styles.bgGradient} />

              <div className={styles.cardContent}>
                <div>
                  <div className={styles.iconWrapper}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDesc}>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
