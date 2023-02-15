import { AccountCircle, LocalMall, Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
   padding: 10px 20px; 
   display: flex;
   justify-content: space-between;
   background-color: #212121;
   color: #ffa1ff;
   height: 80px;
   
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 40px;
    justify-content: center;
    
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: right;
    cursor: pointer;
    
`
const Language =  styled.div`
    font-size:20px;
    cursor:pointer;
`

const Logo = styled.div`
text-align: left;
`

//const Icon = styled(AccountCircle)`
//  color: black;
// font-size: 500px;
//`;

const Navbar = () => {
  return (
  
      <Wrapper>
        <Left>
            <Language>HU</Language>
           
        </Left>
        <Center>FootFrenzy</Center>
        <Right>
                
                <AccountCircle></AccountCircle>
                <Search></Search>
                <LocalMall></LocalMall>    
        </Right>
      </Wrapper>
    
  )
}

export default Navbar
