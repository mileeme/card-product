/** @jsxImportSource @emotion/react */

import { keyframes } from "@emotion/react";
import Typography from "../Typography";
import { theme } from "../../Styles/theme";
import Card from "../Card/Card";
import areaGraph from "../../Assets/areaGraph.png";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import rachelL from "../../Assets/rachelL.png";
import uofLondon from "../../Assets/uofLondonSchool.png";
import { google, london } from "../Icon/PartnerLogo";
import googleCardImg from "../../Assets/googleDataCardImage.png";

const chevron = {
  borderWidth: "3px 3px 0 0",
  content: "",
  display: "inline-block",
  height: 8,
  width: 8,
};

const cards = [
  {
    id: 1,
    intro: false,
    category: "Data analyst",
    product: "Professional certificate",
    title: "Google Data Analytics",
    subTitle: "",
    course_img: googleCardImg,
    org_img: [google],
    org: ["Google"],
    rating: "4.8 (72.9k reviews)",
    enrolled: "1.1m students",
    categories: ["Beginner", "Professional Certificate", "3-6 Months"],
    status: [],
    skills:
      "Data cleansing, Data Analysis, Data Visualization (DataViz), SQL, Questioning",
    type: "",
    url: "",
  },
  {
    id: 2,
    intro: false,
    category: "Data analyst",
    product: "degree",
    title: "Bachelor of Science in Computer Science",
    subTitle: "",
    course_img: uofLondon,
    org_img: [london],
    org: ["University of London"],
    rating: "",
    enrolled: "",
    categories: ["Degree", "3 years"],
    status: [],
    skills:
      "Machine learning, Computer programming, Mathematical theory, Data analysis, SQL",
    type: "",
    url: "",
  },
  // { id: 4,
  //   intro: false,
  //   category: "All",
  //   product: "course",
  //   title: "Finding Purpose and Meaning In Life: Living for What Matters Most",
  //   subTitle: "",
  //   course_img: meaningCard,
  //   org_img: [michigan],
  //   org: ["University of Michigan"],
  //   rating: "4.6 (1.8k reviews)",
  //   enrolled: "1.1m students",
  //   categories: ["Beginner", "Course", "1-4 Weeks"],
  //   status: [],
  //   skills: "Resilience, Entrepreneurship, Business Psychology",
  //   type: "",
  //   url: "https://www.coursera.org/professional-certificates/ibm-data-science"
  // }
];

// Animation
const barSkeleton = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const bar50 = keyframes`
  from {
    opacity: 0;
    height: 32;
    width: 4%;
  }
  to {
    opacity: 1;
    height: 32;
    width: 70%;
  }
`;

const bar75 = keyframes`
  from {
    opacity: 0;
    height: 32;
    width: 4%;
  }
  to {
    opacity: 1;
    height: 32;
    width: 75%;
  }
`;

const barText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const graphRise = keyframes`
  from {
    opacity: 0;
    bottom: 0;
    height: 4px;
  }
  to {
    opacity: 1;
    bottom: 0;
    height: 76px;
  }
`;

const direction = "forwards";
const speed1 = "0.5s";
const speed2 = "0.5s";
const speedText = "0.3s";
const speedGraph = "0.4s";
const delay1 = "2s";
const delayBar50 = ".8s";
const delayBar75 = "1s";
const delayText50 = "1s";
const delayText75 = "1.2s";
const delayGraph = "1.6s";
const speedType1 = "ease-in-out";

