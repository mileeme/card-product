/** @jsxImportSource @emotion/react */

import {useState, useRef} from "react"
import Typography from "../Typography";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";
import "./Accordion.css";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const contentRef = useRef();
  const buttonRef = useRef();
  const {palette, button} = theme;

  console.log(isOpen);
  console.log(mouseEnter);

  return (
    <div className="collapsible" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
      {/* header */}
      <div className="header">

        {/* Title */}
        <div className="title">
          <a href="#"><Typography label={props.title} h3/></a>
          <div css={{height: 14, width: 160, backgroundColor: palette.background.gray}}></div>
        </div>

        {/* Controller */}
        <div className="controller" onClick={() => setIsOpen(!isOpen)} css={{backgroundColor: props.backgroundColor ? palette.background.grayLight : palette.white}}>
          
          {/* Button label */}
          <div
            ref={buttonRef}
            className="controller-label"
            style={mouseEnter || isOpen
              ? {opacity: 1}
              : {opacity: 0}
            }
          >
            <Typography 
            css={{color: palette.interactive.primary.default}} 
            label="Disclosure text label" h4Bold/>
          </div>

          {/* Icon transition */}
          <div className={`icon ${isOpen ? "icon--open" : ""}`}>
            <Icon type="chevronDown" size="md" button="ghostPrimary" />
          </div>
        </div>

      </div>
      
      {/* content */}
      <div 
        className="content-parent" ref={contentRef}
        css={{backgroundColor: props.contentBackground ? palette.background.blueLight : palette.white}}
        style={isOpen
          ? {height: contentRef.current.scrollHeight + "px"}
          : {height: "0px"}
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  )
}