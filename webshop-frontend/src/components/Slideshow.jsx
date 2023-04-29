import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
  ${tablet({ height: "60vh" })}
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #797979;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0.8;
  color: #ffa1ff;

  top: -200px;
  bottom: 0;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  z-index: 2;
  border: 2px solid #ffa1ff;
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  ${tablet({ height: "60vh" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;
const Img = styled.img`
  width: 100vw;
  border-bottom: 2px solid #ffa1ff;
  color: #ffa1ff;
  box-shadow: 0px 4px 30px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  position: absolute;
  margin-left: 200px;
  color: white;
  text-shadow: 0px 0px 15px black;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
      </Arrow>
    </Container>
  );
};

export default Slideshow;
