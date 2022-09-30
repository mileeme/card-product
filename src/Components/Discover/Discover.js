/** @jsxImportSource @emotion/react */

import Section from "../Container/Section";
import Container from "../Container/Container";
import SearchResults from "./SearchResults";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";

export default function Discover() {
  const { palette } = theme;

  return (
      <Section>
        <Container css={{
          display: "grid",
          gap: 32,
          gridTemplateColumns: "300px auto",
        }} lg>
          <div css={{
            backgroundColor: palette.neutral.lightCopy,
          }}>

          </div>

          <div>
            <h2>
              <Typography label='2,731 results for "Data Science"' h2/>
            </h2>
            <SearchResults />
          </div>
        </Container>
      </Section>
  )
}