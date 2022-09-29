/** @jsxImportSource @emotion/react */

// Carousel for career academy
import { useState } from "react";
import styled from "@emotion/styled";
import { roleData } from "./RoleData";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import RoleContent from "./RoleContent";

export default function RoleTabs() {
  const [activeTab, setActiveTab] = useState("Data analyst");
  const [tabNavs, setTabNavs] = useState([...roleData]);
  const [product, setProduct] = useState();

  const {palette} = theme;

  const handleTabClick = (currentTab) => {
    setActiveTab(currentTab);
    console.log(currentTab);
  };

  const handleActiveStyle = (currentTab) => {
    if (activeTab === currentTab) {
      return liActiveBorder;
    }
  };

  const TabWrapper = styled.div({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
    height: "auto",
    color: palette.black,
  });

  const Line = styled.span({
    position: "absolute",
    zIndex: 0,
    top: 32,
    left: 0,
    right: 0,
    border: `2px solid ${palette.neutral.lightCopy}`,
    transition: "all .4s ease-in",
  });

  const TabUl = styled.ul({
    paddingLeft: 0,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 24,
    overflowX: "hidden",
    margin: "0",
  });

  const TabLi = styled.li({
    zIndex: 1,
    listStyle: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.7s",
    padding: "0 8px 8px",
    borderBottom: "3px solid transparent",
    "&:hover": {
      color: palette.interactive.hover,
    },
    "&:active": {
      color: palette.interactive.active,
    },
  });

  const liActiveBorder = {
    borderBottom: `3px solid ${palette.interactive.primary.default}`,
    color: palette.interactive.primary.default,
  };

  return (
    <TabWrapper>
      {/* Tabs */}
      <TabUl>
        {tabNavs &&
          tabNavs.map((tab, index) => (
            <TabLi
              key={index}
              style={handleActiveStyle(tab)}
              onClick={() => handleTabClick(tab)}
            >
              {/* <Typography label={tab} body1 /> */}
              {activeTab === tab ? 
                <Typography label={tab} h3 /> :
                <Typography label={tab} body1 /> 
              
              }
            </TabLi>
          ))}

        {/* View all button */}
        {/* <LinkWithIcon css={{position: "absolute", top: 0, right: 0, color: palette.black, "&:hover": {color: palette.black} , "svg > path": {fill: palette.black}}} label="View all" showLabel="sm" icon="arrowNext" fontType="" /> */}
      </TabUl>
      <Line />

      {/* Tab content */}
      {activeTab === "Data analyst" ? 
        <RoleContent /> : 
        <div css={{width: "100%", height: 600, backgroundColor: palette.background.grayLight, display: "flex", alignItems: "center", justifyContent: "center", gap: 6}}><Typography css={{color: palette.interactive.neutral.default}} label={activeTab} body1 /><Typography css={{color: palette.interactive.neutral.default}} label="role info in progress" body1 /></div>
      }
    </TabWrapper>
  );
}
