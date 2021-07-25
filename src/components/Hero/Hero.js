import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, My Name Is <br />
          Luca Kiebel
        </SectionTitle>
        <SectionText>
        Luca is the CTO at <a href="https://nibyou.com">Nibyou</a> and an IT Consultant for Digitalization and Process Optimization at <a href="https://xenoncloud.net">XenonCloud</a>.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;