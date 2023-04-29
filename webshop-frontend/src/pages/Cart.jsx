import { Delete } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
import Checkout from "../components/Checkout";
import { mobile, tablet } from "../responsive";

import React, { useState } from "react";
const Container = styled.div`
  color: white;
  text-shadow: 0px 0px 10px black;
`;
const Wrapper = styled.div`
  padding: 50px;
  padding-left: 100px;
  padding-right: 100px;

  border-bottom: 1px solid #ffa1ff;
  ${mobile({ padding: "50px" })}
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  letter-spacing: 4px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  height: 30px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  border: 2px solid #ffa1ff;
  border-radius: 20px;
  background-color: #4a4a4a;
  cursor: pointer;
  &:hover {
    background-color: #2d2d2d;
  }
  color: white;
  font-size: 15px;
  box-shadow: 0px 0px 5px black;
  ${mobile({ padding: "20px", fontSize: "15px" })}
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column", paddingBottom: "40px" })}
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ width: "200px", padding: "0px", marginLeft: "20px" })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    paddingBottom: "70px",
    textAlign: "center",
    flexDirection: "row",
  })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "20px" })}
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  background-color: #2d2d2d;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "22px"};
  align-items: center;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-right: 20px;
  border: 2px solid #ffa1ff;
  border-radius: 20px;
  background-color: #2d2d2d;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #181818;
  }
  color: white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 6px;
  box-shadow: 0px 0px 10px black;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterShipping = styled.select`
  margin-left: 0px;
  padding: 3px;
  border-radius: 10px;
  background-color: #2d2d2d;
  border: 1px solid #ffa1ff;
  color: white;
  width: 76px;

  margin: auto;
  margin-left: -100%;
  ${mobile({ marginLeft: "0" })}
  ${tablet({ marginLeft: "-40%" })}
`;

const FilterShippingOption = styled.option``;

const Cart = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(1);

  const shippingOptions = [
    { id: 1, name: "Standard (5-7 nap)", price: 1200 },
    { id: 2, name: "Expressz (2-3 nap)", price: 4000 },
  ];
  const handleCheckoutClick = () => {
    setIsCheckoutOpen(true);
  };
  const handleClose = () => {
    setIsCheckoutOpen(false);
  };
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct({ productId }));
  };

  return (
    <Container>
      <Navbar />
      {isCheckoutOpen && (
        <Checkout
          handleClose={handleClose}
          selectedShippingMethod={shippingOptions.find(
            (option) => option.id === selectedShipping
          )}
        />
      )}
      <Wrapper>
        <Title>KOSÁR</Title>
        <Top>
          <Link to="/products">
            <TopButton>Tovább vásárlok</TopButton>
          </Link>
          <TopTexts>
            <TopText>Termékek({cart.quantity})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product.id}>
                <ProductDetail>
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <Image src={product.imageUrl1} />
                  </Link>
                  <Details>
                    <ProductName>
                      <b>Termék:</b> {product.name}
                    </ProductName>

                    <ProductSize>
                      <b>Méret:</b> {product.selectedSize}
                    </ProductSize>
                    <ProductId>
                      <b>Termék azonosító:</b> {product.id}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Delete onClick={() => handleRemoveProduct(product.id)} />
                  </ProductAmountContainer>

                  <ProductPrice>
                    {product.price.toLocaleString()} Ft
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>RENDELÉS ÁTTEKINTÉSE</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Részösszeg:</SummaryItemText>
              <SummaryItemPrice>
                {cart.total.toLocaleString()} Ft
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Szállítás:</SummaryItemText>
              <Filter>
                <FilterShipping>
                  {shippingOptions.map((option) => (
                    <FilterShippingOption
                      key={option.id}
                      onClick={() => setSelectedShipping(option.id)}
                      active={option.id === selectedShipping}
                    >
                      {option.name}
                    </FilterShippingOption>
                  ))}
                </FilterShipping>
              </Filter>

              <SummaryItemPrice>
                {shippingOptions
                  .find((option) => option.id === selectedShipping)
                  .price.toLocaleString()}{" "}
                Ft
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Összesen:</SummaryItemText>
              <SummaryItemPrice>
                {(
                  cart.total +
                  shippingOptions.find(
                    (option) => option.id === selectedShipping
                  ).price
                ).toLocaleString()}{" "}
                Ft
              </SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleCheckoutClick}>FIZETÉS</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
