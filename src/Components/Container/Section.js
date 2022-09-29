/** @jsxImportSource @emotion/react */

// This is career academy card list
import styled from "@emotion/styled";

export default function Section(props) {
  const Section = styled.section`
    position: relative;
    background-color: ${props.bgColor};
    padding: 48px 0;
  `;

  return <Section {...props}>{props.children}</Section>;
}
