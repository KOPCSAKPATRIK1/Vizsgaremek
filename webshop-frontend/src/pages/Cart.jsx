import { Add, Remove, Delete} from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Container = styled.div`
 color:white;
  text-shadow: 0px 0px 10px black;
`
const Wrapper = styled.div`
  padding: 50px;
  padding-left: 100px;
  padding-right: 100px;
  
  border-bottom: 1px solid #ffa1ff;
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
  &:hover{
      background-color: #2d2d2d;
  }
  color: white;
  font-size: 15px;
  box-shadow: 0px 0px 5px black;
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #ffa1ff;
  border: none;
  height: 1px;
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
  font-size: ${(props) => props.type === "total" && "24px"};
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
  &:hover{
      background-color: #181818;
  }
  color: white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 6px;
  box-shadow: 0px 0px 10px black;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const shipping = 1200
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>KOSÁR</Title>
        <Top>
          <Link to="/products" ><TopButton>Tovább vásárlok</TopButton></Link>
          <TopTexts>
            <TopText>Termékek({cart.quantity})</TopText>
          </TopTexts>
          
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product=>( 
            <>
            <Product key={product.id}>
              <ProductDetail>
                <Image src={product.imageUrl1} />
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
                  <Add/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                  <Delete/>
                </ProductAmountContainer>
            
                <ProductPrice>{product.price.toLocaleString()} Ft</ProductPrice>
              </PriceDetail>
            </Product>
              
              </>
              ))}
          
            
          </Info>
          <Summary>
            <SummaryTitle>RENDELÉS ÁTTEKINTÉSE</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Részösszeg</SummaryItemText>
              <SummaryItemPrice>{cart.total.toLocaleString()} Ft</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Szállítás</SummaryItemText>
              <SummaryItemPrice>1200 Ft</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Összesen</SummaryItemText>
              <SummaryItemPrice>{(cart.total+shipping).toLocaleString()} Ft</SummaryItemPrice>
            </SummaryItem>
            <Button>FIZETÉS</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;