import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useEffect, useState } from 'react';
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
  const location= useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const { name, value } = e.target;
    
    if (value !== "Minden") {
      setFilters({
        ...filters,
        [name]: value,
      });
    } else {
      // If "Minden" is selected, remove the filter for that category
      if (filters[name]) {
        const { [name]: removed, ...rest } = filters;
        setFilters(rest);
      }
    }
  }


  console.log(filters);
  console.log(sort);
  return (
    <Container>
      <Navbar />
   
     
      <FilterContainer>
        <Filter>
          
          <Select name='category.id' onChange={handleFilters}>
          <Option disabled>
              Kategória
            </Option>
            <Option>
              Minden
            </Option>
            <Option value={1}>Air Force</Option>
            <Option value={2}>Dunk</Option>
            <Option value={3}>Jordan</Option>
            <Option value={4}>Yeezy</Option>
          </Select>
          <Select name='sizes.size' onChange={handleFilters}>
            <Option disabled>
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
            <Option>44</Option>
            <Option>45</Option>
            <Option>46</Option>
            <Option>47</Option>
          </Select>
        </Filter>
        <Filter>
          
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Legújabb elöl</Option>
            <Option value="asc">Ár (növekvő)</Option>
            <Option value="desc">Ár (csökkenő)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
