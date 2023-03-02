import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 101%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 0px 15px black;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  
`;

const Container = styled.div`
  flex: 1;
  margin: 2.5%;
  height: 30vh;
  position: relative;
  cursor: pointer;
  &:hover ${Info}{
      opacity: 1;
    }
    
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 3px solid #ffa1ff;
  border-radius: 20px;
  color: #ffa1ff;

  
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
  