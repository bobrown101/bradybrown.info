import Title from "../components/Title";
import Header from "../components/Header";
import PersonalLinks from "../components/PersonalLinks";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Bold from "../components/Bold";
import ExperienceItem from "../components/ExperienceItem";
import GlobalStyles from "../components/GlobalStyles";
import Link from 'next/link'

export default () => {
  return (
    <div>
      <GlobalStyles />
      <Header>
        <Title>Brady Brown</Title>
        <PersonalLinks
          links={[
            {
              url: "http://github.com/bobrown101",
              icon: "/icons/github-logo.png"
            },
            {
              url: "https://www.linkedin.com/in/brady-oliver-brown/",
              icon: "/icons/linkedin-logo.png"
            }
          ]}
        />
        <Link href="/contact">
          <a className="styled">Contact Me</a>
        </Link>
      </Header>
      <Section title={"ABOUT"}>
        <Paragraph>
          I am a <Bold>Software Engineering</Bold> major at the Rochester
          Institute of Technology, and an incoming Software Engineer at Hubspot
          in Cambridge, MA.
        </Paragraph>
      </Section>
      <Section title={"EXPERIENCE"}>
        <ExperienceItem
          company={"MassMutual – Digital Experience"}
          dateFrom={"05/2018"}
          dateTo={"01/2020"}
          position={"Software Development Co-op"}
          location={"Boston, MA"}
          content={[
            `Acted as a key contributor to the Interactive Content and Tools
          team, the statistically highest engaging content on all of
          MassMutual.com`,
            `Designed and implemented a complete overhaul of CI/CD pipeline for
          all repositories owned by the team`,
            `Created and maintained a React Component Library used by numerous
          teams across the organization`,
            `Developed and integrated an A/B testing framework into React
          applications`
          ]}
        />
        <ExperienceItem
          company={"CUBRC"}
          dateFrom={"08/2017"}
          dateTo={"12/2017"}
          position={"Software Development Co-op"}
          location={"Buffalo, NY"}
          content={[
            `Acted as a key contributor to a big data / data fusion application
          developed for the Office of Naval Research in an Agile team
          environment. It was created with Java/Spring and use cases
          included identifying smuggling, human trafficking, illegal
          operations under shell corporations, etc.`
          ]}
        />
        <ExperienceItem
          company={"Naval Research Lab (Harris)"}
          dateFrom={"05/2016"}
          dateTo={"08/2016"}
          position={"Software Development Intern"}
          location={"Washington, DC"}
          content={[
            `Used Docker to automate deployment of multiple software projects
          `,
            `Designed and developed web-based visualization frameworks with D3.js to help interpret/analyze various networks of the US Navy`
          ]}
        />
        <ExperienceItem
          company={"Madglory Interactive"}
          dateFrom={"07/2014"}
          dateTo={"03/2015"}
          position={"Web Development Intern"}
          location={"Saratoga Springs, NY"}
          content={[
            `Designed and developed full stack web applications owned by Madglory and their clients`,
            `Interacted with clients, designers, and developers in an Agile team environment`
          ]}
        />
      </Section>
    </div>
  );
}
