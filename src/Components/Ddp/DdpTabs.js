/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";

const tabList = [
  "About",
  "Admissions",
  "Academics",
  "Tuition & financing",
  "Careers",
  "Student experience"
]
export default function DdpTabs() {
  const [activeTab, setActiveTab] = useState("About");
  const [tabNavs, setTabNavs] = useState(tabList);
  const [selectedItem, setSelectedItem] = useState();

  const { palette } = theme;

  useEffect(() => {
    const activeItem = tabList.filter((item) => item === activeTab);
    if (activeItem) {
      setSelectedItem([...activeItem]);
    }
  }, [activeTab]);

  // const handleTabClick = (currentTab) => {
  //   setActiveTab(currentTab);
  // };

  // const handleActiveStyle = (currentTab) => {
  //   if (activeTab === currentTab) {
  //     return liActiveBorder;
  //   }
  // };

  const Tabs = styled.ul({
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    gap: 24,
    width: "100%"
  })

  const Tab = styled.li({
    padding: 8,
    borderBottom: `3px solid transparent`,
    zIndex: 100
  })

  const Line = styled.div({
    height: 3,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: palette.neutral.lightCopy,
  })


  return (
    <Tabs>
      <Line />
      {tabNavs.map((tab, index) => (
          <Tab
            key={index}
            css={{borderBottom: activeTab === tab ? `3px solid ${palette.interactive.primary.default}` : ""}}
            // style={handleActiveStyle(tab)}
            // onClick={() => handleTabClick(tab)}
          >
            {activeTab === tab ? 
            <Typography label={tab} css={{color: palette.interactive.primary.default}} h3 /> :
            <Typography label={tab} body1 /> 
          }

          </Tab>
        ))
      }
    </Tabs>
  )
}