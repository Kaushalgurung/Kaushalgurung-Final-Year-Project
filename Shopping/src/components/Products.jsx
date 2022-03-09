import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { mobile } from "../responsive";

const Container = styled.div`
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`;
const Title = styled.h1`
  margin: 15px;
  weight: bold;
  font-size: 20px;
`;
const Pro = styled.div`
display: flex;
${mobile({ padding: "0px", flexDirection:"column" })}
`

const Products = ({catagory, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(catagory, filters, sort);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          catagory
            ? `http://localhost:5000/api/products?category=${catagory}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [catagory]);

  useEffect(() => {
    catagory &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, catagory, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
      <Title>Products:</Title>
      <Pro>{catagory
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
            </Pro>
    </Container>
  );
};

export default Products;
