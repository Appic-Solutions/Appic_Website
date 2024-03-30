import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import RoadMapSection from '../components/RoadMapSection';
import FaqSection from '../components/FaqSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <RoadMapSection />
      <FaqSection />
    </Layout>
  );
}
