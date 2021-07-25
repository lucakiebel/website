import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, Link, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href="tel:004925354639896">+49-2535-463-989-6</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hello@luca-kiebel.de">
            hello@luca-kiebel.de
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2021 Luca Kiebel</Slogan>
          <Slogan><Link href="/imprint">Imprint</Link></Slogan>
        
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://link.luca-kiebel.de/Bunavc">
            <FaGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://link.luca-kiebel.de/soM9A5">
            <FaLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://link.luca-kiebel.de/5UH0dk">
            <FaTwitter size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://link.luca-kiebel.de/YBlyq4">
            <FaStackOverflow size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
