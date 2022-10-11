/** @jsxImportSource @emotion/react */

import Typography from "../../Typography";
import Container from "../../Container/Container";
import Section from "../../Container/Section";
import {theme} from "../../../Styles/theme";
import GoalTabs from "./GoalTabs";
import LinkWithIcon from "../../Link/LinkWithIcon";

export default function CareerGoal() {
  const { mq } = theme;

  return (
    <Section bgColor={theme.palette.white}>
      <Container lg> 
        {/* <h2 css={{marginBottom: 16}}><Typography label="Build the skills to achieve your career goals" h1Semibold /></h2> */}

        {/* H2 heading */}
        <div css={{display: "flex", flexFlow: "column", gap: 16, marginBottom: 16, [mq[2]]: {flexFlow: "row", alignItems: "center"}}}>
          <h2 css={{margin: 0}}><Typography label="Build the skills to achieve your career goals" h1 /></h2>
          <LinkWithIcon
            label={`View more topics`}
            icon='arrowNext'
            size='sm'
          />        
        </div>
        <GoalTabs />
      </Container>
    </Section>

  );
}
