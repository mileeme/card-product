/** @jsxImportSource @emotion/react */

import {useState} from "react";
import styled from "@emotion/styled";
import {keyframes} from "@emotion/react"
import Button from "../Button/Button";
import { theme } from "../../Styles/theme";

const { mq, palette } = theme;

const Input = styled.input({
  height: 48,
  border: 0,
  padding: "0 24px",
  fontSize: 14,
  backgroundColor: "transparent",
  borderRadius: 100,
  cursor: "text",
  "&:focus": { outline: 0 },
  "&:focus:not(:focus-visible)": { outline: 0 },
  "&::placeholder": { color: theme.palette.interactive.neutral.default },
});

const FormWrapper = styled.form({
  background: palette.background.white,
  display: "grid",
  gridAutoColumns: "1fr auto",
  gridAutoFlow: "column",
  gap: 16,
  alignItems: "center",
  padding: "0 6px 0 0",
  border: `2px solid ${palette.interactive.neutral.light}`,
  borderRadius: 100,
  // boxShadow: "1px 1px 6px 0px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1)",
  "&:focus": {
    outline: 0,
  },
  "&:focus:not(:focus-visible)": {
    outline: 0,
  },
  "&:focus-within": {
  boxShadow: "1px 2px 6px 2px rgba(0, 0, 0, 0.1)",
  transition: "all 250ms ease-in",
  },
  [mq[1]]: {
    gap: 4,
  },
});

const searchExpand = keyframes`
  from {
    width: 38px;
  }
  to {
    width: 100px;
  }
`

export default function SearchHeader() {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <FormWrapper>
      <Input type='text' placeholder="Try searching for 'python' or 'frontend developer'" onFocus={onFocus} onBlur={onBlur} />
      <Button
        variant={focused ? "primary" : "ghostNeutral"}
        size='sm'
        icon='search'
        label={focused ? "Search" : ""}
        css={{ width: focused ? 108 : 38, height: 38, borderRadius: 50, paddingBottom: 2, transition: focused ? `all ease-out 0.1s forwards` : "" }}
      />
    </FormWrapper>
  );
}
