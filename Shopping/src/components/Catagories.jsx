import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CatagoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 10px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Cat = styled.div`
display: flex;
${mobile({ padding: "0px", flexDirection:"column" })}
`
const Title = styled.h1`
  margin: 5px;
  weight: bold;
  font-size: 20px;
`;

const Categories = () => {
  return (
    <Container>
          <Title>Catagories:</Title>
          <Cat>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}</Cat>
    </Container>
  );
};

export default Categories;
