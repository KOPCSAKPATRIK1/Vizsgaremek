import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  color: white;
  border-bottom: 1px solid #ffa1ff;
`;

const ImgContainer = styled.div`
  flex: 1;

  margin-left: 10vw;
  margin-top: 30px;
  max-height: 60vh;
  vertical-align: middle;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px 0px 20px black;
`;

const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  vertical-align: middle;
  background: #e0e0e0;
  border-radius: 10px;
 
`;

const PreviewImage = styled.img`
  max-width: 20%;
  height: 7vh;
  flex:1;
  object-fit: cover;
  vertical-align: middle;
  background: white;
  text-align: center;
  margin-left: 30px;
  margin-top: 60px;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
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
`;

const singleProduct = () => {
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/2999/5106/products/5661741842_800x.png?v=1677548085" />
          <PreviewImage src="https://cdn.shopify.com/s/files/1/2999/5106/products/3745591167_1024x.png?v=1677548085" />
          <PreviewImage src="https://cdn.shopify.com/s/files/1/2999/5106/products/3423559116_1024x.png?v=1677548085" />
          <PreviewImage src="https://cdn.shopify.com/s/files/1/2999/5106/products/5661741842_800x.png?v=1677548085" />
          <PreviewImage src="https://cdn.shopify.com/s/files/1/2999/5106/products/3181792069_1024x.png?v=1677548085" />
          <PreviewImage src="https://cdn.shopify.com/s/files/1/2999/5106/products/2510197839_1024x.png?v=1677548085" />
        </ImgContainer>
        <InfoContainer>
          <Title>NIKE DUNK LOW IRONSTONE</Title>
     
          <Price>89 900 Ft</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>M??ret</FilterTitle>
              <FilterSize>
                <FilterSizeOption>EU40</FilterSizeOption>
                <FilterSizeOption>EU41</FilterSizeOption>
                <FilterSizeOption>EU42</FilterSizeOption>
                <FilterSizeOption>EU43</FilterSizeOption>
                <FilterSizeOption>EU44</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button>MEGVESZEM</Button>
          </AddContainer>
          <Desc>    
            A ???Banned??? Jordan 1-es cip?? sikere ut??n a Nike tervez??csapata m??g jobban r??koncentr??lt a kos??rcip??kre: 
            1985-ben mutatt??k be a Dunk modellt. Az AJ1-hez hasonl?? sz??n??ll??s mellett nagyon sok v??ltozatban jelent m??g meg, 
            t??bbek k??z??tt a ???Be True To Your School??? sorozatban nagy m??lt?? amerikai egyetemek sz??neiben. B??r a Nike Dunk a kos??rp??ly??kon
             ??s utc??n is n??pszer?? cip?? maradt, az igazi renesz??nszot a deszk??sok hozt??k el a k??tezres ??vek elej??n. A g??rdeszk??z??sra is
              teljesen alkalmas, strapab??r?? Dunk SB sz??mos kollabor??ci?? r??szese is volt: ??rdekes, s??t extr??m v??ltozatok jelentek meg, ??s
               ez a trend 2020-ban p??rg??tt fel igaz??n!
          </Desc>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default singleProduct;