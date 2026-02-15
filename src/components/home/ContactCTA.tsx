'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from '@/styles/ContactCTA.module.css';

export default function ContactCTA() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <section className={styles.ctaSection} id="contact-us">
            {/* Background Decorators */}
            <div className={styles.bgDecor}>
                <div className={`${styles.orb} ${styles.orb1}`} />
                <div className={`${styles.orb} ${styles.orb2}`} />
            </div>

            <div className="container relative z-10">
                <div className={styles.ctaContainer}>

                    {/* Left Side: Content */}
                    <motion.div
                        className={styles.ctaLeft}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Ready to Scale <br /> Your Business?
                        </h2>
                        <p className={styles.ctaText}>
                            Let's build something extraordinary together. Whether you need a
                            complete digital overhaul or a targeted campaign, we are here to help.
                        </p>

                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <Mail size={24} />
                                </div>
                                <div className={styles.infoText}>
                                    <h4>Email Us</h4>
                                    <p>hello@meradigitals.com</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.infoText}>
                                    <h4>Call Us</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <MapPin size={24} />
                                </div>
                                <div className={styles.infoText}>
                                    <h4>Visit Us</h4>
                                    <p>Ahmedabad, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        className={styles.formRight}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.formCard}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Get in Touch</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className={styles.formGroup}>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className={styles.formInput}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className={styles.formInput}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup} style={{ marginBottom: '1rem' }}>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className={styles.formInput}
                                    />
                                </div>

                                <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                                    <select className={styles.formInput} style={{ appearance: 'none' }} defaultValue="">
                                        <option value="" disabled>Select Service Interest</option>
                                        <option value="seo">SEO & Marketing</option>
                                        <option value="dev">Web Development</option>
                                        <option value="branding">Branding & Design</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                                    <textarea
                                        placeholder="Tell us about your project..."
                                        className={styles.formTextarea}
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-full justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message <Send size={18} className="ml-2" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
