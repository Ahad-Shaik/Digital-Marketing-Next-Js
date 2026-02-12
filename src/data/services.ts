import { Search, Globe, DollarSign, TrendingUp, ShieldCheck, PenTool } from 'lucide-react';

export const servicesData = {
    'seo': {
        title: 'Advanced SEO Services',
        subtitle: 'Dominate Search Results & Drive Organic Growth',
        description: 'Our data-driven SEO strategies help you climb the rankings and stay there. We focus on technical excellence, content relevance, and authoritative link building.',
        process: [
            { title: 'Audit & Strategy', desc: 'Comprehensive analysis of your current digital footprint.' },
            { title: 'On-Page Optimization', desc: 'Technical fixes and content enhancement for maximum relevance.' },
            { title: 'Content Creation', desc: 'High-quality, keyword-targeted content that answers user intent.' },
            { title: 'Authority Building', desc: 'Strategic outreach to build high-quality backlinks.' },
        ],
        benefits: [
            'Increase Organic Traffic by 200%',
            'Improve Conversion Rates',
            'Build Long-term Brand Authority',
            'Cost-Effective Customer Acquisition',
        ],
        faqs: [
            { q: 'How long does SEO take to show results?', a: 'Typically, significant results are seen within 4-6 months, but initial improvements can happen sooner.' },
            { q: 'Do you offer local SEO?', a: 'Yes, we specialize in both local and international SEO strategies.' },
        ],
        icon: Search
    },
    'google-ads': {
        title: 'Google Ads Management',
        subtitle: 'Maximize ROI with Precision Targeting',
        description: 'Stop wasting budget on clicks that don\'t convert. Our certified experts manage your campaigns to deliver high-quality leads at the lowest possible CPA.',
        process: [
            { title: 'Keyword Research', desc: 'Identifying high-intent keywords that drive sales.' },
            { title: 'Ad Copywriting', desc: 'Persuasive ad copy that compels users to click.' },
            { title: 'Landing Page Optimization', desc: 'Ensuring your landing pages are built to convert.' },
            { title: 'Data Analysis & Refinement', desc: 'Continuous innovative A/B testing and optimization.' },
        ],
        benefits: [
            'Immediate Visibility',
            'Precise Audience Targeting',
            'Measurable ROI',
            'Scalable Lead Generation',
        ],
        faqs: [
            { q: 'What includes your management fee?', a: 'Our fee covers strategy, setup, optimization, reporting, and regular consultation.' },
        ],
        icon: DollarSign
    },
    // Add other services similarly...
    'website-development': {
        title: 'Custom Web Development',
        subtitle: 'High-Performance Next.js Applications',
        description: 'We build fast, secure, and scalable websites that provide exceptional user experiences. From e-commerce to enterprise platforms, we deliver excellence.',
        process: [
            { title: 'Discovery & Design', desc: 'Understanding your goals and crafting a unique design system.' },
            { title: 'Development', desc: 'Clean, modular code using the latest technologies.' },
            { title: 'Testing & QA', desc: 'Rigorous testing across all devices and browsers.' },
            { title: 'Launch & Support', desc: 'Seamless deployment and ongoing maintenance.' },
        ],
        benefits: [
            'Blazing Fast Load Times',
            'SEO-Friendly Architecture',
            'Mobile-First Design',
            'Secure & Scalable',
        ],
        faqs: [
            { q: 'What technology stack do you use?', a: 'We primarily use Next.js, React, Node.js, and modern CSS frameworks.' },
        ],
        icon: Globe
    }
};
