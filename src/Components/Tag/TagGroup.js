/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";

export default function TagGroup(props) {
  const {gap} = props;

  const Tags = styled.div({
    display: "flex", 
    gap: `${gap}px`,
    alignItems: "center", 
    flexWrap: "wrap"

  })
  return (
    <Tags {...props}>
      {props.children}
    </Tags>
  )
}