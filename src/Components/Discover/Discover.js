/** @jsxImportSource @emotion/react */

import Section from "../Container/Section";
import Container from "../Container/Container";
import { theme } from "../../Styles/theme";
import Typography from "../Typography";
import SearchResults from "./SearchResults";
import LeftNav from "./LeftNav";

export default function Discover() {
  const { palette } = theme;

  return (
      <Section>
        <Container css={{
          position: "relative",
          display: "grid",
          gap: 32,
          gridTemplateColumns: "300px auto",
        }} lg>

          {/* Left nav */}
          <div css={{
            top: 0,
            position: "sticky",
            height: "100vh",
          }}>
            <LeftNav />
          </div>

          {/* Search results */}
          <div>
            <h2>
              <Typography label='2,731 results for "Data Science"' h1Semibold/>
            </h2>
            <SearchResults />
          </div>
        </Container>
      </Section>
  )
}