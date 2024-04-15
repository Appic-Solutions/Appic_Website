import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import RoadMapSection from '../components/RoadMapSection';
import FaqSection from '../components/FaqSection';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <Intro />
      <RoadMapSection />
      <FaqSection />
    </Layout>
  );
}
