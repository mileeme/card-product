/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";

export default function Link(props) {
  const { label, size } = props;

const LinkStyle = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: ${theme.palette.black};
  &:hover {
    color: ${theme.palette.interactive.hover};
  }
  &:active {
    color: ${theme.palette.interactive.active};
  };
`;

  return (
    <LinkStyle {...props} style={{ ...props }}>
      {size === "h1" && 
        <Typography label={label} css={{whiteSpace: "nowrap"}} h1/>
      }  
      {size === "h2" && 
        <Typography label={label} css={{whiteSpace: "nowrap"}} h2/>
      }  
      {size === "h3" && 
        <Typography label={label} css={{whiteSpace: "nowrap"}} h3/>
      }   
      {size === "body1" && 
        <Typography label={label} css={{whiteSpace: "nowrap"}} body1/>
      }   
      {size === "body2" && 
        <Typography label={label} css={{whiteSpace: "nowrap"}} body2/>
      }    
    </LinkStyle>
  );
}
