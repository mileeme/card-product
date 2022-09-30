/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import {theme} from "../../Styles/theme";
import Typography from "../Typography";

export default function Checkbox(props) {
  const {checked, value} = props;
  const { palette } = theme;

  const CheckboxLabel = styled.label({
    "&:hover": {
      color: palette.interactive.primary.default,
    }
  })
  const Checkbox = styled.input({
    width: 24,
    height: 24
  })

  return (
    <>
      <CheckboxLabel htmlFor={value.option} css={{display: "flex", gap: 12, color: palette.neutral.default}}>
        <Checkbox id={value.option} type="checkbox" value={value.option} checked={checked} />
        <Typography label={value.option} body1 />
      </CheckboxLabel>
    </>
  )
}