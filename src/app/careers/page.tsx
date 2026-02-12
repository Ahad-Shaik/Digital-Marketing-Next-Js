import { Briefcase, ArrowRight } from 'lucide-react';
import CTA from '@/components/home/CTA';

export default function CareersPage() {
  const jobs = [
    { title: 'Senior Next.js Developer', location: 'Remote / SF', type: 'Full-time' },
    { title: 'UX/UI Designer', location: 'Remote', type: 'Full-time' },
    { title: 'Digital Marketing Strategist', location: 'New York', type: 'Contract' },
  ];

  return (
    <>
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center' }}>
        <h1 className="text-gradient">Join Our Team</h1>
        <p className="subtitle">Build the future of digital with us.</p>
      </div>

      <section className="container section">
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {jobs.map((job, i) => (
            <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem' }}>
              <div>
                <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Briefcase size={14} /> {job.type}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <button className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                Apply Now <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
