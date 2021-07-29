import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>
      Here are the projects I participate in
    </SectionText>
    <GridContainer>
      {projects.slice().reverse().map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} alt={p.title}/>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <div>
              <br />
              <TitleContent>Luca's Position</TitleContent>
              <TagList>
                {p.position.map((t,i) => {
                  return <Tag key={i}>{t}</Tag>
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.visit && <ExternalLinks href={p.visit}>Visit</ExternalLinks>}
              {p.source && <ExternalLinks href={p.source}>Source</ExternalLinks>}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;