/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import styles from "./HeaderTabs.module.scss";

// This is the most up to date Header tab (7/28)
export default function HeaderTabs8px() {
  const [selected, setSelected] = useState("LOHP");
  const [xPos, setXPos] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(45);
  const lWidth = 38 + 16;
  const sWidth = 46 + 16;
  // const cWidth = 54 + 16;
  // const gWidth = 84 + 16;

  // theme
  const {palette, mq} = theme

  // Listen for window size
  const windowSize = useWindowWidth();
  // const tabGap = windowSize > 600 ? 32 : 40;
  const tabGap = 32;

  // Get window resize width
  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
      function handleWindowResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleWindowResize);
      handleWindowResize();
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // If window resize, re-render xPos?
    useEffect(() => {
      if (selected === "Search") {
        setXPos(lWidth + tabGap);
        setGliderWidth(sWidth);
      // } else if (selected === "Campus") {
      //   setXPos(lWidth + sWidth + tabGap * 2);
      //   setGliderWidth(cWidth);
      // } else if (selected === "Government") {
      //   setXPos(lWidth + sWidth + cWidth + tabGap * 3);
      //   setGliderWidth(gWidth);
      } else {
        setXPos(0);
        setGliderWidth(lWidth);
      }
    }, [windowWidth]);

    return windowWidth;
  }

  // Set glider width and x position when selected
  useEffect(() => {
    if (selected === "Search") {
      setXPos(lWidth + tabGap);
      setGliderWidth(sWidth);
    // } else if (selected === "Campus") {
    //   setXPos(lWidth + sWidth + tabGap * 2);
    //   setGliderWidth(cWidth);
    // } else if (selected === "Government") {
    //   setXPos(lWidth + sWidth + cWidth + tabGap * 3);
    //   setGliderWidth(gWidth);
    } else {
      setXPos(0);
      setGliderWidth(lWidth);
    }
  }, [selected]);

  function handleTabClick(e) {
    setSelected(e.currentTarget.innerText);
  }

  return (
    <nav css={{ background: palette.black }}>
      <Container
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [mq[1]]: { justifyContent: "start" },
        }}
        flex
      >
        <div
          className={styles.tabs}
          css={{ gap: tabGap, color: palette.white }}
        >
          <div
            className={styles.tab}
            css={{ width: lWidth }}
            onClick={handleTabClick}
          >
            {selected === "LOHP" ? 
              <Link css={{textDecoration: "none"}} to="/"><Typography label='LOHP' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/"><Typography label='LOHP' body1 /></Link>    
            }
          </div>
          <div
            className={styles.tab}
            css={{ width: sWidth }}
            onClick={handleTabClick}
          >
            {selected === "Search" ? 
              <Link css={{textDecoration: "none"}} to="/search"><Typography label='Search' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/search"><Typography label='Search' body1 /></Link>    
            }
          </div>
          {/* <div
            className={styles.tab}
            css={{ width: cWidth }}
            onClick={handleTabClick}
          >
            {selected === "Campus" ? 
              <Typography label='Campus' h3 /> :             
              <Typography label='Campus' body1 />    
            }
          </div> */}
          {/* <div
            className={styles.tab}
            css={{ width: gWidth }}
            onClick={handleTabClick}
          >
            {selected === "Government" ? 
              <Typography label='Government' h3 /> :             
              <Typography label='Government' body1 />    
            }         
          </div> */}
          {/* Glider */}
          <div
            className={styles.glider}
            css={{
              backgroundColor: palette.white,
              width: `${gliderWidth}px`,
              transform: selected && `translateX(${xPos}px)`,
            }}
          ></div>
        </div>
      </Container>
    </nav>
  );
}
