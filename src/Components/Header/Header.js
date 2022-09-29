/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import SearchHeader from "../Search/SearchHeader";
import Typography from "../Typography";
import Icon from "../Icon/Icon";
import { theme } from "../../Styles/theme";

export default function Header() {
  // const [scrollPos, setScrollPos] = useState(0);
  const [sticky, setSticky] = useState(false);
  const { palette, mq } = theme;
  // const [section3Spec, setSection3Spec] = useState({});

  // Get section3 specs
  // useEffect(() => {
  //   const el = document.getElementById("section3Ref").getBoundingClientRect();
  //   setSection3Spec({
  //     top: el.top,
  //     bottom: el.bottom,
  //     height: el.height,
  //   });
  // }, [scrollPos]);

  // Get scroll position
  // const handleScroll = () => {
  //   const currentScrollPos = Math.round(window.scrollY);
  //   setScrollPos(currentScrollPos);

  //   setSticky(
  //     (section3Spec.top > 96 && section3Spec.bottom > section3Spec.height) ||
  //       (section3Spec.top < -section3Spec.height && section3Spec.bottom < 126)
  //   );

  //   if (currentScrollPos === 0) {
  //     setSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [scrollPos, sticky, handleScroll]);

  const navStyle = {
    zIndex: 1000,
    background: palette.white,
    overflow: "hidden",
    // boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.24)",
  };

  return (
    <nav
      style={{
        ...navStyle,
        position: "sticky",
        top: sticky ? 0 : -150,
        height: sticky ? 72 : 96,
        transition: "all 0.4s cubic-bezier(0, 0, 0.35, 1.07)",
      }}
    >
      <Container
        css={{
          position: "relative",
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "1fr auto",
          alignItems: "center",
          height: "100%",
        }}
        flex
      >
        {/* Mobile menu */}
        <div
          css={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            [mq[2]]: {
              display: "none",
            },
          }}
        >
          <Button
            variant='ghostPrimary'
            size='sm'
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
            label={<Icon type='menu' button='ghostPrimary' />}
          />
        </div>

        {/* Logo + search bar */}
        <div
          css={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "auto 1fr",
            gap: 24,
            alignItems: "center",
          }}
        >
          <Icon type='coursera' button='ghostPrimary' />

          {/* Search */}
          <div css={{ display: "none", [mq[2]]: { display: "block" } }}>
            <SearchHeader />
          </div>
        </div>

        {/* menu + join for free button */}
        <div
          css={{
            display: "none",
            [mq[2]]: {
              display: "flex",
              gap: 24,
              alignItems: "center",
            },
          }}
        >
          <ul
            css={{
              listStyle: "none",
              display: "flex",
              gap: 24,
              color: palette.black,
            }}
          >
            <li>
              <a
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
                href='#'
              >
                <Typography
                  css={{ whiteSpace: "nowrap" }}
                  label='Explore topics'
                  body1
                />
                <Icon type='chevronDown' size='sm' button='ghostNeutral' />
              </a>
            </li>
            <li>
              <a
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
                href='#'
              >
                <Typography
                  css={{ whiteSpace: "nowrap" }}
                  label='Find online degrees'
                  body1
                />
                <Icon type='chevronDown' size='sm' button='ghostNeutral' />
              </a>
            </li>
            <li>
              <a
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
                href='#'
              >
                <Typography
                  css={{ whiteSpace: "nowrap" }}
                  label='Find your new career'
                  body1
                />
              </a>
            </li>
            <li>
              <a
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
                href='#'
              >
                <Typography
                  css={{ whiteSpace: "nowrap" }}
                  label='Log in'
                  body1
                />
              </a>
            </li>
          </ul>
          <Button css={{borderRadius: 8}} variant='primary' size='sm' label='Join for free' />
        </div>

        {/* Mobile search icon */}
        <div
          css={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            justifyContent: "end",
            [mq[2]]: {
              display: "none",
            },
          }}
        >
          <Button
            variant='ghostPrimary'
            size='md'
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              width: 40,
              height: 40,
            }}
            label={<Icon type='search' button='ghostPrimary' />}
          />
        </div>
      </Container>
    </nav>
  );
}
