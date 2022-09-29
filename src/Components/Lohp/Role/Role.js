/** @jsxImportSource @emotion/react */

import { keyframes } from "@emotion/react";
import Container from "../../Container/Container";
import Section from "../../Container/Section";
import { theme } from "../../../Styles/theme";
import RoleTabs from "./RoleTabs";
import LinkWithIcon from "../../Link/LinkWithIcon";
import Typography from "../../Typography";


const animateUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(1px, 100px, 40px);
  }
  to {
    opacity: 1;
    transform: translate3d(0);
  }
`;
// Animation speed
const speed1 = "0.8s";
const delay1 = "0.5s";
const speedType1 = "cubic-bezier(0, 1, 0.9, 1)";
const direction = "forwards";

export default function Role() {
  const { mq, palette } = theme;

  return (
    <Section bgColor={palette.background.grayLight} >
      <Container
        css={{
          opacity: 0,
          animation: `${animateUp} ${speedType1} ${speed1} ${direction} ${delay1}`,
        }}
        lg
      >
        {/* H2 heading */}
        <div css={{display: "flex", flexFlow: "column", gap: 16, marginBottom: 16, [mq[2]]: {flexFlow: "row", alignItems: "center"}}}>
          <h2 css={{margin: 0}}><Typography label="Get job-ready for in-demand careers" h1Semibold /></h2>
          <LinkWithIcon
            label={`View more roles`}
            icon='arrowNext'
            size='sm'
          />        
        </div>

        <RoleTabs />

      </Container>
    </Section>
  );
}
