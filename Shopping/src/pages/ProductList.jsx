import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const catagory = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{catagory}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="catagory" onChange={handleFilters}>
            <Option disabled>
              Item-Catagory
            </Option>
            <Option>Covid-Essentials</Option>
            <Option>Healthcare-Devices</Option>
            <Option>Health-Food-and-Drinks</Option>
            <Option>Personal-Care</Option>
            <Option>Ayurvedic-Care</Option>
            <Option>Medical-Supplements</Option>
            <Option>Mother-and-Baby-Care</Option>
            <Option>Accessories-and-Wearables</Option>
            <Option>Skin-Care</Option>
            <Option>Diabetic-Care</Option>
            <Option>Health-Condition</Option>
            <Option>Sexual-Wellness</Option>
            <Option>Home-Care</Option>
            <Option>Fitness-and-Supplements</Option>
            <Option>Elderly-Care</Option>
            <Option>Surgicals-and-Dressings</Option>
            <Option>Pet-Care</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products catagoryt={catagory} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
