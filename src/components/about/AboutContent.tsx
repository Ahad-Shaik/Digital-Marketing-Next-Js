'use client';

import { motion } from 'framer-motion';
import { 
  Users, Target, Lightbulb, Rocket, 
  TrendingUp, ShieldCheck, Zap,
  ArrowRight, CheckCircle, Award, 
  Code, Megaphone, Search, BarChart3
} from 'lucide-react';
import styles from '@/styles/About.module.css';
import CTA from '@/components/home/CTA';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutContent() {
  // Force refresh verification
  console.log('Mera Digital About Page Loaded');

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.abstractBg}>
           <div className={styles.blob1}></div>
           <div className={styles.blob2}></div>
        </div>

        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className={styles.sinceBadge}>
              Established 2018
            </motion.div>
            
            <motion.h1 variants={itemVariants} className={styles.heroTitle}>
              We Are <span className="text-gradient">Mera Digital.</span> <br />
              <span style={{fontSize: '0.6em', fontWeight: 400, display: 'block', marginTop: '10px'}}>Elevating Brands in the Digital Era.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className={styles.heroSubtitle}>
              Mera Digital is a premier full-service digital agency dedicated to transforming businesses through innovation, strategy, and design. We turn complex challenges into digital success stories.
            </motion.p>
            
            <motion.div variants={itemVariants} className={styles.buttonGroup}>
               <a href="/services" className="btn btn-primary">
                 Our Capabilities <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
               </a>
               <a href="#story" className="btn btn-outline">
                 The Mera Story
               </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {[ 
              { label: 'Market Experience', value: '6+ Years' },
              { label: 'Successful Campaigns', value: '500+' },
              { label: 'Client Retention', value: '96%' },
              { label: 'Ad Spend Managed', value: '$10M+' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.statItem}
              >
                <h3 className={styles.statValue}>{stat.value}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div 
              className={styles.storyContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gradient">The Mera Digital Story</h2>
              <p className={styles.storyText}>
                <strong>Mera Digital</strong> was founded on a singular vision: to bridge the gap between creative ambition and technical execution. In a crowded digital landscape, we saw businesses struggling to find partners who could truly understand their voice while delivering measurable growth.
              </p>
              <p className={styles.storyText}>
                What started as a boutique design studio has evolved into a powerhouse digital consultancy. "Mera" — meaning "Mine" in Hindi — reflects our philosophy: we treat every client's business with the same ownership, care, and passion as if it were our own.
              </p>
              <p className={styles.storyText}>
                Today, Mera Digital empowers brands across 15+ industries, boosting their online presence through bespoke web development, targeted performance marketing, and compelling brand storytelling.
              </p>
              
              <div className={styles.checkmarkGrid}>
                 <div className={styles.checkmarkItem}>
                  <Code size={20} color="var(--accent-primary)" />
                  <span>Next-Gen Web Dev</span>
                </div>
                <div className={styles.checkmarkItem}>
                  <Megaphone size={20} color="var(--accent-primary)" />
                  <span>Performance Marketing</span>
                </div>
                <div className={styles.checkmarkItem}>
                  <Search size={20} color="var(--accent-primary)" />
                  <span>Advanced SEO</span>
                </div>
                <div className={styles.checkmarkItem}>
                  <BarChart3 size={20} color="var(--accent-primary)" />
                  <span>Data Analytics</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.storyImageWrapper}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                alt="Mera Digital Team at Work" 
                className={styles.storyImage}
              />
              <div className={styles.storyCaption}>
                Mera Digital HQ • Innovation Lab
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Ecosystem Section */}
      <section className={styles.valuesSection} style={{ background: 'var(--bg-tertiary)' }}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.marginBottomLarge}`}>
            <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>The Service Ecosystem</h2>
            <p className={styles.heroSubtitle}>
              Mera Digital provides a holistic suite of digital solutions designed to work in synergy, ensuring every touchpoint of your brand is optimized for growth.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {[
              {
                title: 'Strategic Search Architecture',
                icon: Search,
                desc: 'We don\'t just target keywords; we architect visibility. Our SEO and SEM strategies are built on deep technical audits and semantic search science to ensure your brand captures intent at every stage of the funnel.'
              },
              {
                title: 'Digital Experience Infrastructure',
                icon: Code,
                desc: 'Our web development is centered on "Digital Performance." We build high-speed, secure, and conversion-optimized websites using Next.js and headless architectures that serve as a robust foundation for your digital growth.'
              },
              {
                title: 'Predictive Performance Marketing',
                icon: Megaphone,
                desc: 'Leveraging machine learning and real-time data, our performance marketing campaigns are designed to scale. We focus on high-LTV (Life Time Value) customer acquisition and meticulous ROAS optimization.'
              },
              {
                title: 'Intelligent Brand Ecosystems',
                icon: Award,
                desc: 'Branding at Mera Digital goes beyond logos. We create comprehensive visual and narrative ecosystems that establish authority, build trust, and maintain consistency across all global digital touchpoints.'
              }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.valueIconWrapper} style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--accent-primary)' }}>
                  <service.icon size={32} />
                </div>
                <h3 className={styles.valueTitle}>{service.title}</h3>
                <p className={styles.valueDesc}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className={`${styles.textCenter} mt-12`}>
            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', maxWidth: '800px', margin: '3rem auto 0' }}>
              "In a landscape defined by rapid technical shifts, Mera Digital serves as the steady hand that translates complexity into clear, profitable outcomes for our global partners."
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.marginBottomLarge}`}>
            <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>The Mera Standard</h2>
            <p className={styles.heroSubtitle}>
              We don't just deliver services; we deliver standards. Our core values define the Mera Digital experience.
            </p>
          </div>
          
          <div className={styles.valuesGrid}>
            {[
              { 
                title: 'Data-Backed Creativity', 
                icon: Lightbulb, 
                desc: 'We believe beautiful design must convert. Every creative decision at Mera Digital is supported by user data and market insights.' 
              },
              { 
                title: 'Radical Transparency', 
                icon: ShieldCheck, 
                desc: 'No hidden fees, no jargon. We provide clear, real-time reporting so you always know where your investment is going.' 
              },
              { 
                title: 'Client Partnership', 
                icon: Users, 
                desc: 'We are not just a vendor; we are your growth partners. Your KPIs are our KPIs, and we celebrate your wins together.' 
              },
              { 
                title: 'Agile Execution', 
                icon: Zap, 
                desc: 'The digital world waits for no one. Our agile methodologies ensure rapid deployment and continuous iteration for maximum impact.' 
              }
            ].map((val, i) => (
              <motion.div 
                key={i} 
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.valueIconWrapper}>
                  <val.icon size={32} />
                </div>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.marginBottomLarge}`}>
            <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Our Proven Process</h2>
            <p className={styles.heroSubtitle}>From concept to launch and beyond, we guide you every step of the way.</p>
          </div>
          
          <div className={styles.processSteps}>
            {/* Connecting Line */}
            <div className={styles.processLine}></div>
            
            {[
              { step: '01', title: 'Discovery & Audit', icon: Target, desc: 'We analyze your current digital footprint, competitor landscape, and target audience to find the gaps.' },
              { step: '02', title: 'Strategic Roadmap', icon: Lightbulb, desc: 'We craft a tailored strategy integrating SEO, Content, and Tech to hit your specific business goals.' },
              { step: '03', title: 'Creative Execution', icon: Rocket, desc: 'Our designers and developers bring the vision to life with pixel-perfect precision and clean code.' },
              { step: '04', title: 'Scale & Optimize', icon: TrendingUp, desc: 'Launch is just the beginning. We continuously monitor data to refine campaigns and maximize ROI.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={styles.processStep}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className={styles.stepIcon}>
                  <item.icon size={32} />
                </div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamHeader}>
            <div className={styles.teamHeaderText}>
               <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Meet Team Mera</h2>
               <p style={{ color: 'var(--text-secondary)' }}>The strategists, designers, and engineers behind your success.</p>
            </div>
            <a href="/careers" className="btn btn-outline">Join The Team</a>
          </div>
          
          <div className={styles.teamGrid}>
            {[
              { name: 'Arjun Mehta', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop' },
              { name: 'Priya Sharma', role: 'Head of Marketing', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop' },
              { name: 'Rohan Gupta', role: 'Tech Lead', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop' },
              { name: 'Sneha Patel', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop' }
            ].map((member, i) => (
              <motion.div 
                key={i} 
                className={styles.teamMember}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.memberImageWrapper}>
                  <img src={member.img} alt={member.name} className={styles.memberImage} />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <div className={styles.socialLinks}>
                     <div className={styles.socialIcon}><Users size={18} /></div>
                     <div className={styles.socialIcon}><Award size={18} /></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  );
}
