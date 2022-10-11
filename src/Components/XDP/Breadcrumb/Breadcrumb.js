/** @jsxImportSource @emotion/react */

import Container from "../../Container/Container"
import Typography from "../../Typography";
import Icon from "../../Icon/Icon"
import { theme } from "../../../Styles/theme";
import share from "../../../Assets/shareIcon.png";

export default function Breadcrumb() {
  const {mq, palette} = theme;

  return (
    <Container css={{height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${palette.neutral.lightCopy}`}} flex>
      <div css={{display: "flex", gap: 8, alignItems: "center"}}>
        <Typography label="Course" css={{color: palette.neutral.default}} body1 />
        <Icon type="chevronNext" size="sm" button="ghostNeutral" />
        <Typography label="Computer Science" css={{color: palette.neutral.default}} body1 />
        <Icon type="chevronNext" size="sm" button="ghostNeutral" />
        <Typography label="Software Development" css={{color: palette.neutral.default}} h3 />
      </div>
      <div css={{display: "flex", gap: 16}}>
        <div css={{display: "flex", alignItems: "center", gap: 4}}><Icon type="share" button="ghostNeutral" size="sm" /> <Typography label="SHARE" css={{color: palette.neutral.default}} h4 /></div>
        <div css={{display: "flex", alignItems: "center", gap: 4}}>        <Icon type="bookmark" button="ghostNeutral" size="sm" /><Typography label="SAVE" css={{color: palette.neutral.default}} h4 /></div>
      </div>
    </Container>
  );
}
