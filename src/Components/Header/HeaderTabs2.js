/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import styles from "./HeaderTabs.module.scss";

// This is the most up to date Header tab (7/28)
export default function HeaderTabs2() {
  const [selected, setSelected] = useState("Motion");
  const [xPos, setXPos] = useState(0);
  const [gliderWidth, setGliderWidth] = useState(45);
  const mWidth = 37 + 16;
  const lWidth = 35 + 16;
  // const xWidth = 27 + 16;
  // const mWidth = 47 + 16;
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
      if (selected === "Level") {
        setXPos(mWidth + tabGap);
        setGliderWidth(lWidth);
      // } else if (selected === "Campus") {
      //   setXPos(mWidth + lWidth + tabGap * 2);
      //   setGliderWidth(cWidth);
      // } else if (selected === "Government") {
      //   setXPos(mWidth + lWidth + cWidth + tabGap * 3);
      //   setGliderWidth(gWidth);
      } else {
        setXPos(0);
        setGliderWidth(mWidth);
      }
    }, [windowWidth]);

    return windowWidth;
  }

  // Set glider width and x position when selected
  useEffect(() => {
    if (selected === "Level") {
      setXPos(mWidth + tabGap);
      setGliderWidth(lWidth);
    } else {
      setXPos(0);
      setGliderWidth(mWidth);
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
          {/* LOHP */}
          <div
            className={styles.tab}
            css={{ width: lWidth }}
            onClick={handleTabClick}
          >
            {selected === "Motion" ? 
              <Link css={{textDecoration: "none"}} to="/"><Typography label='Motion' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/"><Typography label='Motion' body1 /></Link>    
            }
          </div>

          {/* Level */}
          <div
            className={styles.tab}
            css={{ width: lWidth }}
            onClick={handleTabClick}
          >
            {selected === "Level" ? 
              <Link css={{textDecoration: "none"}} to="/level"><Typography label='Level' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/level"><Typography label='Level' body1 /></Link>    
            }
          </div>

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
