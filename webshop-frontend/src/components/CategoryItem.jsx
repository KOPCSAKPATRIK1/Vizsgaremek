import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 101%;
  display: flex;
  
  align-items: center;
  justify-content: center;
  text-shadow: 0px 0px 15px black;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const Container = styled.div`
  flex: 1;
  margin-top: 50px;
  height: 250px;
  width: 250px;
  position: relative;
  cursor: pointer;
  &:hover ${Info} {
    opacity: 1;
  }
  ${mobile({ height: "15vh", marginTop:"30px" })};
  ${tablet({ height: "20vh",width: " 15vw" })};
 margin-left:20px;
 margin-right:20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 3px solid #ffa1ff;
  border-radius: 20px;
  color: #ffa1ff;
  ${mobile({ height: "15vh" })}
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  
  ${mobile({ fontSize: "25px", paddingTop: "5px"})}
`;

const CategoryItem = ({ item }) => {
  return (
    <Link to={`/products/${item.cat}`}>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
        </Info>
      </Container>
    </Link>
  );
};

export default CategoryItem;
