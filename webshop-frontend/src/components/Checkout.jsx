import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { keyframes } from "styled-components";
import { LocalShipping, CreditCard } from "@mui/icons-material";
import { mobile } from "../responsive";

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
  ${mobile({ fontSize: "20px", textAlign: "center" })}
`;
const Wrapper = styled.div`
  margin-top: 5%;
  width: 30%;
  display: flex;
  justify-content: center;
  background-color: #4b4b4b;
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
  ${mobile({ width: "75%" })}
`;

const Container = styled.div`
  width: 85%;
  padding: 5% 10%;
`;
const Name = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;

  div {
    width: 45%;
  }
`;
const Input = styled.input`
  width: 100%;
  min-height: 25px;
  border: 0;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  margin-top: 5px;
  color: black;
  border-radius: 4px;
`;
const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  color: white;
`;
const Address = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 30%;
  }
`;
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 40%;
  }
`;
const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  margin: 3px 0;
  height: 30px;
  width: 40%;
  color: #ffffff;
  background-color: #363638;
  text-transform: uppercase;
  border: 0;
  border-radius: 0.3rem;
  letter-spacing: 2px;
  box-shadow: 0px 0px 5px black;
  &:hover {
    background-color: #3e3e3e;
  }
`;

const Checkout = ({ isOpen, handleClose, selectedShippingMethod }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [addressObj, setAddressObj] = useState(null);
  const [orderObj, setOrderObj] = useState(null);
  useEffect(() => {
    setShowCheckout(isOpen);
  }, [isOpen]);

  const handleCloseClick = () => {
    setShowCheckout(false);
    handleClose();
  };

  const handleCheckout = async (event) => {
    event.preventDefault();

    // validate input fields
    if (!validatePostalCode(postalCode)) {
      alert("Hibás irányítószám!");
      return;
    }
    if (!validateExpire(cardExpire)) {
      alert("Hibás lejárat (MM/YY formátumban adjuk meg)!");
      return;
    }
    if (!validateSecurity(cardSecret)) {
      alert("Hibás CCV (3 számjegy)!");
      return;
    }
    if (!validateCardNumber(cardNumber)) {
      alert("Hibás kártyaszám (16 számjegy)!");
      return;
    }

    try {
      // create new address
      const response = await fetch("http://localhost:3000/address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ streetAddress, city, state, postalCode }),
      });
      const data = await response.json();
      setAddressObj(data);

      // create new order
      const userId = JSON.parse(localStorage.getItem("user")).id;
      const orderResponse = await fetch("http://localhost:3000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          addressId: data.id,
          shippingMethod: selectedShippingMethod.id, // Add selected shipping method ID
          paymentMethod: 2, // Add payment method ID
        }),
      });
      const orderData = await orderResponse.json();
      setOrderObj(orderData);

      // create new order items
      const cartItems = JSON.parse(localStorage.getItem("persist:cart"));
      const products = JSON.parse(cartItems.products);
      const selectedProducts = products.map((product) => ({
        id: product.id,
        selectedSize: product.selectedSize,
        quantity: product.quantity,
      }));
      selectedProducts.forEach(async (product) => {
        const userId = JSON.parse(localStorage.getItem("user")).id; // declare userId before using it
        const itemResponse = await fetch("http://localhost:3000/orderitem", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: product.id,
            sizeId: product.selectedSize,
            quantity: product.quantity,
            orderId: orderData.id,
          }),
        });
        const itemData = await itemResponse.json();
      });
      // update stock for each selected product
      await Promise.all(
        selectedProducts.map(async (product) => {
          const { id, selectedSize } = product;
          const stockResponse = await fetch(
            `http://localhost:3000/stock/subtract/${id}/${selectedSize}/1`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
            }
          );
          const stockData = await stockResponse.json();
        })
      );

      alert("Sikeres vásárlás!");
      // delete cart from localStorage
      localStorage.removeItem("persist:cart");
      //redirect to homepage
        window.location.href = "/";

    } catch (error) {
      console.error(error);
    }
  };
  const [CardNumberError, setCardNumberError] = useState("");
  const [expireError, setExpireError] = useState("");
  const [securityError, setSecurityError] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cardSecret, setCardSecret] = useState("");
  const validatePostalCode = (code) => {
    const regex = /^[0-9]{4}$/;
    return regex.test(code);
  };
  const validateCardNumber = (number) => {
    const regex = /^[0-9]{16}$/;
    if (!regex.test(number)) {
      setCardNumberError("Hibás kártyaszám (16 számjegy)!");
      return false;
    } else {
      setCardNumberError("");
      return true;
    }
  };
  const validateExpire = (expire) => {
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!regex.test(expire)) {
      setExpireError("Hibás lejárat (MM/YY formátumban adjuk meg)!");
      return false;
    } else {
      setExpireError("");
      return true;
    }
  };
  const validateSecurity = (security) => {
    const regex = /^[0-9]{3}$/;
    if (!regex.test(security)) {
      setSecurityError("Hibás CCV (3 számjegy)!");
      return false;
    } else {
      setSecurityError("");
      return true;
    }
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("persist:cart"));
    const products = JSON.parse(cartItems.products);
    const selectedProducts = products.map((product) => ({
      id: product.id,
      selectedSize: product.selectedSize,
      quantity: product.quantity,
    }));
    const userId = JSON.parse(localStorage.getItem("user")).id;
    console.log(selectedProducts, userId);
  }, []);

  return (
    <Wrapper className={showCheckout ? "fade-in" : ""}>
      <Container>
        <form onSubmit={handleCheckout}>
          <h1>
            <Icon>
              <LocalShipping fontSize="large"> </LocalShipping> Szállítási
              adatok
            </Icon>
          </h1>
          <Name>
            <div>
              <Label htmlFor="l-name">Vezetéknév</Label>
              <Input type="text" name="l-name" required></Input>
            </div>
            <div>
              <Label htmlFor="f-name">Keresztnév</Label>
              <Input type="text" name="f-name" required></Input>
            </div>
          </Name>
          <div>
            <Label htmlFor="name">Utca, házszám</Label>
            <Input
              type="text"
              name="address"
              onChange={(event) => setStreetAddress(event.target.value)}
              required
            ></Input>
          </div>
          <Address>
            <div>
              <Label htmlFor="city">Város</Label>
              <Input
                type="text"
                name="city"
                onChange={(event) => setCity(event.target.value)}
                required
              ></Input>
            </div>
            <div>
              <Label htmlFor="state">Megye</Label>
              <Input
                type="text"
                name="state"
                onChange={(event) => setState(event.target.value)}
                required
              ></Input>
            </div>
            <div>
              <Label htmlFor="zip">Irányítószám</Label>
              <Input
                type="text"
                name="zip"
                onChange={(event) => setPostalCode(event.target.value)}
                required
              ></Input>
            </div>
          </Address>
          <h1>
            <Icon>
              <CreditCard fontSize="large"> </CreditCard>Fizetési adatok
            </Icon>
          </h1>
          <div>
            <Label htmlFor="card-num">Kártyaszám</Label>
            <Input
              required
              type="text"
              name="card-num"
              onChange={(event) => setCardNumber(event.target.value)}
            ></Input>
          </div>
          <CardInfo>
            <div>
              <Label htmlFor="card-num">Lejárat</Label>
              <Input
                required
                type="text"
                name="expire"
                onChange={(event) => setCardExpire(event.target.value)}
              ></Input>
            </div>
            <div>
              <Label htmlFor="card-num">CCV</Label>
              <Input
                required
                type="text"
                name="security"
                onChange={(event) => setCardSecret(event.target.value)}
              ></Input>
            </div>
          </CardInfo>
          <Buttons>
            <Button type="submit">Vásárlás</Button>
            <Button onClick={handleCloseClick}>Vissza</Button>
          </Buttons>
        </form>
      </Container>
    </Wrapper>
  );
};
export default Checkout;
