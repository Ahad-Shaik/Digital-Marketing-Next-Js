'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from '@/styles/ContactCTA.module.css';

export default function ContactCTA() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
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
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className={styles.formInput}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className={styles.formInput}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup} style={{ marginBottom: '1rem' }}>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className={styles.formInput}
                                    />
                                </div>

                                <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={styles.formInput}
                                        style={{ appearance: 'none' }}
                                    >
                                        <option value="" disabled>Select Service Interest</option>
                                        <option value="seo">SEO & Marketing</option>
                                        <option value="dev">Web Development</option>
                                        <option value="branding">Branding & Design</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
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
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {!status && <Send size={18} className="ml-2" />}
                                </motion.button>

                                {status === 'success' && (
                                    <p className="text-green-500 mt-2 text-center text-sm">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-500 mt-2 text-center text-sm">Something went wrong. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
