/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { breakpoints, mq } from "../../Styles/tokens";

export default function Container(props) {
  const ContainerXS = styled.div({
  boxSizing: "border-box",
  maxWidth: breakpoints.sm,
  padding: "0 16px",
  margin: "0 auto",
});

const ContainerSM = styled.div({
  boxSizing: "border-box",
  maxWidth: breakpoints.md,
  padding: "0 16px",
  margin: "0 auto",
});

const ContainerMD = styled.div({
  boxSizing: "border-box",
  maxWidth: breakpoints.lg,
  padding: "0 16px",
  margin: "0 auto",
  [mq[2]]: {
    width: breakpoints.md,
    padding: "0 48px",
  },
});

const ContainerLG = styled.div({

  boxSizing: "border-box",
  maxWidth: breakpoints.lg,
  padding: "0 16px",
  margin: "0 auto",
  [mq[3]]: {
    width: breakpoints.lg,
    padding: "0 48px",
  },
});

const ContainerFlex = styled.div({
  boxSizing: "border-box",
  padding: "0 16px",
  margin: "0 auto",
  [mq[3]]: {
    padding: "0 48px",
  },
});

  return (
    <>
      {props.flex && <ContainerFlex {...props}>{props.children}</ContainerFlex>}
      {props.xs && <ContainerXS {...props}>{props.children}</ContainerXS>}
      {props.sm && <ContainerSM {...props}>{props.children}</ContainerSM>}
      {props.md && <ContainerMD {...props}>{props.children}</ContainerMD>}
      {props.lg && <ContainerLG {...props}>{props.children}</ContainerLG>}
    </>
  );
}
