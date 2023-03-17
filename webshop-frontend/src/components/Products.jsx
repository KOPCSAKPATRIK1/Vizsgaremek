import styled from "styled-components";
import Product from "./Product";
import React, { useState, useEffect } from "react";
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
    
`;
const Text = styled.div`
      margin-top: 100px;
      color: white;
      text-align: center;
      font-size: 50px;
      text-shadow: 0px 0px 10px black;
      font-weight: bold;
      
`

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/shoes"
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.sort((a, b) => b.id - a.id));
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])

  return (
   <div> 
     {loading && <div>A moment please...</div>}
    {error && (
      <div>{`There is a problem fetching the post data - ${error}`}</div>
    )}
    
    <Container>          
      {data &&
      data.map((item) => (
        <Product key={item.id} item={item}  />
      ))}
    </Container>
   </div>
  );
};

export default Products;
