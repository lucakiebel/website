import React from 'react';
import { LinkItem, SubSectionTitle } from './ImprintStyles';
import { Section, SectionSubText, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';


const Imprint = () => {
    return(
    <div>
    <Section>
        <SectionTitle>Impressum – Legal Notice</SectionTitle>
        <SectionSubText>Information in accordance with section 5 TMG</SectionSubText>
        <SectionDivider />
        <SectionText>
        <br />
            Kiebel UG (haftungsbeschränkt)<br />
            Represented by the Managing Director:<br />
            Luca Kiebel
        </SectionText>
        <SectionSubText>
            Legal Headquarters
        </SectionSubText>
        <SectionText>
        Jostesstraße 9<br />
            48147 Münster<br />
            Germany
        </SectionText>
        <SectionText>
            Telephone: <LinkItem href="tel:004925192873030">+49-251-9287-303-0</LinkItem> <br />
            Email: <LinkItem href="mailto:domains@luca-kiebel.de">domains@luca-kiebel.de</LinkItem>
        </SectionText>
        <SectionText>
            <SubSectionTitle>Persons responsible for content in accordance with setion 18 Abs. 2 MStV:</SubSectionTitle> <br />
            Luca Kiebel
        </SectionText>
        <SectionSubText>This Legal Notice also applies to <LinkItem href="https://luca.lk">https://luca.lk</LinkItem>.</SectionSubText>
    </Section>
    <Section>
        <SectionTitle>Disclaimer</SectionTitle>
        <SectionText>
            <SubSectionTitle>Accountability for content</SubSectionTitle><br />
            The contents of my pages have been created with the utmost care. However, I cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, I am furthermore responsible for my own content on these web pages. In this context, please note that I am accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. My obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
            <br /> <br />
            <SubSectionTitle>Accountability for links</SubSectionTitle> <br />
            Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to me at the time of linking. Should any legal infringement become known to me, I will remove the respective link immediately.
            <br /> <br />
            <SubSectionTitle>Copyright</SubSectionTitle><br />
            My web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on my web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).

        </SectionText>
    </Section>
    </div>
    );
}

export default Imprint;
