import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import VideoTestimonials from '@/components/sections/VideoTestimonials';
import Benefits from '@/components/sections/Benefits';
import Modalities from '@/components/sections/Modalities';
import CollectiveClasses from '@/components/sections/CollectiveClasses';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Structure from '@/components/sections/Structure';
import Location from '@/components/sections/Location';
import CTAFinal from '@/components/sections/CTAFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <VideoTestimonials />
      <Benefits />
      <Modalities />
      <CollectiveClasses />
      <Pricing />
      <Structure />
      <Location />
      <FAQ />
      <CTAFinal />
    </>
  );
}
