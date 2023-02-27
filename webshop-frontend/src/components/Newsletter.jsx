import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  background-color: #272727;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #ffa1ff;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  background-color: #555555;
  color: white;
  font-size: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ffa1ff;
  color: #272727;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Ne maradj le a legújabb termékeinkről!</Title>
      <Desc> Kapj értesítést email-ben közelgő akcióinkról.</Desc>
      <InputContainer>
        <Input placeholder="Az ön email címe" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;