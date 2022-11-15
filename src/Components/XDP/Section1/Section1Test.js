/** @jsxImportSource @emotion/react */

import Section from "../../Container/Section";
import Container from "../../Container/Container";
import Typography from "../../Typography";
import Button from "../../Button/Button";
import Col from "../../Container/Col";
import Icon from "../../Icon/Icon";
import TagGroup from "../../Tag/TagGroup";
import Tag from "../../Tag/Tag";
import { theme } from "../../../Styles/theme";
import Detail from "./Detail";
import Link from "../../Link/Link";
import RatingStar from "../../Rating/RatingStar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Tabs from "../../Tab/Tabs";
import Accordion from "../../Accordion/Accordion";
import { googleFull } from "../../Icon/PartnerLogo";
import Kim from "../../Kim/Kim";

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

export default function Section1Test() {

  return (
  <Section css={{padding: 0, position: "relative"}}>

    {/* Breadcrumb */}
    <Breadcrumb />

    {/* Section 1 */}
    <Section css={{padding: 0}}>

      {/* Hero banner background color hack */}
      <div css={{[mq[2]]:{height: 420}, height: 500, backgroundColor: "#0056D2", opacity: "5%", position: "absolute", top: 0, left: 0, right: 0, zIndex: 0}}></div>

      <Container css={{display: "flex", gap: 32}} lg>
        {/* Left */}
        <Col type="8" gap="32" totalGap="1">

          {/* Banner */}
          <Col type="10" gap="32" totalGap="1" css={{display: "grid", gap: 32, padding: "64px 0 48px 0"}}>

            {/* Main summary */}
            <div css={{display: "grid", gap: 16}}>
              <div id="title" css={{display: "grid", gap: 16}}>
                <img src={googleFull} width="145px"/>
                <Typography label="Google Data Analytics Professional Certificate" d2Semibold />
              </div>
              <Typography css={{color: palette.neutral.default}} label="This is your path to a career in data analytics. In this program, you’ll learn in-demand skills that will have you job-ready in less than 6 months. No degree or experience required." body1 />
            </div>

            {/* Instructors */}
            <div css={{display: "flex", gap: 8, alignItems: "center"}}>
              
              {/* Avatars */}
              <div css={{display: "flex"}}>
                <div css={{height: 36, width: 36, backgroundColor: palette.neutral.disabled, border: `1px solid ${palette.white}`, borderRadius: 100}}></div>
                <div css={{marginLeft: -10, height: 36, width: 36, backgroundColor: palette.neutral.disabled, border: `1px solid ${palette.white}`, borderRadius: 100}}></div>
                <div css={{marginLeft: -10, height: 36, width: 36, backgroundColor: palette.neutral.disabled, border: `1px solid ${palette.white}`, borderRadius: 100}}></div>
              </div>
              <Typography label="Instructors:" body1 />
              <a><Typography label="Barbara Oakly" body1 /></a>
              <Button label="+5 more" size="sm" variant="ghostPrimary" margin="negativeLeft" />
            </div>
          </Col>

          {/* What you'll learn */}
          <div css={{display: "grid", gap: 48, padding: "48px 0"}}>

            {/* Sticky header */}
            <div css={{
              position: "sticky",         
              top: 0,
              height: 100,
              transition: "all 0.4s cubic-bezier(0, 0, 0.35, 1.07)", 
              backgroundColor: palette.white, 
              zIndex: 100}}
            >
              {/* Course label + CTA */}
              <div css={{display: "flex", alignItems: "center", height: 48, justifyContent: "space-between"}}>
                <div css={{display: "flex", alignItems: "center", gap: 16}}>
                  <img src={googleFull} width="78px" />
                  <Typography label="Google Project Management Professional Certificate" h3Bold />
                </div>
                <Button css={{display: "none"}} variant="primary" size="sm" label="Enroll for Free" />
              </div>

              {/* Divider */}
              <div css={{width: "100%", borderBottom: `1px solid ${palette.neutral.lightCopy}`}}></div>

              {/* Anchor tabs */}
              <div css={{height: 52, display: "flex", alignItems: "center"}} lg><Tabs /></div>
            </div>

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
                <Detail iconType="comment" title="English" subtitle="Subtitles: English, Spanish," button="+7 more" />

                {/* Single detail */}
                <Detail iconType="bell" title="Recently updated" subtitle="May 2022" />

                {/* Single detail */}
                <Detail partnerType="linkedin" title="Shareable certificate" subtitle="Share on your LinkedIn profile" />
              </div>
            </div>
          </div>
        </Col>

        {/* Right */}
        <Col type="4" gap="32" totalGap="1" css={{padding: "48px 0"}}>

          {/* KIM */}
          <Kim />
        </Col>

      </Container>

    </Section>
    <Section2 />
    <Section3 />
  </Section>)
}