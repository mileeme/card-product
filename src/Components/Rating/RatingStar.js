/** @jsxImportSource @emotion/react */

import Typography from "../Typography";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";

export default function RatingStar(props) {
  const { palette } = theme;
  const {rating, reviews} = props;
  
  return (
    <div
    css={{
      display: "flex",
      alignItems: "center",
      gap: 4,
    }}
  >
    <Typography
      css={{ lineHeight: 0 }}
      label={rating}
      h4Bold
    />
    <Icon type='star' size='sm' button='ghostPrimary' />
    <Typography
      css={{ lineHeight: 0, color: palette.neutral.default }}
      label={`(${reviews} reviews)`}
      body2
    />
  </div>
  )
}