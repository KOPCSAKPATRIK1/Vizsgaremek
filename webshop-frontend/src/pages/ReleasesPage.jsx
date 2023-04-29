import React from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import Releases from "../components/Releases";
import { mobile } from "../responsive";

const Text = styled.div`
  margin-top: 100px;
  color: white;
  text-align: center;
  font-size: 50px;
  text-shadow: 0px 0px 10px black;
  font-weight: bold;
  ${mobile({ fontSize: "30px", marginTop: "36px" })}
`;
const ReleasesPage = () => {
  return (
    <div>
      <Navbar />
      <Text>KÖZELGŐ SNEAKEREK</Text>
      <Releases />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ReleasesPage;
