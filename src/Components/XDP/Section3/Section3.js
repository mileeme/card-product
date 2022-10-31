/** @jsxImportSource @emotion/react */

import Section from "../../Container/Section";
import Container from "../../Container/Container";
import Col from "../../Container/Col";
import Typography from "../../Typography";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import { theme } from "../../../Styles/theme";
import Link from "../../Link/Link";
import RatingStar from "../../Rating/RatingStar";
import Accordion from "../../Accordion/Accordion";
import xdpInstructor from "../../../Assets/xdpInstructorKIM.png";
import Tag from "../../Tag/Tag";

export default function Section3() {
  const { palette } = theme;
  return (
    <Section css={{display: "flex", flexFlow: "column", gap: 48}}>
      {/* Title and summary */}
      <Container lg>
        <Col type="7" gap="32" totalGap="1">
          <h2 css={{margin: 0, paddingBottom: 24}}>
            <Typography label="Professional Certificate - 8 course series" h1 />
          </h2>
          <Typography label="Prepare for a new career in the high-growth field of data analytics, no experience or degree required. Get professional training designed by Google and have the opportunity to connect with top employers. There are 380,000 U.S. job openings in data analytics with a $74,000 median entry-level salary.¹" body1 />
          <Button label="Read more" variant="ghostPrimary" size="sm" margin="negativeLeft" />
        </Col>
      </Container>

      {/* Course */}
      <Container css={{display: "flex", gap: 32, justifyContent: "space-between"}} lg>
        
        {/* Each course */}
        <Col css={{border: `1px solid ${palette.neutral.lightCopy}`, borderRadius: 8, overflow: "hidden"}} type="7" gap="32" totalGap="1">
          {/* Bar */}
          <div css={{height: 16, width: "100%", backgroundColor: palette.background.blue}}></div>

          {/* Content */}
          <div css={{padding: "16px 24px"}}>

            {/* Section 1 */}
            <div css={{paddingBottom: 24, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}>
              <h3 css={{margin: 0, paddingBottom: 4}}><Link label="Foundations: Data, Data, Everywhere" size="h2" /></h3>
              <div css={{display: "flex", gap: 8, alignItems: "center"}}>
                <Typography label="Course 1" css={{color: palette.neutral.default}} body2 />
                <Typography label="•" css={{color: palette.neutral.default}} body2 />
                <Typography label="18 hours" css={{color: palette.neutral.default}} body2 />
                <Typography label="•" css={{color: palette.neutral.default}} body2 />
                <RatingStar rating="4.9" reviews="3,432" />
              </div>
              <Accordion icon="chevronNext"/>
            </div>

            {/* Section 2 */}
            <div css={{padding: "24px 0", borderBottom: `1px solid ${palette.neutral.lightCopy}`}}>
              <h3 css={{margin: 0, paddingBottom: 4}}><Link label="Ask Questiosn to Make Data-driven Decisions" size="h2" /></h3>
              <div css={{display: "flex", gap: 8, alignItems: "center"}}>
                <Typography label="Course 2" css={{color: palette.neutral.default}} body2 />
                <Typography label="•" css={{color: palette.neutral.default}} body2 />
                <Typography label="18 hours" css={{color: palette.neutral.default}} body2 />
                <Typography label="•" css={{color: palette.neutral.default}} body2 />
                <RatingStar rating="4.9" reviews="3,432" />
              </div>
              <Accordion icon="chevronDown2" />
            </div>

              
          </div>
          
        </Col>


        {/* NEW NEW NEW NEW NEW WIP WIP WIP */}
        {/* Instructor and partner */}
        <div css={{width: 459, padding: 32, border: `1px solid ${palette.neutral.lightCopy}`, borderRadius: 8}}>

          {/* Title */}
          <h3 css={{margin: 0, padding: 0}}>
            <Typography label="Instructors" h2/>
          </h3>

          {/* Instructor meta data */}
          <div css={{display: "flex", gap: 16}}>
            {/* Contextual help */}
            <div css={{display: "flex", alignItems: "center", gap: 4}}>
              <Typography label="Instructor ratings" css={{color: palette.neutral.default}} body2 />
              <div css={{height: 14, width: 14, borderRadius: 100, backgroundColor: palette.background.blue, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: palette.white}}>i</div>
            </div>
            {/* Rating */}
            <RatingStar rating="4.5" reviews="1.7k" />
          </div>

          {/* Instructor avatar */}
          <div css={{display: "flex", gap: 16}}>
            <div css={{height: 64, width: 64, backgroundColor: palette.neutral.disabled, border: `1px solid ${palette.white}`, borderRadius: 100}}></div>
            <div css={{display: "grid" }}>
              <Tag label="Top instructor" />
              <Link label="Taught by Google Staff" size="h3" />
              <Typography label="Google" body2 />
              {/* Meta data */}
              <div css={{display: "flex", gap: 8, alignItems: "center"}}>
                <Typography label="12 Courses" css={{color: palette.neutral.default, whiteSpace: "nowrap"}} body2 />
                <Typography label="•" css={{color: palette.neutral.default, whiteSpace: "nowrap"}} body2 />
                <Typography label="1,368,401 learners" css={{color: palette.neutral.default, whiteSpace: "nowrap"}} body2 />
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        {/* END OF NEW */}
        
        <img src={xdpInstructor} width="459px" />
      </Container>

    </Section>
  )
}