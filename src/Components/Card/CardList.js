/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Card from "./Card";
import {theme} from "../../Styles/theme";

export default function CardListGoals(props) {
  const { data } = props;
  const {mq} = theme;

  const List = styled.ul({
    position: 'relative',
    listStyle: "none",
    columnGap: 16,
    rowGap: 16,
    display: "grid",
    margin: 0,
    padding: 0,
    [mq[1]]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      // gridTemplateColumns: "auto 1fr 1fr 1fr",
    },
  })

  return (
    <List>
      {data.map((el, index) => (    
          <Card key={index} data={el} />
        ))
      }
    </List>
  );
}
