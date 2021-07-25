import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCode size="3rem" /> <span>Luca Kiebel</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
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
      </Div3>
    </Container>
);

export default Header;
