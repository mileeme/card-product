/** @jsxImportSource @emotion/react */

import {useState, useRef, useMemo, Fragment, useEffect} from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { theme } from "../../Styles/theme"
import Container from "../Container/Container"
import Section from "../Container/Section"
import Col from "../Container/Col"
import Typography from "../Typography";
import Icon from "../Icon/Icon"
import Button from "../Button/Button"
import DdpTabs from "./DdpTabs";
import "./ddp.css";

export default function DdpTabContent() {
  const [scrollPos, setScrollPos] = useState();
  const [stickyKim, setStickyKim] = useState(false)
  const kimRef = useRef()
  const { palette, mq} = theme;

  // get scroll position
  const handleScroll = () => {
    const currentScrollPos = Math.round(window.scrollY);
    setScrollPos(currentScrollPos);

    const kim = kimRef.current.getBoundingClientRect()
    if (kim.bottom < 0) {
      setStickyKim(true)
      console.log("sticky", kim.bottom)
    } else {
      setStickyKim(false)
      console.log("not sticky", kim.bottom)
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos, handleScroll]);


  return useMemo(() => (
    <Section css={{position: "relative", display: "grid", gap: 40}}>

      {/* Non sticky */}
      <div css={{width: "100%", backgroundColor: palette.white}} ref={kimRef}>
        <Container css={{display: "grid", gap: 24}} lg>
          {/* Kim */}
          <div css={{marginTop: -100, backgroundColor: palette.white,
          boxShadow: "0px 0px 40px -8px rgba(0, 0, 0, 0.16),0 0 24px -16px rgba(0, 0, 0, 0.16)", borderRadius: 8, padding: 32, display: "grid", gap: 24 }}>

            {/* Title */}
            <div css={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <Typography label="Master of Data Science" d2Semibold />
              <div css={{display: "flex", gap: 16}}>
                <Button variant="primary" size="md" label="Apply now" />
                <Button variant="secondary" size="md" label="Request info" />
              </div>
            </div>

            <div className="divider--horizontal"></div>

            {/* Meta data */}
            <div css={{display: "flex", gap: 16}}>
              <div css={{display: "grid"}}>
                <Typography label="Accredited online program" h2/>
                <Typography css={{color: palette.neutral.default}} label="Graduate from the University of Illinois Urbana-Champaign" body2 />
              </div>

              <div className="divider--vertical"></div>

              <div css={{display: "grid"}}>
                <Typography label="Accredited online program" h2/>
                <Typography css={{color: palette.neutral.default}} label="Graduate from the University of Illinois Urbana-Champaign" body2 />
              </div>

              <div className="divider--vertical"></div>

              <div css={{display: "grid"}}>
                <Typography label="Accredited online program" h2/>
                <Typography css={{color: palette.neutral.default}} label="Graduate from the University of Illinois Urbana-Champaign" body2 />
              </div>

              <div className="divider--vertical"></div>

              <div css={{display: "grid"}}>
                <Typography label="Accredited online program" h2/>
                <Typography css={{color: palette.neutral.default}} label="Graduate from the University of Illinois Urbana-Champaign" body2 />
              </div>
            </div>
          </div>

          {/* Tab */}
          <div css={{display: "flex", alignItems: "center"}}>
            <DdpTabs />
          </div> 
        </Container>
      </div>

      {/* Sticky KIM */}
      <div css={{display: stickyKim ? "block" : "none", position: "fixed", top: 0, left: 0, right: 0, height: stickyKim ? "auto" : 0, backgroundColor: palette.white, width: "100%"}}>
        <Container css={{display: "grid", gap: 4}} lg>
          {/* Kim */}
          <div css={{backgroundColor: palette.white, padding: "8px 0 0 0", display: "grid", gap: 24 }}>

            {/* Title */}
            <div css={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <Typography label="Master of Data Science" d2Semibold />
              <div css={{display: "flex", gap: 16}}>
                <Button variant="primary" size="md" label="Apply now" />
                <Button variant="secondary" size="md" label="Request info" />
              </div>
            </div>
            <div className="divider--horizontal"></div>
            <DdpTabs />
          </div>
        </Container>
      </div>

      {/* Tabs content */}
      <div className="evenBackground">
        
        {/* Section 1  */}
        <div className="section">
          <Container css={{display: "grid", gap: 32, [mq[2]]: {display: "grid", gap: 32, gridAutoFlow: "column", gridTemplateColumns: "2fr 1fr",}}} lg>
            {/* Column 8 */}
            <div css={{display: "grid", gap: 48}}>
              {/* Heading: Launch or grow your career... */}
              <div css={{display: "grid", gap: 16}}>
                <Typography label="Launch or grow your career in the high-paying field of data science" h1/>
                <Typography label="Our Master of Data Science (MS-DS) is aclassNameeal choice if you’re interested in the field of data science, no matter your academic background. With performance-based admissions, there’s no application process. You can start on any for-credit course to begin working towards your degree. Simply demonstrate you can do the work to gain admission to the degree. Pay-as-you-go tuition and a flexible path through the curriculum make this degree suitable for all ranges of experience." body1/>
              </div>

              {/* What's in this degree program? */}
              <div css={{display: "grid", gap: 16}}>
                <Typography label="What’s in this degree program?" h2/>
                <div css={{display: "grid", gap: 24, gridTemplateColumns: "repeat(2, 1fr)"}}>

                  <div css={{display: "grid", gridAutoFlow: "column", gap: 16}}>
                    <Icon type="check" size="lg" button="ghostNeutral" /> 
                    <Typography label="30 courses (30 credit hours) accredited by the Higher Learning Commission (HLC), which is part of the North Central Association of Colleges and Schools (NCA)" body1/>
                  </div>

                  <div css={{display: "grid", gridAutoFlow: "column", gap: 16}}>
                    <Icon type="check" size="lg" button="ghostNeutral" /> 
                    <Typography label="A combination of computer science or statistics courses, core courses, vital skills courses, and electives" body1/>
                  </div>

                  <div css={{display: "grid", gridAutoFlow: "column", gap: 16}}>
                    <Icon type="check" size="lg" button="ghostNeutral" /> 
                    <Typography label="Over 2000 hours of study materials including lecture videos, quizzes, written assignments, and hands-on projects for your portfolio" body1/>
                  </div>

                  <div css={{display: "grid", gridAutoFlow: "column", gap: 16}}>
                    <Icon type="check" size="lg" button="ghostNeutral" /> 
                    <Typography label="Weekly live online lectures and office hours with instructors and staff plus group work with peers" body1/>
                  </div>              
                  
                  <div css={{display: "grid", gridAutoFlow: "column", gap: 16}}>
                    <Icon type="check" size="lg" button="ghostNeutral" /> 
                    <Typography label="A robust and thriving alumni network and career services to help you succeed after graduation" body1/>
                  </div>


                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              {/* Join our upcoming webinar on Friday... */}
              <div css={{backgroundColor: palette.background.blueLight, borderRadius: 8, display: "grid", gap: 16, alignItems: "center", justifyContent: "center", padding: "40px 0px"}}>
                <Typography label="Join our upcoming webinar on Friday, October 14 at 7PM ET" h4/>
                <div css={{display: "flex", justifyContent: "center"}}><Button variant="primary" size="md" label="Register now"/></div>
              </div>
            </div>
          </Container>
        </div>

        {/* Section 2 */}
        <div className="section" css={{display: "flex", gap: 32}}>
          <Container css={{display: "grid", gridAutoFlow: "column", gap: 80, gridTemplateColumns: "1fr 1fr"}} lg>
            {/* Column 6 */}
            <div css={{display: "grid", gap: 48}}>
              {/* No application needed... */}
              <div css={{display: "grid", gap: 16}}>
                <Typography label="No application needed, ever―just start learning and show us you’re ready" h1/>
                <Typography label="Even if you don’t have a bachelor’s degree or extensive work experience, you can become part of the MS-DS. You’ll never have to apply to gain admission into the program." body1/>
                <Typography label="After passing 3 for-credit courses in the MS-DS program with grades of 80% or higher, you’ll be qualified." body1 />
              </div>
            </div>   
            {/* Column 6 */}
            <div css={{backgroundColor: palette.background.gray, borderRadius: 8, height: 300}}></div>
 
          </Container>
        </div>

        {/* Section 3 */}
        <div className="section" css={{display: "flex", gap: 32}}>
          <Container lg>
            <div css={{display: "flex", gap: 80, borderRadius: 8, backgroundColor: palette.black, justifyContent: "center", padding: 16, [mq[2]]: {padding: 80}}}>
              {/* No application needed... */}
              <div css={{display: "grid", gap: 16}}>
                <Typography label="No application needed, ever―just start learning and show us you’re ready" h1/>
                <Typography label="Even if you don’t have a bachelor’s degree or extensive work experience, you can become part of the MS-DS. You’ll never have to apply to gain admission into the program." body1/>
                <Typography label="After passing 3 for-credit courses in the MS-DS program with grades of 80% or higher, you’ll be qualified." body1 />
              </div>
            </div>
          </Container>
        </div>

        {/* Section 4 */}
        <div className="section" css={{display: "flex", gap: 32}}>
          <Container css={{display: "grid", gridAutoFlow: "column", gap: 80, gridTemplateColumns: "1fr 1fr"}} lg>
            {/* Column 6 */}
            <div css={{backgroundColor: palette.background.gray, borderRadius: 8, height: 300}}></div>
            
            {/* Column 6 */}
            <div css={{display: "grid", gap: 48}}>
              {/* No application needed... */}
              <div css={{display: "grid", gap: 16, alignItems: "center"}}>
                <Typography label='“For anyone starting out as a people manager, this is a great foundation and is very inspiring. The content was well paced and was accessible to people just starting out. I liked the variety of the assignments present in the program.”' body1/>
              </div>
            </div>   

          </Container>
        </div>

      </div>
    </Section>
  ))
}