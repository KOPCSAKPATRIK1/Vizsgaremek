import styled from "styled-components";
import Product from "./Product";
import React, { useState, useEffect } from "react";
import {mobile} from "../responsive"

const Container = styled.div`
    margin-top: 20px;
    padding: 20px;
    padding-left: 11vw;
    padding-right: 11vw;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #ffa1ff;
    ${mobile({padding:"10px" })}

`;
const Text = styled.div`
      margin-top: 100px;
      color: white;
      text-align: center;
      font-size: 50px;
      text-shadow: 0px 0px 10px black;
      font-weight: bold;
      
`

const Products = ({ cat, filters, sort }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          cat
            ? `http://localhost:3000/shoes/category/${cat}`
            : 'http://localhost:3000/shoes'
        );
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        let actualData = await response.json();
        setError(null);
        setData(actualData.sort((a, b) => b.id - a.id)); // Update data state
        setFilteredData(actualData.sort((a, b) => b.id - a.id)); // Update filteredData state
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [cat]);
  

  useEffect(() => {
    // Filter the products based on the filter values
    const filteredProducts = data.filter((item) => {
      // Check if the category filter is applied
      if (filters['category.id'] && filters['category.id'] !== item.category.id.toString()) {
        return false;
      }
      return true;
    });
    setFilteredData(filteredProducts);
  }, [data, filters]);
  useEffect(() => {
    if (filteredData) {
      // Apply sort
      let sortedData = [...filteredData]; // Create a copy of filteredData to sort
      if (sort === "newest") {
        sortedData.sort((a, b) => b.id - a.id);
      } else if (sort === "asc") {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (sort === "desc") {
        sortedData.sort((a, b) => b.price - a.price);
      }
      if (JSON.stringify(filteredData) !== JSON.stringify(sortedData)) {
        setFilteredData(sortedData);
      }
    }
  }, [sort, filteredData]);
  

  return (
    <div>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}

      <Container>
        {filteredData.length > 0 ? (
          filteredData.map((item) => <Product key={item.id} item={item} />)
        ) : (
          <Text>Nincs ilyen termék.</Text>
        )}
      </Container>
    </div>
  );
};

export default Products;