import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import React from "react";
import LogoutButton from "../components/LogoutButton";
import { mobile } from "../responsive";
import Liked from "../components/Liked";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ffa1ff;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: #494949;
  border: 2px solid #ffa1ff;

  color: white;
  text-align: center;
  box-shadow: 0px 0px 20px #1f1f1f;
  ${mobile({ width: "50%" })}
  margin: auto;
  margin-top: 5%;
  ${mobile({ marginTop: "14%" })}
`;

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;

  return (
    <div>
      <Navbar />
      <Wrapper>
        <p>Szia, {username}!</p>
        <LogoutButton></LogoutButton>
      </Wrapper>
      <Container>
        <Liked></Liked>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Profile;
