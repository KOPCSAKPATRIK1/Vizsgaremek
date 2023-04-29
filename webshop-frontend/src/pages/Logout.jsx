import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import React from "react";
import LogoutButton from "../components/LogoutButton";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2f2f2f;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ffa1ff;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #494949;
  border: 2px solid #ffa1ff;
  color: white;
  text-align: center;
  box-shadow: 0px 0px 20px #1f1f1f;
  ${mobile({ width: "50%" })}
`;

const Logout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <p>Üdv, {username}!</p>
          <LogoutButton></LogoutButton>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Logout;
