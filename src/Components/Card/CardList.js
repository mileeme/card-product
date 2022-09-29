/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Card from "./Card";
import {theme} from "../../Styles/theme";

export default function CardList(props) {
  const { product, filtered } = props;
  const {mq} = theme;

  const List = styled.ul({
    position: 'relative',
    listStyle: "none",
    columnGap: 32,
    rowGap: 32,
    display: "grid",
    margin: 0,
    padding: 0,
    [mq[2]]: {
      // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gridTemplateColumns: "auto 1fr 1fr 1fr",
    },
  })

  return (
    <div css={{display: "grid", gap: 16}}>
      <List>
        {filtered.length > 0 && filtered.map((el, index) => (    
            <Card key={index} data={el} />
          ))
        }
      </List>
    </div>
  );
}
