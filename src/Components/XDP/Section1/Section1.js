/** @jsxImportSource @emotion/react */

// import HeroBanner from "../HeroBanner/HeroBanner";
import {useState, useEffect} from "react";
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

export default function Section1() {
  const [scrollPos, setScrollPos] = useState(0);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [stickyButton, setStickyButton] = useState(false);
  const [titleBottomPos, setTitleBottomPos] = useState(0);
  const [enrollButtonBottomPos, setEnrollButtonBottomPos] = useState(0);

  // Get ref position
  useEffect(() => {
    const titleBottom = document.getElementById("title").getBoundingClientRect().bottom;
    const enrollButtonBottom = document.getElementById("button").getBoundingClientRect().bottom;
    console.log(enrollButtonBottom)
    setTitleBottomPos(titleBottom);
    setEnrollButtonBottomPos(enrollButtonBottom);

    setStickyHeader(titleBottom < 60);
    setStickyButton(enrollButtonBottom < 100);

    if (titleBottom > 60) {
      setStickyHeader(false);
    }

    if (enrollButtonBottom > 100) {
      setStickyButton(false);
    }
  }, [scrollPos]);

  // Get scroll position
  const handleScroll = () => {
    // Y scroll position
    const currentScrollPos = Math.round(window.scrollY);
    setScrollPos(currentScrollPos);
  };

  // Event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (<Section css={{padding: 0, position: "relative"}}>

    {/* Sticky header */}
    <div css={{position: "sticky", display: stickyHeader ? "block" : "none", top: 0, backgroundColor: palette.white, zIndex: 100}}>
      <Container css={{display: "flex", alignItems: "center", height: 48, justifyContent: "space-between"}} lg>
        <div css={{display: "flex", alignItems: "center", gap: 16}}>
          <img src={googleFull} width="78px" />
          <Typography label="Google Project Management Professional Certificate" h3Bold />
        </div>
        <Button css={{display: stickyButton ? "block" : "none"}} variant="primary" size="sm" label="Enroll for Free" />
      </Container>
      <div css={{width: "100%", borderBottom: `1px solid ${palette.neutral.lightCopy}`}}></div>
      <Container css={{height: 52, display: "flex", alignItems: "center"}} lg><Tabs /></Container>
    </div>

    {/* Breadcrumb */}
    <Breadcrumb />

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
          <div css={{width: 428, position: "sticky", top: 120, right: 0, borderRadius: 8, border: `1px solid ${palette.neutral.lightCopy}`, boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px", backgroundColor: palette.white}}>

            {/* Header */}
            <div css={{padding: "16px 32px", borderBottom: `1px solid ${palette.neutral.lightCopy}`, display: "flex", flexFlow: "column"}}>
              <Typography label="Professional Certificate — 8 course series" h2 />
              <Typography label="Earn a career credential that demonstrates your expertise" body2 />
            </div>

            {/* Summary */}
            <div css={{padding: "16px 32px", display: "flex", flexFlow: "column", gap: 16 }}>
              {/* Level */}
              <div css={{display: "flex", flexFlow: "column"}}>
                <Typography label="Intermediate" css={{padding: 0, margin: 0}} h2 />
                <Link label="Recommended experience" size="body2" />
              </div>
              {/* Duration */}
              <div css={{display: "flex", flexFlow: "column"}}>
                <Typography label="6 months at 10 hours/week" css={{padding: 0, margin: 0}} h2 />
                <Typography label="240 hours (approximately)" body2 />
              </div>
              {/* Schedule */}
              <div css={{display: "flex", flexFlow: "column"}}>
                <Typography label="Flexible schedule" css={{padding: 0, margin: 0}} h2 />
                <Typography label="Set and maintain flexible deadlines" body2 />
              </div>
              {/* Rating */}
              <RatingStar rating="4.8 / 5" reviews="14,536" />

              <Button id="button" label="Enroll" variant="primary" size="md" css={{height: 55}} />

              {/* Category */}
              <div css={{display: "flex", gap: 8}}>
                <div css={{display: "flex", alignItems: "center", gap: 4}}>
                  <span css={{backgroundColor: palette.background.blue, borderRadius: 4, height: 16, padding: "0 4px", display: "flex", alignItems: "center"}}><Typography label="PLUS" css={{color: palette.white}} h4/></span>
                  <Link label="Included with Coursera Plus" size="body2" />
                </div>
                <Typography label="•" css={{color: palette.neutral.default}} body2 />
                <Link label="Financial aid available" size="body2" />
              </div>   
              
              {/* Footer */}
              <div css={{borderTop: `1px solid ${palette.neutral.lightCopy}`, margin: "16px 0 0 0", paddingTop: 16 }}>
                <Button label="View 8 course curriculum" variant="ghostPrimary" size="sm" />
              </div>
            </div>

          </div>
        </Col>

      </Container>

    </Section>
    <Section2 />
    <Section3 />
  </Section>)
}