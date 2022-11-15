/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import "./headerTabs.css";

// This is the most up to date Header tab (7/28)
export default function HeaderTabs2() {
  const [selected, setSelected] = useState("Motion");

  // theme
  const {palette, mq} = theme

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
        <div className="tabs">
          {/* Link 1 */}
          <div className="tab" onClick={handleTabClick}>
            {selected === "Motion" ? 
              <Link css={{textDecoration: "none"}} to="/"><Typography label='Motion' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/"><Typography label='Motion' h3 /></Link>    
            }
            <div css={{position: "absolute", bottom: 0, left: 0, right: 0, borderBottom: `3px solid ${selected === "Motion" ? palette.white : "transparent"}`}}></div>
          </div>

          {/* Link 2 */}
          <div
            className="tab"
            onClick={handleTabClick}
          >
            {selected === "Xdp" ? 
              <Link css={{textDecoration: "none"}} to="/xdp"><Typography label='Xdp' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/xdp"><Typography label='Xdp' h3 /></Link>    
            }
            <div css={{position: "absolute", bottom: 0, left: 0, right: 0, borderBottom: `3px solid ${selected === "Xdp" ? palette.white : "transparent"}`}}></div>
          </div>

          {/* Link 3 */}
          <div
            className="tab"
            onClick={handleTabClick}
          >
            {selected === "Accordion" ? 
              <Link css={{textDecoration: "none"}} to="/accordion"><Typography label='Accordion' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/accordion"><Typography label='Accordion' h3 /></Link>    
            }
            <div css={{position: "absolute", bottom: 0, left: 0, right: 0, borderBottom: `3px solid ${selected === "Accordion" ? palette.white : "transparent"}`}}></div>
          </div>

          {/* Link 4 */}
          <div
            className="tab"
            onClick={handleTabClick}
          >
            {selected === "Ddp" ? 
              <Link css={{textDecoration: "none"}} to="/ddp"><Typography label='Ddp' h3 /></Link> :             
              <Link css={{textDecoration: "none"}} to="/ddp"><Typography label='Ddp' h3 /></Link>    
            }
            <div css={{position: "absolute", bottom: 0, left: 0, right: 0, borderBottom: `3px solid ${selected === "Ddp" ? palette.white : "transparent"}`}}></div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
