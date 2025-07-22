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
        Road-Bike Racer at <a href="https://www.instagram.com/raceboys.ms" target="_blank">Raceboys MS</a>, Senior Software Engineer at <a href="https://adesso.de" target="_blank">adesso SE</a>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
