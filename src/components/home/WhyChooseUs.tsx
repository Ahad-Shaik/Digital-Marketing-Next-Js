"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Timer, Smile, ArrowRight } from "lucide-react";
import styles from "@/styles/WhyChooseUs.module.css";

const features = [
  {
    title: "5+ Years Of Experience",
    description: "Mera Digitals has been in the market for more than 5 years, and our expert team leads are 12+ years of experience in the industry.",
    icon: Timer,
  },
  {
    title: "90% Customer Satisfaction",
    description: "We work for the satisfaction of the client and support as much as possible from all the different aspects.",
    icon: Smile,
  },
  {
    title: "24/7 Hours Support",
    description: "We assign a dedicated point of contact who is available to answer all your queries 24x7.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-choose-us">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.eyebrow}>WHY CHOOSE US</span>
            <h2 className={styles.title}>
              What Makes <span className={styles.highlight}>Mera Digitals</span> Different from Others
            </h2>
            <p className={styles.description}>
              We are a team of experienced marketing professionals who believe in delivering the result with an accurate Digital Marketing strategy that will outrank your competitor.
            </p>

            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={styles.iconContainer}>
                    <feature.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className={styles.featureText}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content / CTA */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.blob} />
              <img
                src="/why-choose-us.png"
                alt="Digital Marketing Experts"
                className={styles.manImage}
              />
            </div>

            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Let's Start a <span className={styles.highlight}>New Project</span> Together
              </h2>
              <p className={styles.ctaDesc}>
                Take the first step towards revolutionizing your business with us.
              </p>

              <button className={styles.ctaButton}>
                Get Your Marketing Plan
                <ArrowRight size={20} />
                <span className={styles.dot} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
