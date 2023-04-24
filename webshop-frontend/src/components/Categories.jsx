import styled from 'styled-components';
import {categories} from "../data";
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    padding-left: 16vw;
    padding-right: 16vw;
    padding-bottom: 6vw;
    justify-content: space-between;
    border-bottom: 1px solid #ffa1ff;
    ${mobile({  flexDirection:"column",  paddingBottom: "60px" })}
`
const Text = styled.div`
      
      color: white;
      text-align: center;
      font-size: 50px;
      text-shadow: 0px 0px 10px black;
      font-weight: bold;
      ${mobile({  marginTop: "30px", fontSize: "26px" })}
`

function Categories() {
  return (
    <div>
    <Text>VÁLOGASS A KEDVENCEID KÖZÜL!</Text>
     <Container>
              {categories.map(item=>(
              <CategoryItem key={item.id} item={item} />
              ))}
      </Container>
    </div>
  )
}

export default Categories
