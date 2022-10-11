/** @jsxImportSource @emotion/react */

import Section from "../../Container/Section";
import Container from "../../Container/Container";
import Typography from "../../Typography";
import Button from "../../Button/Button";
import Col from "../../Container/Col";
import Icon from "../../Icon/Icon";
import { theme } from "../../../Styles/theme";
import Link from "../../Link/Link";
import {
  michiganFull,
  meta,
  googleFull,
  salesforce,
  stanford,
  hubspot,
  deepLearningAiFull,
  google
} from "../../Icon/PartnerLogo";


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

const { palette } = theme;

export default function Section2() {
  return (
    <Section css={{padding: 0, display: "grid", gap: 48}}>

      {/* Job ready */}
      <Container lg>

        <div css={{display: "flex", justifyContent: "space-between", borderTop: `1px solid ${palette.neutral.lightCopy}`, paddingTop: 48 }}>
          {/* Content */}
          <Col type="5" gap="32" totalGap="4">
            <h2 css={{marginBottom: 24}}><Typography label="Get job-ready for a career in Data Analytics" h1 /></h2>
            <p css={{marginBottom: 24}}><Typography label="This professional certificate will help you achieve your career goals with:" body1 /></p>

            <ul css={{listStyle: "none", padding: 0, margin: 0}}>
              <li css={{display: "flex", gap: 8, alignItems: "center", marginBottom: 6}}>
                <Icon type="correctAnswer" size="sm" button="ghostPrimary" />
                <Typography label="Develop job-relevant skills and experience with key tools" body1 />
              </li>            
              <li css={{display: "flex", gap: 8, alignItems: "center", marginBottom: 6}}>
                <Icon type="briefcase" size="sm" button="ghostPrimary" />
                <Typography label="Complete hands-on projects for your portfolio" body1 />
              </li>           
              <li css={{display: "flex", gap: 8, alignItems: "center", marginBottom: 6}}>
                <Icon type="credit" size="sm" button="ghostPrimary" />
                <Typography label="Earn a employer-recognized certificate from Google" body1 />
              </li>           
              <li css={{display: "flex", gap: 8, alignItems: "center", marginBottom: 6}}>
                <Icon type="target" size="sm" button="ghostPrimary" />
                <div>
                  <Typography label="Receive career support and job-search resources, " body1 />
                  <Link label="learn more" size="body1" />
                </div>
              </li>
            </ul>
          </Col>

          {/* Analytics */}
          <Col type="7" gap="32" totalGap="1" css={{display: "grid", gridAutoFlow: "column", gap: 24, gridTemplateColumns: "repeat(2, 1fr)"}}>

            {/* Data 1 */}
            <div css={{padding: "20px 32px", backgroundColor: palette.background.blueLight, borderRadius: 8, display: "flex", flexDirection: "column", gap: 24}}>

              {/* Title */}
              <h3 css={{margin: 0, paddingBottom: 12, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}>
              <Typography label="Launch a career in Data Analytics" h2/>
              </h3>

              {/* Value props */}
              <div css={{display: "grid", gap: 16}}>
                {/* Single value */}
                <div css={{display: "flex", height: 48, gap: 12}}>
                  {/* bar */}
                  <div css={{height: "100%", width: 2, backgroundColor: palette.information.default }}></div>
                  {/* label */}
                  <div css={{display: "grid", alignItems: "center"}}>
                    <Typography label="$74,000+" h2Bold />
                    <Typography label="in-demand job openings in Data Analytics¹" css={{color: palette.neutral.default}} body1 />
                  </div>
                </div>

                {/* Single value */}
                <div css={{display: "flex", height: 48, gap: 12}}>
                  {/* bar */}
                  <div css={{height: "100%", width: 2, backgroundColor: palette.information.default }}></div>
                  {/* label */}
                  <div css={{display: "grid", alignItems: "center"}}>
                    <Typography label="53,606" h2Bold />
                    <Typography label="in-demand job openings in Data Analytics¹" css={{color: palette.neutral.default}} body1 />
                  </div>
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h4 css={{paddingBottom: 12, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}>
                  <Typography label="Learner career outcomes" h4 />
                </h4>

                {/* Single value */}
                <div css={{display: "flex", height: 48, gap: 12}}>
                  {/* bar */}
                  <Typography label="75%" h2Bold />
                  {/* label */}
                  <div css={{display: "grid", alignItems: "center"}}>
                    <Typography label="Google certificate grads report career improvement²" css={{color: palette.neutral.default}} body1 />
                  </div>
                </div>
              </div>
            </div> 

            {/* Data 2 */}
            <div css={{padding: "20px 32px", backgroundColor: palette.background.blueLight, borderRadius: 8, display: "flex", flexDirection: "column", gap: 24}}>

              {/* Title */}
              <h3 css={{paddingBottom: 12, margin: 0, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}>
              <Typography label="Qualify for in-demand jobs" h2/>
              </h3>

              {/* Jobs */}
              <ul css={{listStyle: "none", padding: 0, margin: 0}}>
                <li css={{display: "flex", alignItems: "center", height: 40, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}><Typography label="Data Analyst" body2/></li>
                <li css={{display: "flex", alignItems: "center", height: 40, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}><Typography label="Marketing Analyst" body2/></li>
                <li css={{display: "flex", alignItems: "center", height: 40, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}><Typography label="Business Analyst" body2/></li>
                <li css={{display: "flex", alignItems: "center", height: 40, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}><Typography label="Finance Analyst" body2/></li>
              </ul>

              {/* Projection */}
              <div css={{display: "flex", gap: 8}}>
                <Icon type="triangle" size="sm" button="ghostPrimary" />
                <Typography label="12.3% projected 10 year growth rate" css={{color: palette.neutral.default}} body2 />
              </div>
            </div> 
          </Col>
        </div>
      </Container>

      {/* Resources */}
      <Container lg>
        <h3>
          <Typography label="Graduates and get exclusive access to career resources and Google Coursera job platform" h2/>
        </h3>

        <div css={{display: "flex", gap: 32}}>
          <Col type="4" gap="0" totalGap="1">
            <Typography label="Impress in your interviews" h3 />
            <div>
              <Typography label="Practice and prepare for your first interview in a new field with help from " css={{color: palette.neutral.default}} body1 />
              <Link label="Big interview" size="body1" />
            </div>
          </Col>

          <Col type="4" gap="0" totalGap="1">
            <Typography label="Resume building workshops" h3 />
            <div>
              <Typography label="Enhance your resume with help from " css={{color: palette.neutral.default}} body1 />
              <Link label="Resume worded" size="body1" />
            </div>
          </Col>

          <Col type="4" gap="0" totalGap="1">
            <Typography label="Coaching sessions" h3 />
            <div>
              <Typography label="Navigate career transitions, promotions, and plan your long term career" css={{color: palette.neutral.default}} body1 />
            </div>
          </Col>
        </div>
      </Container>

      {/* Partners */}
      <Container css={{display: "grid", gap: 16, width: "100%" }} lg>
        <h4 css={{margin: 0, padding: 0}}>
          <Typography label="Connect with over 150 hiring partners that recognize the Professional certificate credential" h3/>
        </h4>
        <ul css={{display: "flex", gap: 32, alignItems: "center", listStyle: "none", padding: 0, margin: 0}}>
          <li css={{width: 64, height: 44, display: "flex", alignItems: "center"}}><img css={{width: "80%"}} src={michiganFull} /></li>
          <li css={{width: 64, height: 44, display: "flex", alignItems: "center"}}><img css={{width: "80%"}} src={meta} /></li>
          <li css={{width: 64, height: 44, display: "flex", alignItems: "center"}}><img css={{width: "80%"}} src={googleFull} /></li>
          <li css={{width: 64, height: 44, display: "flex", alignItems: "center"}}><img css={{width: "70%"}} src={salesforce} /></li>
          <li css={{width: 64, height: 44, display: "flex", alignItems: "center"}}><img css={{width: "80%"}} src={stanford} /></li>
          <li css={{width: 64, height: 44, display: "flex", alignItems: "center"}}><img css={{width: "80%"}} src={hubspot} /></li>
          <li css={{width: 120, height: 44, display: "flex", alignItems: "center"}}><img css={{width: "80%"}} src={deepLearningAiFull} /></li>
        </ul>
      </Container>

      {/* Footnote */}
      <Container css={{width: "100%"}} lg>
        <div css={{display: "grid", paddingBottom: 48, borderBottom: `1px solid ${palette.neutral.lightCopy}`}}>
          <Typography label="¹U.S. Burning Glass Labor Insight Report data (median with 0-5 years experience), 4/1/21-3/31/22." css={{color: palette.neutral.default}} body2 />
          <Typography label="²Career improvement (e.g. new job/career, promotion, raise) within 6 mos. of completion based on cert. grad survey responses, U.S. 2021." css={{color: palette.neutral.default}} body2 />
        </div>
      </Container>
    </Section>
  )
}