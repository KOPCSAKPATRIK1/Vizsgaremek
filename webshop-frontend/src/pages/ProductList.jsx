import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";
import { mobile, tablet } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  margin-left: 230px;
  margin-right: 210px;
  margin-top: 50px;
  margin-bottom: 0px;

  ${mobile({ marginLeft: "20px", marginRight: "60px" })}
  ${tablet({ marginLeft: "20px", marginRight: "60px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 2px solid #ffa1ff;
  border-radius: 20px;
  background-color: #4a4a4a;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #2d2d2d;
  }
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const { name, value } = e.target;

    if (value !== "Minden") {
      setFilters({
        ...filters,
        [name]: value,
      });
    } else {
      // If "Minden" is selected, remove the filter for that category
      if (filters[name]) {
        const { [name]: removed, ...rest } = filters;
        setFilters(rest);
      }
    }
  };

  return (
    <Container>
      <Navbar />
     
      <FilterContainer>
      {!cat && (
        <Filter>
          <Select name="category.id" onChange={handleFilters}>
            <Option disabled>Kategória</Option>
            <Option>Minden</Option>
            <Option value={1}>Air Force</Option>
            <Option value={2}>Dunk</Option>
            <Option value={3}>Jordan</Option>
            <Option value={4}>Yeezy</Option>
          </Select>
        </Filter>
          )}
        <Filter>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Legújabb elöl</Option>
            <Option value="asc">Ár (növekvő)</Option>
            <Option value="desc">Ár (csökkenő)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
