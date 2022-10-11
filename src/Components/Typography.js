/** @jsxImportSource @emotion/react */

import React from "react";
import styled from "@emotion/styled";
import { theme } from "../Styles/theme";


export default function Typography(props) {
  const { mq } = theme;  

  // D1
  const Display1 = styled.span({
    fontSize: theme.fontType.d1.fontSize,
    lineHeight: theme.fontType.d1.lineHeight,
    fontWeight: theme.fontType.d1.fontWeight,
    letterSpacing: theme.fontType.d1.letterSpacing,
    color: "inherit",
    transition: "font-size 0.3s ease",
    [mq[1]]: {
      fontSize: theme.fontType.d1.mq1.fontSize,
      lineHeight: theme.fontType.d1.mq1.lineHeight,
    },
    [mq[2]]: {
      fontSize: theme.fontType.d1.mq2.fontSize,
      lineHeight: theme.fontType.d1.mq2.lineHeight,
    },
  });

  const Display1Semibold = styled.span({
    fontSize: theme.fontType.d1Semibold.fontSize,
    lineHeight: theme.fontType.d1Semibold.lineHeight,
    fontWeight: theme.fontType.d1Semibold.fontWeight,
    letterSpacing: theme.fontType.d1Semibold.letterSpacing,
    color: "inherit",
    transition: "font-size 0.3s ease",
    [mq[1]]: {
      fontSize: theme.fontType.d1Semibold.mq1.fontSize,
      lineHeight: theme.fontType.d1Semibold.mq1.lineHeight,
    },
    [mq[2]]: {
      fontSize: theme.fontType.d1Semibold.mq2.fontSize,
      lineHeight: theme.fontType.d1Semibold.mq2.lineHeight,
    },
  });

  // D2
  const Display2 = styled.span({
    fontSize: theme.fontType.d2.fontSize,
    lineHeight: theme.fontType.d2.lineHeight,
    fontWeight: theme.fontType.d2.fontWeight,
    letterSpacing: theme.fontType.d2.letterSpacing,
    color: "inherit",
    transition: "font-size 0.3s ease",
    [mq[1]]: {
      fontSize: theme.fontType.d2.mq1.fontSize,
      lineHeight: theme.fontType.d2.mq1.lineHeight,
    },
    [mq[2]]: {
      fontSize: theme.fontType.d2.mq2.fontSize,
      lineHeight: theme.fontType.d2.mq2.lineHeight,
    },
  });

  const Display2Semibold = styled.span({
    fontSize: theme.fontType.d2Semibold.fontSize,
    lineHeight: theme.fontType.d2Semibold.lineHeight,
    fontWeight: theme.fontType.d2Semibold.fontWeight,
    letterSpacing: theme.fontType.d2Semibold.letterSpacing,
    color: "inherit",
    transition: "font-size 0.3s ease",
    [mq[1]]: {
      fontSize: theme.fontType.d2Semibold.mq1.fontSize,
      lineHeight: theme.fontType.d2Semibold.mq1.lineHeight,
    },
    [mq[2]]: {
      fontSize: theme.fontType.d2Semibold.mq2.fontSize,
      lineHeight: theme.fontType.d2Semibold.mq2.lineHeight,
    },
  });

  // H1
  // const Heading1 = styled.span({
  //   fontSize: theme.fontType.h1.fontSize,
  //   lineHeight: theme.fontType.h1.lineHeight,
  //   fontWeight: theme.fontType.h1.fontWeight,
  //   letterSpacing: theme.fontType.h1.letterSpacing,
  //   color: "inherit",
  //   transition: "font-size 0.3s ease",
  //   [mq[1]]: {
  //     fontSize: theme.fontType.h1.mq1.fontSize,
  //     lineHeight: theme.fontType.h1.mq1.lineHeight,
  //   },
  // });

  const Heading1 = styled.span({
    fontSize: theme.fontType.h1.fontSize,
    lineHeight: theme.fontType.h1.lineHeight,
    fontWeight: theme.fontType.h1.fontWeight,
    letterSpacing: theme.fontType.h1.letterSpacing,
    color: "inherit",
    transition: "font-size 0.3s ease",
    [mq[1]]: {
      fontSize: theme.fontType.h1.mq1.fontSize,
      lineHeight: theme.fontType.h1.mq1.lineHeight,
    },
  });

  // H2
  // const Heading2 = styled.span({
  //   fontSize: theme.fontType.h2.fontSize,
  //   lineHeight: theme.fontType.h2.lineHeight,
  //   fontWeight: theme.fontType.h2.fontWeight,
  //   letterSpacing: theme.fontType.h2.letterSpacing,
  //   color: "inherit",
  // });

  const Heading2 = styled.span({
    fontSize: theme.fontType.h2.fontSize,
    lineHeight: theme.fontType.h2.lineHeight,
    fontWeight: theme.fontType.h2.fontWeight,
    letterSpacing: theme.fontType.h2.letterSpacing,
    color: "inherit",
  });

  const Heading2Bold = styled.span({
    fontSize: theme.fontType.h2Bold.fontSize,
    lineHeight: theme.fontType.h2Bold.lineHeight,
    fontWeight: theme.fontType.h2Bold.fontWeight,
    letterSpacing: theme.fontType.h2Bold.letterSpacing,
    color: "inherit",
  });

  // H3
  const Heading3 = styled.span({
    fontSize: theme.fontType.h3.fontSize,
    lineHeight: theme.fontType.h3.lineHeight,
    fontWeight: theme.fontType.h3.fontWeight,
    letterSpacing: theme.fontType.h3.letterSpacing,
    color: "inherit",
  });

  // const Heading3Semibold = styled.span({
  //   fontSize: theme.fontType.h3Semibold.fontSize,
  //   lineHeight: theme.fontType.h3Semibold.lineHeight,
  //   fontWeight: theme.fontType.h3Semibold.fontWeight,
  //   letterSpacing: theme.fontType.h3Semibold.letterSpacing,
  //   color: "inherit",
  // });

  const Heading3Bold = styled.span({
    fontSize: theme.fontType.h3Bold.fontSize,
    lineHeight: theme.fontType.h3Bold.lineHeight,
    fontWeight: theme.fontType.h3Bold.fontWeight,
    letterSpacing: theme.fontType.h3Bold.letterSpacing,
    color: "inherit",
  });

  // H4
  const Heading4 = styled.span({
    fontSize: theme.fontType.h4.fontSize,
    lineHeight: theme.fontType.h4.lineHeight,
    fontWeight: theme.fontType.h4.fontWeight,
    letterSpacing: theme.fontType.h4.letterSpacing,
    color: "inherit",
  });

  const Heading4Bold = styled.span({
    fontSize: theme.fontType.h4Bold.fontSize,
    lineHeight: theme.fontType.h4Bold.lineHeight,
    fontWeight: theme.fontType.h4Bold.fontWeight,
    letterSpacing: theme.fontType.h4Bold.letterSpacing,
    color: "inherit",
  });

  // Body1
  const Body1 = styled.span({
    fontSize: theme.fontType.body1.fontSize,
    lineHeight: theme.fontType.body1.lineHeight,
    fontWeight: theme.fontType.body1.fontWeight,
    letterSpacing: theme.fontType.body1.letterSpacing,
    color: "inherit",
  });

  // const Body1Semibold = styled.span({
  //   fontSize: theme.fontType.body1Semibold.fontSize,
  //   lineHeight: theme.fontType.body1Semibold.lineHeight,
  //   fontWeight: theme.fontType.body1Semibold.fontWeight,
  //   letterSpacing: theme.fontType.body1Semibold.letterSpacing,
  //   color: "inherit",
  // });

  // const Body1Bold = styled.span({
  //   fontSize: theme.fontType.body1Bold.fontSize,
  //   lineHeight: theme.fontType.body1Bold.lineHeight,
  //   fontWeight: theme.fontType.body1Bold.fontWeight,
  //   letterSpacing: theme.fontType.body1Bold.letterSpacing,
  //   color: "inherit",
  // });

  // Body2
  const Body2 = styled.span({
    fontSize: theme.fontType.body2.fontSize,
    lineHeight: theme.fontType.body2.lineHeight,
    fontWeight: theme.fontType.body2.fontWeight,
    letterSpacing: theme.fontType.body2.letterSpacing,
    color: "inherit",
  });

  // const Body2Bold = styled.span({
  //   fontSize: theme.fontType.body2Bold.fontSize,
  //   lineHeight: theme.fontType.body2Bold.lineHeight,
  //   fontWeight: theme.fontType.body2Bold.fontWeight,
  //   letterSpacing: theme.fontType.body2Bold.letterSpacing,
  //   color: "inherit",
  // });

  return (
    <>
      {props.d1 && <Display1 {...props}>{props.label}</Display1>}
      {props.d1Semibold && (
        <Display1Semibold {...props}>{props.label}</Display1Semibold>
      )}
      {props.d2 && <Display2 {...props}>{props.label}</Display2>}
      {props.d2Semibold && (
        <Display2Semibold {...props}>{props.label}</Display2Semibold>
      )}
      {props.h1 && <Heading1 {...props}>{props.label}</Heading1>}
      {/* {props.h1 && (
        <Heading1 {...props}>{props.label}</Heading1>
      )} */}
      {props.h2 && <Heading2 {...props}>{props.label}</Heading2>}
      {/* {props.h2 && (
        <Heading2 {...props}>{props.label}</Heading2>
      )}       */}
      {props.h2Bold && (
        <Heading2Bold {...props}>{props.label}</Heading2Bold>
      )}
      {props.h3 && <Heading3 {...props}>{props.label}</Heading3>}
      {/* {props.h3Semibold && (
        <Heading3Semibold {...props}>{props.label}</Heading3Semibold>
      )} */}
      {props.h3Bold && <Heading3Bold {...props}>{props.label}</Heading3Bold>}
      {props.h4 && <Heading4 {...props}>{props.label}</Heading4>}
      {props.h4Bold && <Heading4Bold {...props}>{props.label}</Heading4Bold>}
      {props.body1 && <Body1 {...props}>{props.label}</Body1>}
      {/* {props.body1Semibold && <Body1Semibold {...props}>{props.label}</Body1Semibold>} */}
      {/* {props.body1Bold && <Body1Bold {...props}>{props.label}</Body1Bold>} */}
      {props.body2 && <Body2 {...props}>{props.label}</Body2>}
      {/* {props.body2Bold && <Body2Bold {...props}>{props.label}</Body2Bold>} */}
    </>
  );
}
