import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  margin-left: 230px;
  margin-right: 210px;
  margin-top:50px;
margin-bottom:0px;
`;



const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
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
  letter-spacing: 1px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
   
     
      <FilterContainer>
        <Filter>
          
          <Select>
            <Option disabled selected>
              Kategória
            </Option>
            <Option>Air Force</Option>
            <Option>Dunk</Option>
            <Option>Jordan</Option>
            <Option>Yeezy</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Méret
            </Option>
            <Option>36</Option>
            <Option>37</Option>
            <Option>38</Option>
            <Option>39</Option>
            <Option>40</Option>
            <Option>41</Option>
            <Option>42</Option>
            <Option>43</Option>

          </Select>
        </Filter>
        <Filter>
          
          <Select>
            <Option selected>Megjelenési sorrend</Option>
            <Option>Ár (növekvő)</Option>
            <Option>Ár (csökkenő)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
