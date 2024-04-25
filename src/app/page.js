import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import RoadMapSection from '../components/RoadMapSection';
import FaqSection from '../components/FaqSection';
import Intro from '../components/Intro';
import Tokenomics from '@/components/Tokenomics';

export default function Home() {
  return (
    <Layout >
       <HeroSection />
      <Intro />
      <FeatureSection />
      <Tokenomics />
      <RoadMapSection />
      <FaqSection />
    </Layout>
  );
}
