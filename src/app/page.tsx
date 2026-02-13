import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import Expertise from '@/components/home/Expertise';
import Services from '@/components/home/Services';

import WhyChooseUs from '@/components/home/WhyChooseUs';
import CaseStudies from '@/components/home/CaseStudies';
import LatestBlogs from '@/components/home/LatestBlogs';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />

      <Expertise />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <LatestBlogs />
      <FAQ />
    </>
  );
}
