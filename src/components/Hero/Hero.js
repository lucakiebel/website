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
        CTO at <a href="https://nibyou.com">Nibyou</a>, CEO at <a href="https://k-b.dev">K&amp;B Software Solutions</a>.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;