/** @jsxImportSource @emotion/react */

import { keyframes } from "@emotion/react";
import Section from "../Container/Section";
import Container from "../Container/Container";
import Typography from "../Typography";
import Button from "../Button/Button";
import Col from "../Container/Col";
import Icon from "../Icon/Icon";
import TagGroup from "../Tag/TagGroup";
import Tag from "../Tag/Tag";
import { theme } from "../../Styles/theme";
import Section2 from "../XDP/Section2/Section2";
import Tabs from "../Tab/Tabs";
import { googleFull } from "../Icon/PartnerLogo";

const skills = [
  "Data Visualization (DataViz)",
  "Data Cleansing",
  "Data Analysis",
  "Data Collection",
  "Data Ethics",
  "Decision-Making",
  "MetaData",
  "Problem Solving",
  "Sample Size Determination",
  "Questioning",
  "SQL",
  "Spreadsheet"
]

const { palette, mq} = theme;

export default function MotionTest() {

  // KIM style
  const animateUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(600px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `

  // Animation speed
  const durationExtraLong1 = "800ms";
  const durationExtraLong2 = "1200ms";
  const durationExtraLong4 = "1600ms";
  const easingStandardDecelerate = "cubic-bezier(0, 0, 0, 1)";
  const easingEmphasizedDecelerate = "cubic-bezier(0.05, 0.7, 0.1, 1)";
  const direction = "forwards";


  return (<Section css={{padding: 0, position: "relative"}}>


    {/* Breadcrumb */}
    <div>Breadcrumb</div>

    {/* Section 1 */}
    <Section css={{padding: 0}}>
      {/* Hero banner background color hack */}
      <div css={{[mq[2]]:{height: 435}, height: 500, backgroundColor: "rgba(0, 86, 210, 0.05)", position: "absolute", top: 0, left: 0, right: 0, zIndex: 0}}></div>
      <Container css={{display: "flex", gap: 32}} lg>
        {/* Left */}
        <Col type="8" gap="32" totalGap="1">

          {/* Banner */}
          <div css={{display: "grid", gap: 32, padding: "48px 0"}}>

          {/* Main summary */}
          <div css={{display: "grid", gap: 16}}>
            <div id="title" css={{display: "grid", gap: 16}}>
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
          </div>

          {/* What you'll learn */}
          <div css={{display: "grid", gap: 48, padding: "48px 0"}}>
          <div css={{display: "grid", gap: 16}}>
            <Typography label="What you'll learn" h2/>
            <div css={{display: "flex", flexWrap: "wrap", gap: 24}}>
              <Col css={{display: "flex", gap: 16}} type="6" gap="24" totalGap="1">
                <Icon type="check" size="lg" button="ghostPrimary" />
                <Typography label="Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job" body1 />
              </Col>  

              <Col css={{display: "flex", gap: 16}} type="6" gap="24" totalGap="1">
                <Icon type="check" size="lg" button="ghostPrimary" />
                <Typography label="Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau)" body1 />
              </Col>   
              <Col css={{display: "flex", gap: 16}} type="6" gap="24" totalGap="1">
                <Icon type="check" size="lg" button="ghostPrimary" />
                <Typography label="Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL and R programming" body1 />
              </Col>  
              <Col css={{display: "flex", gap: 16}} type="6" gap="24" totalGap="1">
                <Icon type="check" size="lg" button="ghostPrimary" />
                <Typography label="Learn how to visualize and present data findings in dashboards, presentations and commonly used visualization platforms" body1 />
              </Col>   
            </div>
          </div>

          {/* Skills you'll gain */}
          <div css={{display: "grid", gap: 16}}>
            <Typography label="Skills you'll gain" h2/>
            <TagGroup gap="12">
              {skills && skills.map((skill, index) => {
                return <Tag key={index} label={skill} />
              })}
              <Button variant="ghostPrimary" size="sm" label="View all" />
            </TagGroup>
          </div>

          {/* Details you'll gain */}
          <div css={{display: "grid", gap: 16}}>
            <Typography label="Details you'll gain" h2/>
            <div css={{display: "flex", gap: 24}}>

              {/* Single detail */}
              <div css={{height: 16, width: "100%", backgroundColor: palette.background.gray}}></div>

              {/* Single detail */}
              <div css={{height: 16, width: "100%", backgroundColor: palette.background.gray}}></div>

              {/* Single detail */}
              <div css={{height: 16, width: "100%", backgroundColor: palette.background.gray}}></div>
            </div>
          </div>
          </div>
        </Col>

        {/* Right */}
        <Col type="4" gap="32" totalGap="1" css={{padding: "48px 0"}}>

          {/* 1 KIM EMPHASIZED DECELERATE / DURATION EXTRA LONG 1 */}
          <div css={{
            width: 428, 
            height: 489,
            position: "sticky", 
            top: 120, 
            right: 0, 
            borderRadius: 8, 
            backgroundColor: palette.white,
            boxShadow: "0px 0px 40px -8px rgba(0, 0, 0, 0.16),0 0 24px -16px rgba(0, 0, 0, 0.16)",
            animation: `${animateUp} ${easingEmphasizedDecelerate} ${durationExtraLong1}`,
          }}
          >

            {/* Header */}
            <div css={{padding: "16px 32px", borderBottom: `1px solid ${palette.neutral.lightCopy}`, display: "flex", flexFlow: "column", gap: 8}}>
              <Typography label="Expressive decelerate" h2 />
              <Typography label="800ms" body1/>
            </div>

            {/* Summary */}
            <div css={{padding: "16px 32px", display: "flex", flexFlow: "column", gap: 16 }}>
              {/* Level */}
              <div css={{display: "flex", flexFlow: "column"}}>
                <div css={{height: "1.25rem", width: "100%", backgroundColor: palette.background.gray}}></div>
              </div>
              {/* Duration */}
              <div css={{display: "flex", flexFlow: "column", gap: 8}}>
                <div css={{height: "1.25rem", width: "100%", backgroundColor: palette.background.gray}}></div>
                <div css={{height: "1.25rem", width: "80%", backgroundColor: palette.background.gray}}></div>
              </div>
              {/* Schedule */}
              <div css={{display: "flex", flexFlow: "column", gap: 8}}>
                <div css={{height: "1.25rem", width: "100%", backgroundColor: palette.background.gray}}></div>
                <div css={{height: "1.25rem", width: "80%", backgroundColor: palette.background.gray}}></div>
              </div>
              {/* Rating */}
              <div css={{height: 16, width: 120, backgroundColor: palette.background.gray}}></div>

              <Button id="button" label="Enroll" variant="primary" size="md" css={{height: 55}} />

              {/* Category */}
              <div css={{height: 16, width: 180, backgroundColor: palette.background.gray}}></div>
              
              {/* Footer */}
              <div css={{borderTop: `1px solid ${palette.neutral.lightCopy}`, margin: "16px 0 0 0", paddingTop: 16 }}>
                <Button label="View 8 course curriculum" variant="ghostPrimary" size="sm" margin="negativeLeft" />
              </div>
            </div>

          </div>
        </Col>

      </Container>

    </Section>
    <Section2 />
  </Section>)
}