export default function RoleContent() {
  // Check if bar is in viewport
  // const barRef = useRef();
  // const isBarViewPort = useOnScreen(barRef);

  const { mq, palette } = theme;

  return (
    <>
      <div 
        css={{             
          padding: 16,
          borderRadius: 8,
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: palette.white,
          [mq[2]]: {
            padding: "40px 80px",
          }
        }}
      >
        {/* Title */}
        <div css={{marginBottom: 32}}>
          <h3 css={{ marginBottom: 0 }}>
            <Typography label="Data Analyst" h1Semibold />
          </h3> 
          <Typography
              label='As a data analyst, you’ll collect, organize, and transform data to make informed decisions.'
              body1
            />
        </div>

        {/* Top content */}
        <div
          css={{
            display: "grid",
            gridAutoFlow: "row",
            [mq[2]]: {
              gridAutoColumns: "1fr, auto",
              gridAutoFlow: "column",
              gap: 32,
            },
          }}
        >
          {/* Left column */}
          <div css={{[mq[2]]: {maxWidth: 480}}}>
            <h3 css={{ marginBottom: 0, paddingBottom: 12 }}>
              <Typography label='Median salary' h3 />
            </h3>

            {/* Bar graph animation */}
            <div
              css={{
                position: "relative",
                display: "grid",
                gap: 8,
              }}
            >
              {/* Skeleton */}
              <div
                css={{
                  position: "absolute",
                  opacity: 1,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  animation: `${barSkeleton} ${speedType1} ${delayBar50} ${direction}`,
                  width: "100%",
                  height: "100%",
                  backgroundColor: palette.background.gray,
                }}
              ></div>
              {/* working professional */}
              <div
                css={{
                  opacity: 0,
                  position: "relative",
                  width: "70%",
                  height: 32,
                  background: palette.neutral.lightCopy,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 8,
                  animation: `${bar50} ${speedType1} ${speed1} ${direction} ${delayBar50}`,
                }}
              >
                <Typography
                  css={{
                    opacity: 0,
                    position: "absolute",
                    animation: `${barText} ${speedType1} ${speedText} ${direction} ${delayText50}`,
                  }}
                  label='Working professional*'
                  h4
                />
                <div css={{ position: "absolute", right: -64 }} >
                  <Typography
                    label='$58,260'
                    h4
                  />
                  <Typography
                    label={<sup> 1</sup>}
                    body2
                  />
                </div>
              </div>

              {/* Data analyst */}
              <div
                css={{
                  opacity: 0,
                  position: "relative",
                  width: "75%",
                  height: 32,
                  background: palette.interactive.primary.default,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 8,
                  animation: `${bar75} ${speedType1} ${speed1} ${direction} ${delayBar75}`,
                }}
              >
                <Typography
                  css={{
                    opacity: 0,
                    position: "absolute",
                    color: palette.white,
                    animation: `${barText} ${speedType1} ${speedText} ${direction} ${delayText75}`,
                  }}
                  label='Data analyst*'
                  h4
                />
                <div css={{ position: "absolute", right: -64 }} >
                  <Typography
                    label='$61,200'
                    h4
                  />
                  <Typography
                    label={<sup> 1</sup>}
                    body2
                  />
                </div>

              </div>
            </div>

            {/* Divider */}
            <div css={{ margin: "32px 0" }}>
              <hr
                css={{
                  height: 2,
                  backgroundColor: palette.neutral.lightCopy,
                  border: "none",
                }}
              />
            </div>

            {/* Job growth */}
            <div>
              <div css={{display: "flex", gap: 4}}>
                <Typography css={{color: palette.neutral.default}} label="2022 job postings:" h3 />
                <div>
                  <Typography label='119,383' h3 />
                  <Typography label={<sup> 2 </sup>} body2 />
                </div>
              </div>
              <div css={{display: "flex", gap:4}}>
                <div css={{color: palette.neutral.default}}>
                  <Typography label="Projected 10 year growth" h3 /> 
                  <Typography label={<sup> 2</sup>} h3 /> 
                  <Typography label=":" h3 /> 
                </div>
                <div>
                  <Typography label='+12.3%' h3 />
                  <Typography label={<sup> 2 </sup>} body2 />
                </div>
              </div>

              {/* Divider */}
              <div css={{ margin: "32px 0" }}>
                <hr
                  css={{
                    height: 2,
                    backgroundColor: palette.neutral.lightCopy,
                    border: "none",
                  }}
                />
              </div>

              {/* Testimonial */}
              <div
                css={{
                  display: "grid",
                  gridAutoColumn: "1fr auto",
                  gridAutoFlow: "column",
                  gap: 16,
                  alignItems: "start",
                }}
              >
                {/* Image */}
                <div
                  css={{
                    marginTop: 8,
                    width: 64,
                    height: 64,
                    borderRadius: 100,
                    overflow: "hidden",
                    backgroundImage: `url(${rachelL})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                  }}
                ></div>

                {/* Testimonial */}
                <div css={{ display: "grid", gap: 8 }}>
                  <Typography
                    label='“For anyone starting out as a data analyst, this is a great introduction and is very inspiring. The content was well paced and was accessible.”'
                    css={{ color: palette.neutral.default }}
                    body1
                  />
                  <Typography
                    label='— Rachel L'
                    css={{ color: palette.neutral.default }}
                    body1
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3 css={{ marginBottom: 0, paddingBottom: 12 }}>
                <Typography label='Start your career with these options' h3 />
              </h3>

              {/* Carousel buttons */}
              {/* <div css={{ display: "flex" }}>
                <Button
                  css={{ width: 6 }}
                  variant='ghostNeutral'
                  size='sm'
                  label={
                    <span
                      css={{
                        transform: "rotate(-135deg)",
                        border: `3px solid ${palette.interactive.neutral.dark}`,
                      }}
                      style={chevron}
                    ></span>
                  }
                />
                <Button
                  css={{ width: 6 }}
                  variant='ghostNeutral'
                  size='sm'
                  label={
                    <span
                      css={{
                        transform: "rotate(45deg)",
                        border: `3px solid ${palette.black}`,
                      }}
                      style={chevron}
                    ></span>
                  }
                />
              </div> */}
            </div>

            {/* cards */}
            <div
              css={{
                display: "grid",
                gap: 32,
                [mq[2]]: {
                  gridAutoColumns: "minMax(0, 1fr)",
                  gridAutoFlow: "column",
                },
              }}
            >
              {cards.map((el, index) => (
                <Card key={index} data={el} />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div css={{ margin: "32px 0" }}>
          <hr
            css={{
              height: 2,
              backgroundColor: palette.neutral.lightCopy,
              border: "none",
            }}
          />
        </div>

        {/* Bottom section */}
        <div css={{color: palette.neutral.default}}>
            <ul css={{listStyle: "none", margin: 0, padding: 0}}>
              <li><Typography label={<sup>1 </sup>} body2 /><Typography label="May 2021 National Occupational Employment and Wage Estimates United States (link to https://www.bls.gov/oes/current/oes_nat.htm#00-0000), U.S. Bureau of Labor Statistics" body2 /></li>             
              <li><Typography label={<sup>2 </sup>} body2 /><Typography label="Salary data (median with 0-2 years experience), job opening data, and growth rate data are sourced from US Burning Glass Labor Insight Report. Data for job roles relevant to featured programs (7/1/2021 - 6/30/2022)" body2 /></li>
            </ul>
        </div>
      </div>
    </>
  );
}
