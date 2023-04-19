import styled from "styled-components";
import React, { useState, useEffect } from "react";
import  { keyframes } from "styled-components";
import { LocalShipping , CreditCard } from "@mui/icons-material";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Icon = styled.div`
  
  align-items: center;
  font-size: 30px;
  display: flex;
`;
const Wrapper = styled.div`
  margin-top: 5%;
  width: 30%;
  display: flex;
  justify-content: center;
  background-color: #595959;
  -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
  box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 20px;
  border-radius: 15px;
  animation: ${fadeIn} 0.5s ease-in-out;
  border: 2px solid #ffa1ff;
`;


const Container = styled.div`

    width: 85%;
    padding: 5% 10%;
`
const Name = styled.div`

justify-content: space-between;
    display: flex;
    width: 100%;

    div {
        width: 45%;
    }
`
const Input = styled.input`

  width: 100%;
        min-height: 25px;
        border: 0;
        font-size: 1rem;
        letter-spacing: .15rem;
        margin-top: 5px;
        color: black;
        border-radius: 4px;
`
const Label = styled.label`

text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
        color: white;
`
const Address = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        width: 30%;
    }
`
const CardInfo = styled.div`
     display: flex;
    justify-content: space-between;

    div {
        width: 40%;
    }
`
const Buttons = styled.div`
     margin-top: 20px;
     display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
      margin: 3px 0;
        height: 30px;
        width: 40%;
        color: #ffffff;
        background-color: #2a2a2c;
        text-transform: uppercase;
        border: 0;
        border-radius: .3rem;
        letter-spacing: 2px;
        box-shadow: 0px 0px 5px black;
        &:hover {
            background-color: #3e3e3e;
      
        }
`


const Checkout = ({ isOpen, handleClose }) => {
    const [showCheckout, setShowCheckout] = useState(false);
  
    useEffect(() => {
      setShowCheckout(isOpen);
    }, [isOpen]);
  
   
   
    const handleCloseClick = () => {
      setShowCheckout(false);
      handleClose();
    };
  

    return (
      
        <Wrapper className={showCheckout ? "fade-in" : ""}>
            <Container>
        <h1>
          
        <Icon><LocalShipping fontSize="large"> </LocalShipping> Szállítási adatok</Icon>
        </h1>
        <Name>
            <div>
                <Label  htmlFor="l-name">Vezetéknév</Label>
                <Input type="text" name="l-name"></Input>
            </div>
            <div>
                <Label  htmlFor="f-name">Keresztnév</Label>
                <Input type="text" name="f-name"></Input>
            </div>
        </Name>
        <div >
            <Label  htmlFor="name">Utca, házszám</Label>
            <Input type="text" name="address"></Input>
        </div>
        <Address>
             <div>
                <Label  htmlFor="city">Város</Label>
                <Input type="text" name="city"></Input>
             </div> 
            <div>
                <Label  htmlFor="state">Megye</Label>
                <Input type="text" name="state"></Input>
            </div>
            <div>
                <Label  htmlFor="zip">Irányítószám</Label>
                <Input type="text" name="zip"></Input>
            </div>
        </Address>
        <h1>
          <Icon><CreditCard fontSize="large"> </CreditCard>Fizetési adatok</Icon> 
        </h1>
        <div>
            <Label  htmlFor="card-num">Kártyaszám</Label>
            <Input type="text" name="card-num"></Input>
        </div>
        <CardInfo>
            <div>
                <Label  htmlFor="card-num">Lejárat</Label>
                <Input type="text" name="expire"></Input>
            </div>   
            <div>
                <Label  htmlFor="card-num">CCV</Label>
                <Input type="text" name="security"></Input>
            </div>
        </CardInfo>
        <Buttons>
            <Button>Vásárlás</Button>
            <Button onClick={handleCloseClick}>Vissza</Button>
        </Buttons>  
   
        </Container>
        </Wrapper>
        
    )
  }
export default Checkout;