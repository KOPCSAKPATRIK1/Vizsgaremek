import {
    ShoppingCartOutlined,
  } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
  import styled from "styled-components";
  import {mobile} from "../responsive"
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    border-radius: 20px;
    
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 15px;
    min-width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #272727;
    border-radius: 20px;
    position: relative;
    box-shadow: 0px 0px 10px;
    border: 2px solid #ffa1ff;
    &:hover ${Info}{
      opacity: 1;
    }
    ${mobile({ minWidth: "60px", height: "70px", margin: "7px", padding: "30px", paddingBottom: "50px", width: "100%",})}
  `;
  

  
  const Image = styled.img`
    height: 70%;
    z-index: 2;
    ${mobile({height: "130%", paddingBottom: "40px"})}
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #242424;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  `;
  
  const Title = styled.p`
  color:white;
    width: 100%;
    height: 155%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
    ${mobile({fontSize: "13px", height: "125%"})}
`;

const Price = styled.p`
color:white;
  width: 100%;
  height: 175%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({fontSize: "13px", height: "165%"})}
  
`;
const Product = ({ item }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <Container onClick={handleImageClick}>
      <Image src={item.imageUrl1}  />
      <Info></Info>
      <Title>{item.name}</Title>
      <Price>{item.price.toLocaleString()} Ft </Price>
    </Container>
  );
};
  
  export default Product;