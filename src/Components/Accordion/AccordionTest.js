/** @jsxImportSource @emotion/react */

import Accordion from "./Accordion";
import Container from "../Container/Container";
import Col from "../Container/Col";
import Typography from "../Typography";
import { theme } from "../../Styles/theme";
import {data} from "./AccordionData"; 
import "./Accordion.css";

export default function AccordionTest(props) {
  const {palette} = theme;

  return (
   <>
    <Container css={{display: "flex", gap: 32, marginTop: 80}} lg>
      <Col type="8" gap="32" totalGap="1" className="accordion-list">
        <Accordion linkBackground={true} controllerBackground={true} contentBackground={true} title="Showing hit target area on header">This accordion displays the header hit target area and content area via background colors</Accordion>
      {
        data.map((item, index) => {
          return <Accordion title={item.title}  key={index}>{item.content}</Accordion>
        })
      }
      


      </Col>
      <Col type="4" gap="32" totalGap="1" className="accordion-list">
        <div css={{backgroundColor: palette.background.gray, height: 400, width: "100%"}}></div>
      </Col>
    </Container>
    <Container css={{height: 1000}} lg></Container>
   </>
  )
}