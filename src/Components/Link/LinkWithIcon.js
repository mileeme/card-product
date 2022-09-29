/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";
import {mq} from "../../Styles/tokens";
import Typography from "../Typography";
import Icon from "../Icon/Icon";

export default function LinkWithIcon(props) {
  const { icon, label, showLabel, size } = props;

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
  color: ${theme.palette.black};
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
      {size === "sm" && 
        <Typography label={label} css={{whiteSpace: "nowrap"}} body2/>
      }  
      {size === "md" && 
        <Typography label={label} css={{whiteSpace: "nowrap"}} body2/>
      }    
      <IconStyle><Icon type={icon} button="ghostNeutral" size={size === "sm" ? "sm" : "md"} /></IconStyle>
    </LinkStyle>
  );
}
