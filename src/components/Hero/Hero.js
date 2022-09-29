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
        CTO at <a href="https://nibyou.com" target="_blank">Nibyou UG</a>, Head of App Development at <a href="https://audoora.de" target="_blank">audoora GmbH</a>.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;