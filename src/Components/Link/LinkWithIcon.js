/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";
import {mq} from "../../Styles/tokens";
import Typography from "../Typography";
import Icon from "../Icon/Icon";

export default function LinkWithIcon(props) {
  const { icon, label, showLabel, fontType, color } = props;

  const IconStyle = styled.span`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  `

const LinkStyle = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex; 
  gap: 8px;
  align-items: center;
  color: ${color === "primary" ? theme.palette.interactive.primary.default : theme.palette.black};
  &:hover {
    color: ${theme.palette.interactive.hover};
  }
  &:hover ${IconStyle} {
    transform: translate3d(5px, 0, 0);
  };
  &:active {
    color: ${theme.palette.interactive.active};
  };
`;

  return (
    <LinkStyle {...props} style={{ ...props }}>
      {fontType === "h3Bold" && 
        <Typography label={label} css={{whiteSpace: "nowrap", display: showLabel === "all" && "inline-block" || showLabel === "sm" && "none", [mq[1]]: {display: showLabel === "sm" && "inline-block",}}} h3Bold/>
      }  
      {fontType === "" && 
        <Typography label={label} css={{whiteSpace: "nowrap", display: showLabel === "all" && "inline-block" || showLabel === "sm" && "none", [mq[1]]: {display: showLabel === "sm" && "inline-block" || showLabel === "md" && "none",}}} body1/>
      }    
      <IconStyle><Icon icon={icon} button={color === "primary" ? "ghostPrimary" : "ghostNeutral"} size="md" /></IconStyle>
    </LinkStyle>
  );
}
