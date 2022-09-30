/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import {language, level, duration, subject} from "./dataNav";
import Typography from "../Typography";

export default function CheckboxList() {
  const CheckboxList = styled.div({
    display: "grid",
    gridAutoFlow: "row",
    gap: 16,
  })

  return (
    <>
      <h2>
        <Typography label="Filter by" h2Bold />
      </h2>
      {/* Language */}
      <h3>
        <Typography label={language[0].category} h3 />
      </h3>
      <CheckboxList>
        {Object.entries(language).map(([key, value]) => {
          return (
            <Checkbox key={value.id} value={value} />
          )
        })}
      </CheckboxList>

      {/* Level */}
      <h3 css={{marginTop: 32}}>
        <Typography label={level[0].category} h3 />
      </h3>
      <CheckboxList>
        {Object.entries(level).map(([key, value]) => {
          return (
            <Checkbox key={value.id} value={value} />
          )
        })}
      </CheckboxList>

      {/* Duration */}
      <h3 css={{marginTop: 32}}>
        <Typography label={duration[0].category} h3 />
      </h3>
      <CheckboxList>
        {Object.entries(duration).map(([key, value]) => {
          return (
            <Checkbox key={value.id} value={value} />
          )
        })}
      </CheckboxList>

      {/* Subject */}
      <h3 css={{marginTop: 32}}>
        <Typography label={subject[0].category} h3 />
      </h3>
      <CheckboxList>
        {Object.entries(subject).map(([key, value]) => {
          return (
            <Checkbox key={value.id} value={value} />
          )
        })}
      </CheckboxList>
    </>
  )
}