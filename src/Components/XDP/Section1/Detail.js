/** @jsxImportSource @emotion/react */

import Typography from "../../Typography";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import { theme } from "../../../Styles/theme";
import {
  google,
  googleFull,
  ibm,
  meta,
  salesforce,
  intuit,
  hubspot,
  illinois,
  duke,
  michigan,
  stanford,
  penn,
  aws,
  amil,
  atlassian,
  caseWestern,
  deepLearningAi,
  imperialCollege,
  facebook,
  michiganFull,
  deepLearningAiFull,
  stanfordCollege,
  courseraLearning,
  nyu,
  unt,
  uOfIllinois,
  macquarie,
  metaSmall,
  london,
  linkedin,
} from "../../Icon/PartnerLogo";

const { palette } = theme;

export default function Detail(props) {
  const {iconType, title, subtitle, button, partnerType} = props
  return (
    <div css={{display: "flex", height: 88, gap: 12, padding: 16, borderRadius: 8, border: `2px solid ${palette.neutral.lightCopy}`, alignItems: "start"}}>
    {/* icon */}
    <div css={{height: 20, display: "flex", alignItems: "center"}}>
      {iconType && <Icon type={iconType} size="sm" button="ghostNeutral" />}
      {partnerType && <img src={linkedin} width="20px" />}
    </div>

    {/* label */}
    <div css={{display: "grid", alignItems: "center"}}>
      <Typography label={title} h3 />
      <div css={{display: "flex", alignItems: "center"}}>
        <Typography label={subtitle} css={{color: palette.neutral.default}} body2 />
        {button && <Button variant="ghostPrimary" size="sm" label={button} />}
      </div>
    </div>
  </div>
  )
}