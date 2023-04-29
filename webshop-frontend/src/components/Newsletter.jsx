import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
const Container = styled.div`
  height: 30vh;
  background-color: #272727;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #ffa1ff;
  padding-bottom: 30px;
  ${mobile({ paddingBottom: "10px", paddingTop: "0px" })}
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "22px", textAlign: "center" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "14px", textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "70%", height: "26px" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  background-color: #555555;
  color: white;
  font-size: 20px;
  ${mobile({ fontSize: "14px", textAlign: "center" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ffa1ff;
  color: #272727;
  cursor: pointer;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Validate email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      alert("Hibás email cím!");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <Container>
      <Title>Ne maradj le a legújabb termékeinkről!</Title>
      {subscribed ? (
        <Desc>Feliratkoztál a hírlevélre!</Desc>
      ) : (
        <Desc>Kapj értesítést email-ben közelgő akcióinkról.</Desc>
      )}
      <InputContainer>
        <Input
          placeholder="Az ön email címe"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleSubscribe}>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
