import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Popup from "../components/Popup";
import {mobile, tablet} from "../responsive"

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  color: white;
  border-bottom: 1px solid #ffa1ff;
  ${mobile({flexDirection: 'column', padding:"10px"})}
  ${tablet({flexDirection: 'column', padding:"10px", width:"700px"})}
`;

const ImgContainer = styled.div`
  flex: 1;

  margin-left: 10vw;
  margin-top: 30px;
  height: 64vh;
  vertical-align: middle;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px 0px 20px black;
  ${mobile({margin: 10})}
 
`;

const Image = styled.img`
  width: 100%;
  height: 45vh;
  object-fit: cover;
  vertical-align: middle;
  background: #e0e0e0;
  border-radius: 10px;
  ${mobile({height:"25vh"})}
`;

const PreviewImage = styled.img`
  max-width: 20%;
  height: 7vh;
  flex:1;
  object-fit: cover;
  vertical-align: middle;
  background: white;
  text-align: center;
  margin-left: 55px;
  margin-top: 60px;

  border: 1px solid grey;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  ${mobile({maxWidth:"21%", marginLeft:"10px", marginTop:"10px",marginBottom:"20px", height:"5vh", })}
  ${tablet({maxWidth:"51%", marginLeft:"50px", marginTop:"10px",marginBottom:"20px", height:"5vh", })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
  ${mobile({padding:"0px 20px", textAlign:"center"})}
  
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 20px 0px;
  max-width: 500px;
  line-height: 30px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({marginLeft:"100px"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;



const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;


const Button = styled.button`
  padding: 10px;
  border: 2px solid #ffa1ff;
  border-radius: 20px;
  background-color: #4a4a4a;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #2d2d2d;
  }
  color: white;
  font-size: 15px;
  letter-spacing: 2px;
  ${mobile({marginLeft:"90px"})}
`;

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [showPopup, setShowPopup] = useState(false); // new state variable
  const dispatch = useDispatch();
  const fetchData = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // log the data variable
      setProduct(data);
      setMainImage(data.imageUrl1);
    });
  }
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
   fetchData()
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  };

  const handlePreviewClick = (imageSrc) => {
    setMainImage(imageSrc);
  };
  
  const handleClick = () => {
    dispatch(addProduct({...product, quantity, selectedSize }));
    setShowPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };

 
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image  src={mainImage} />
          <PreviewImage src={product.imageUrl1} onClick={() => handlePreviewClick(product.imageUrl1)} />
          <PreviewImage src={product.imageUrl2}  onClick={() => handlePreviewClick(product.imageUrl2)} />
          <PreviewImage src={product.imageUrl3}  onClick={() => handlePreviewClick(product.imageUrl3)} />
          <PreviewImage src={product.imageUrl4} onClick={() => handlePreviewClick(product.imageUrl4)} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
     
          <Price>{product.price.toLocaleString()} Ft</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Méret</FilterTitle>
              <FilterSize onChange={(e) => setSelectedSize(e.target.value)}>
              {product.sizes.map((s) => (
           <FilterSizeOption key={s.id}>{s.size}</FilterSizeOption>
                ))}       
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button onClick={handleClick}>MEGVESZEM</Button>
            {showPopup && <Popup message="Hozzáadva a kosárhoz" handleClose={handleClosePopup} />}
          </AddContainer>
          <Desc>    
          {product.desc}
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
