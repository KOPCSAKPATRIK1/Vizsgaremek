import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

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
  return (
   <div> 
    <Text>NÉPSZERŰ SNEAKEREK</Text>
    <Container>          
      {popularProducts.map((item) => (
        <Product item={item}  />
      ))}
    </Container>
   </div>
  );
};

export default Products;
