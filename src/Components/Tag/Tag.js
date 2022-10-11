/** @jsxImportSource @emotion/react */

import Typography from "../Typography";
import { theme } from "../../Styles/theme";
import styled from "@emotion/styled/macro";

const { palette } = theme;

const TagStyle = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 22,
  padding: "0 8px",
  borderRadius: 4,
  border: `1px solid ${palette.neutral.default}`,
  color: palette.black,
})

export default function Tag(props) {
  const {label} = props
  return (
    <TagStyle>
      <Typography label={label} body2 />
    </TagStyle>
  ) 
}