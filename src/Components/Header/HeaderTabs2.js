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

  // theme
  const {palette, mq} = theme

  // Listen for window size
  const tabGap = 32;


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
            onClick={handleTabClick}
          >
            {selected === "Motion" ? 
              <Link css={{textDecoration: "none"}} to="/"><Typography label='Motion' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/"><Typography label='Motion' body1 /></Link>    
            }
          </div>

          {/* Motion test */}
          <div
            className={styles.tab}
            onClick={handleTabClick}
          >
            {selected === "MotionTest" ? 
              <Link css={{textDecoration: "none"}} to="/motion-test"><Typography label='MotionTest' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/motion-test"><Typography label='MotionTest' body1 /></Link>    
            }
          </div>

          {/* Accordion test */}
          <div
            className={styles.tab}
            onClick={handleTabClick}
          >
            {selected === "Accordion" ? 
              <Link css={{textDecoration: "none"}} to="/accordion"><Typography label='Accordion' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/accordion"><Typography label='Accordion' body1 /></Link>    
            }
          </div>

        </div>
      </Container>
    </nav>
  );
}
