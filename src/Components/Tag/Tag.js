/** @jsxImportSource @emotion/react */

import Typography from "../Typography";
import { theme } from "../../Styles/theme";
import styled from "@emotion/styled/macro";

const { palette } = theme;

const TagWrapper = styled.div({
  display: "inline-block"
})
const TagStyle = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "0 8px",
  borderRadius: 4,
  border: `1px solid ${palette.neutral.default}`,
  color: palette.black,
})

export default function Tag(props) {
  const {label} = props
  return (
    <TagWrapper>
      <TagStyle>
        <Typography label={label} body2 />
      </TagStyle>
    </TagWrapper>
  ) 
}