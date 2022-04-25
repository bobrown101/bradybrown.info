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
        <Link href="/contact">
          <a className="styled nav-link">Contact Me</a>
        </Link>
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
      </Header>
      <Section title={"ABOUT"}>
        <Paragraph>
          I am a <Bold>Senior Software Engineer @ Hubspot</Bold> in Boston, MA.
          
          I focus on building frontend web applications at enterprise scale.
        </Paragraph>
      </Section>
      <Section title={"EXPERIENCE"}>
      <ExperienceItem
          company={"Hubspot – CRM"}
          dateFrom={"11/2021"}
          dateTo={"Present"}
          position={"Senior Software Engineer"}
          location={"Boston, MA"}
          content={[
          `Acted as a Senior Sotware Engineer (Frontend/React) on the highest trafficked page at all of Hubspot (over 1 million weekly active users)`,
          `Proposed, planned, developed, and shipped multiple new features that added value to our customers tied directly to MRR increases`,
          `DRI'ed multiple company wide refactors, some spanning over 80+ product teams`,
          <i>Tech Stack: React/Redux/Graphql+Apollo/Feature Flags/New Relic/Sentry</i>
          ]}
        />
      <ExperienceItem
          company={"Hubspot – CRM"}
          dateFrom={"08/2020"}
          dateTo={"10/2021"}
          position={"Software Engineer"}
          location={"Boston, MA"}
          content={[
          ]}
        />
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
          environment (created with Java/Spring).`
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
