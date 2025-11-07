import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Benefits from '@/components/sections/Benefits';
import Modalities from '@/components/sections/Modalities';
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
      <Benefits />
      <Modalities />
      <Pricing />
      <Structure />
      <Location />
      <FAQ />
      <CTAFinal />
    </>
  );
}
