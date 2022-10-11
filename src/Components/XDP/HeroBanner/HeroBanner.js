/** @jsxImportSource @emotion/react */

import Section from "../../Container/Section";
import Container from "../../Container/Container";
import Col from "../../Container/Col";
import { theme } from "../../../Styles/theme";
import { googleFull } from "../../Icon/PartnerLogo";
import Typography from "../../Typography";
import Button from "../../Button/Button";

export default function HeroBanner() {
  const { palette } = theme;

  return (
    <Section bgColor="rgba(0, 86, 210, 0.05)">
      <Container css={{display: "grid", gap: 32}} lg>
      {/* Content */}
        <Col css={{display: "grid", gap: 32}} type="8" gap="32" totalGap="1">

          {/* Main summary */}
          <div css={{display: "grid", gap: 16}}>
            <div css={{display: "grid", gap: 16}}>
              <img src={googleFull} width="145px"/>
              <Typography label="Google Data Analytics Professional Certificate" d2Semibold />
            </div>
            <Typography label="This is your path to a career in data analytics. In this program, you’ll learn in-demand skills that will have you job-ready in less than 6 months. No degree or experience required." body1 />
          </div>
          {/* Value props */}
          <div css={{display: "flex", gap: 64}}>

            {/* Single value */}
            <div css={{display: "flex", height: 64, gap: 16}}>
              {/* bar */}
              <div css={{height: "100%", width: 3, backgroundColor: palette.information.default }}></div>
              {/* label */}
              <div css={{display: "grid", alignItems: "center"}}>
                <Typography label="Get career-ready" h3 />
                <Typography label="Short value prop description goes here" body1 />
              </div>
            </div>

            {/* Single value */}
            <div css={{display: "flex", height: 64, gap: 16}}>
              {/* bar */}
              <div css={{height: "100%", width: 3, backgroundColor: palette.information.default }}></div>
              {/* label */}
              <div css={{display: "grid", alignItems: "center"}}>  
                <Typography label="Earn credit towards a degree" h3 />
                <div css={{display: "inline-block"}}>
                  <Button label="Learn more" size="sm" variant="ghostPrimary" margin="negativeLeft"/>
                </div>
              </div>
            </div>
          </div>

          {/* Instructors */}
          <div css={{display: "flex", gap: 8, alignItems: "center"}}>
            {/* Avatars */}
            <div css={{display: "flex"}}>
              <div css={{height: 36, width: 36, backgroundColor: palette.neutral.disabled, border: `1px solid ${palette.white}`, borderRadius: 100}}></div>
              <div css={{marginLeft: -10, height: 36, width: 36, backgroundColor: palette.neutral.disabled, border: `1px solid ${palette.white}`, borderRadius: 100}}></div>
              <div css={{marginLeft: -10, height: 36, width: 36, backgroundColor: palette.neutral.disabled, border: `1px solid ${palette.white}`, borderRadius: 100}}></div>
            </div>
            <Typography label="Instructors: Barbara Oakly" body1 />
            <Button label="+5 more" size="sm" variant="ghostPrimary" margin="negativeLeft" />

          </div>
        </Col>
      </Container>
    </Section>
  )
}