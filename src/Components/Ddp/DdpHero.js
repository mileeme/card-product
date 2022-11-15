/** @jsxImportSource @emotion/react */

import { theme } from "../../Styles/theme"
import Section from "../Container/Section"
import illinoisFull2 from "../../Assets/illinoisFull2.png"
import illinoisFullBg from "../../Assets/illinoisBg.png"

export default function Ddp() {
  const {palette} = theme;

  return (
    <Section css={{height: 378, display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.93)), url(${illinoisFullBg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover",}} bgColor={palette.neutral.lightCopy}>
      <img src={illinoisFull2} width="385px" />
    </Section>
  )
}