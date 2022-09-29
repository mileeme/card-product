/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { cards, tabs, skill, course, specialization, degree } from "./GoalData";
import { theme } from "../../../Styles/theme";
import Typography from "../../Typography";
import CardList from "../../Card/CardList";
import LinkWithIcon from "../../Link/LinkWithIcon";

export default function GoalTabs(props) {
  const [activeTab, setActiveTab] = useState("All");
  const [tabNavs, setTabNavs] = useState([...tabs]);
  const [filteredCards, setFilteredCards] = useState();
  const [product, setProduct] = useState();

  const { palette } = theme;

  useEffect(() => {
    const filtered = cards.filter((card) => card.category === activeTab);
    if (filtered) {
      setFilteredCards([...filtered]);
    }
  }, [activeTab]);

  const handleTabClick = (currentTab) => {
    setActiveTab(currentTab);
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
    gap: 32,
    width: "100%",
    height: "auto",
    minHeight: 400,
    color: palette.black,
  });

  const Line = styled.span({
    position: "absolute",
    zIndex: 0,
    top: 40,
    left: 0,
    right: 0,
    border: `2px solid ${palette.neutral.lightCopy}`,
    transition: "all .4s ease-in",
  });

  const StickyHeader = styled.div({
    position: "sticky",
    top: 0,
    width: "100%",
    zIndex: 100,
    // overflow: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.84)",
    backdropFilter: "blur(100px)",
  });

  const TabUl = styled.ul({
    paddingLeft: 0,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 24,
    overflowX: "hidden",
    margin: 0,
    marginBottom: 1,
    padding: "8px 0",
  });

  const TabLi = styled.li({
    zIndex: 50,
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
    <TabWrapper id='section3Ref'>
      {/* Tabs */}
      <StickyHeader>
        <TabUl>
          {tabNavs &&
            tabNavs.map((tab) => (
              <TabLi
                key={tab.id}
                style={handleActiveStyle(tab.category)}
                onClick={() => handleTabClick(tab.category)}
              >
                {/* <Typography label={tab.category} body1 /> */}
                {activeTab === tab.category ? 
                <Typography label={tab.category} h3 /> :
                <Typography label={tab.category} body1 /> 
              }
              </TabLi>
            ))}
        </TabUl>
        <Line />
      </StickyHeader>

      {/* Tab content */}
      {activeTab === "All" ? 
        <div css={{ display: "grid", gap: 32 }}>
          <CardList product='All' filtered={degree} type={product} />
          <CardList
            product='All'
            filtered={specialization}
            type={product}
          />
          <CardList product='All' filtered={course} type={product} />
        </div> :
        <div css={{width: "100%", height: 600, backgroundColor: palette.background.grayLight, display: "flex", alignItems: "center", justifyContent: "center", gap: 6}}><Typography css={{color: palette.interactive.neutral.default}} label={activeTab} body1 /><Typography css={{color: palette.interactive.neutral.default}} label="section in progress" body1 /></div>
      }

      {/* {filteredCards && (
        <CardList product='course' filtered={filteredCards} />
      )} */}
    </TabWrapper>
  );
}
