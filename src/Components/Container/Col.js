/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import { theme } from "../../Styles/theme";

const { columns } = theme;

export default function Col(props) {
  const {type, gap, totalGap} = props
  const adjustedWidth = `calc(${columns[type]} - (${gap}px * ${totalGap}))`;

  const Col1 = styled.div({ width: adjustedWidth });
  const Col2 = styled.div({ width: adjustedWidth });
  const Col3 = styled.div({ width: adjustedWidth });
  const Col4 = styled.div({ width: adjustedWidth });
  const Col5 = styled.div({ width: adjustedWidth });
  const Col6 = styled.div({ width: adjustedWidth });
  const Col7 = styled.div({ width: adjustedWidth });
  const Col8 = styled.div({ width: adjustedWidth });
  const Col9 = styled.div({ width: adjustedWidth });
  const Col10 = styled.div({ width: adjustedWidth });
  const Col11 = styled.div({ width: adjustedWidth });
  const Col12 = styled.div({ width: adjustedWidth });
  return (
    <>
      {type === "1" && <Col1 {...props}>{props.children}</Col1>}
      {type === "2" && <Col2 {...props}>{props.children}</Col2>}
      {type === "3" && <Col3 {...props}>{props.children}</Col3>}
      {type === "4" && <Col4 {...props}>{props.children}</Col4>}
      {type === "5" && <Col5 {...props}>{props.children}</Col5>}
      {type === "6" && <Col6 {...props}>{props.children}</Col6>}
      {type === "7" && <Col7 {...props}>{props.children}</Col7>}
      {type === "8" && <Col8 {...props}>{props.children}</Col8>}
      {type === "9" && <Col9 {...props}>{props.children}</Col9>}
      {type === "10" && <Col10 {...props}>{props.children}</Col10>}
      {type === "11" && <Col11 {...props}>{props.children}</Col11>}
      {type === "12" && <Col12 {...props}>{props.children}</Col12>}
    </>
  );
}
