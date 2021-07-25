import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Imprint from '../components/Imprint/Imprint'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Impressum = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Imprint />
    </Layout>
  );
};

export default Impressum;
