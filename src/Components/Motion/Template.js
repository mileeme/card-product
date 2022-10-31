/** @jsxImportSource @emotion/react */

import { keyframes } from "@emotion/react";
import Section from "../Container/Section";
import Container from "../Container/Container";
import Typography from "../Typography";
import Button from "../Button/Button";
import { theme } from "../../Styles/theme";

const { palette, mq} = theme;

export default function Section1() {

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
  const durationExtraLong2 = "1200ms";
  const durationExtraLong4 = "1600ms";
  const easingStandardDecelerate = "cubic-bezier(0, 0, 0, 1)";
  const easingEmphasizedDecelerate = "cubic-bezier(0.05, 0.7, 0.1, 1)";
  const direction = "forwards";


  return (<Section css={{padding: 0, position: "relative"}}>

    {/* Section 1 */}
    <Section>
      <div css={{padding: 48}} lg>Motion based on KIM module moving up a distance of 600px</div>
      <Container css={{display: "flex", gap: 32}} lg>

        {/* ******* MOTION TEST ******* */}

        {/* 1 KIM EMPHASIZED DECELERATE / DURATION EXTRA LONG 2 */}
        <div css={{
          opacity: 0,
          width: 428, 
          height: 489,
          position: "sticky", 
          top: 120, 
          right: 0, 
          borderRadius: 8, 
          backgroundColor: palette.white,
          boxShadow: "0px 0px 40px -8px rgba(0, 0, 0, 0.16),0 0 24px -16px rgba(0, 0, 0, 0.16)",
          animation: `${animateUp} ${easingEmphasizedDecelerate} ${durationExtraLong2} ${direction}`,
        }}
        >

          {/* Header */}
          <div css={{padding: "16px 32px", borderBottom: `1px solid ${palette.neutral.lightCopy}`, display: "flex", flexFlow: "column", gap: 8}}>
            <Typography label="Expressive decelerate" h2 />
            <Typography label="1200ms" body1/>
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

        {/* 2 KIM EMPHASIZED DECELERATE / DURATION EXTRA LONG 4 */}
        <div css={{
          opacity: 0,
          width: 428, 
          height: 489,
          position: "sticky", 
          top: 120, 
          right: 0, 
          borderRadius: 8, 
          backgroundColor: palette.white,
          boxShadow: "0px 0px 40px -8px rgba(0, 0, 0, 0.16),0 0 24px -16px rgba(0, 0, 0, 0.16)",
          animation: `${animateUp} ${easingEmphasizedDecelerate} ${durationExtraLong4} ${direction}`,
        }}
        >

          {/* Header */}
          <div css={{padding: "16px 32px", borderBottom: `1px solid ${palette.neutral.lightCopy}`, display: "flex", flexFlow: "column", gap: 8}}>
            <Typography label="Expressive decelerate" h2 />
            <Typography label="1600ms" body1/>
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

        {/* 3 KIM STANDARD DECELERATE / DURATION EXTRA LONG 4 */}
        <div css={{
          opacity: 0,
          width: 428, 
          height: 489,
          position: "sticky", 
          top: 120, 
          right: 0, 
          borderRadius: 8, 
          backgroundColor: palette.white,
          boxShadow: "0px 0px 40px -8px rgba(0, 0, 0, 0.16),0 0 24px -16px rgba(0, 0, 0, 0.16)",
          animation: `${animateUp} ${easingStandardDecelerate} ${durationExtraLong4} ${direction}`,
        }}
        >

          {/* Header */}
          <div css={{padding: "16px 32px", borderBottom: `1px solid ${palette.neutral.lightCopy}`, display: "flex", flexFlow: "column", gap: 8}}>
            <Typography label="Standard decelerate" h2 />
            <Typography label="1600ms" body1/>
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
        
        
        {/* Bottom content */}
      </Container>
      {/* <Container>content</Container> */}
    </Section>
  </Section>)
}