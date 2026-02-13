"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { BadgeCheck, Users, Zap, TrendingUp, X } from 'lucide-react';
import styles from '@/styles/Home.module.css';

const features = [
  {
    description: "Every decision is backed by comprehensive analytics.",
    title: "Data-First Approach",
    src: "https://placehold.co/600x400/1a1a1a/FFF?text=Data+First",
    ctaText: "Learn More",
    ctaLink: "#",
    icon: TrendingUp,
    content: () => {
      return (
        <p>
          We don't just guess; we analyze. Our data-first approach ensures that every marketing strategy is grounded in real-world metrics and consumer behavior analysis. <br /> <br /> By leveraging advanced analytics tools, we track performance in real-time, allowing us to pivot and optimize campaigns for maximum ROI. Your growth is mathematically calculated, not accidental.
        </p>
      );
    },
  },
  {
    description: "No hidden fees. Regular updates and clear reporting.",
    title: "Transparent Process",
    src: "https://placehold.co/600x400/1a1a1a/FFF?text=Transparency",
    ctaText: "See Process",
    ctaLink: "#",
    icon: BadgeCheck,
    content: () => {
      return (
        <p>
          Trust is the foundation of our partnership. We believe in complete transparency, providing you with detailed reports that show exactly where your budget is going and what results it's yielding. <br /> <br /> You'll have access to 24/7 dashboards and weekly catch-ups. We pride ourselves on having no hidden fees or surprise charges. What you see is what you get: honest, hard work.
        </p>
      );
    },
  },
  {
    description: "We launch campaigns and websites faster than the competition.",
    title: "Rapid Execution",
    src: "https://placehold.co/600x400/1a1a1a/FFF?text=Speed",
    ctaText: "Our Speed",
    ctaLink: "#",
    icon: Zap,
    content: () => {
      return (
        <p>
          In the digital world, speed is currency. Our agile team structure allows us to move from concept to execution in record time without sacrificing quality. <br /> <br /> Whether it's a website launch or a viral campaign, we hit the ground running. We utilize cutting-edge automation and efficient workflows to ensure you stay ahead of the curve and your competitors.
        </p>
      );
    },
  },
  {
    description: "Work directly with senior specialists, not account managers.",
    title: "Dedicated Experts",
    src: "https://placehold.co/600x400/1a1a1a/FFF?text=Experts",
    ctaText: "Meet Team",
    ctaLink: "#",
    icon: Users,
    content: () => {
      return (
        <p>
          Say goodbye to being passed around. When you work with us, you work directly with the experts handling your project. <br /> <br /> Our team consists of senior strategists, developers, and designers with years of proven experience. This direct line of communication ensures that your vision is perfectly translated into reality, with faster feedback loops and expert insights at every step.
        </p>
      );
    },
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState<(typeof features)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className={`${styles.reducedSection} container`}>
      <div className="text-center mb-8">
        <h2 className="text-gradient">Why Choose Mera Digitals?</h2>
        <p className="subtitle">We deliver results, not just promises.</p>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className={styles.modalContainer}>
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className={styles.closeBtn}
              onClick={() => setActive(null)}
            >
              <X size={18} />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className={styles.modalWrapper}
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className={styles.cardImageWrapper}>
                <img
                  src={active.src}
                  alt={active.title}
                  className={styles.cardImage}
                />
              </motion.div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className={styles.cardTitle}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className={styles.cardDesc}
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className={styles.cardCta}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className={styles.cardBody}>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className={styles.listContainer}>
        {features.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className={styles.listItem}
          >
            <div className={styles.listItemInner}>
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className={styles.listImage}
                />
              </motion.div>
              <div className={styles.listText}>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className={styles.listTitle}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className={styles.listDesc}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className={styles.listButton}
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}
