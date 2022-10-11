/** @jsxImportSource @emotion/react */

import Typography from "../Typography";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";

export default function Accordion(props) {
  const { palette } = theme;
  const { icon } = props;
  
  return (
   <div css={{height: 56, display: "flex", padding: "0 16px", gap: 12, alignItems: "center"}}>
    <Icon type={icon} size="sm" button="ghostNeutral" />
    <Typography label="Course content" h3Bold />
   </div>
  )
}