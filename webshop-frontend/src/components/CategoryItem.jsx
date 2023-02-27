import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 2.5%;
  height: 35vh;
  position: relative;
  cursor: pointer;
 
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #ffa1ff;
  border-radius: 20px;
  color: #ffa1ff;
  box-shadow: 0px 0px 40px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 0px 15px black;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;


const CategoryItem = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
            <Info>
                 <Title>{item.title}</Title>
                
            </Info>
      </Container>
    );
  };
  
  export default CategoryItem;
  