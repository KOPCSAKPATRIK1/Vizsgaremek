import { AccountCircle, LocalMall, Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
   padding: 10px 20px; 
   display: flex;
   justify-content: space-between;
   background-color: #212121;
   color: #ffa1ff;
   height: 80px;
   border-bottom: 2px solid #ffa1ff;
`
const Left = styled.div`
    flex:0.5;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex:1.5;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 40px;
    
    
    
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: right;
    word-spacing: 20px;
    cursor: pointer;
    
    
`
const Language =  styled.div`
    font-size:20px;
    cursor:pointer;
    margin-right: 30px;
`

const Logo = styled.div`
 flex:1;
 margin-right: 30px;
 align-items: center;
 cursor: pointer;
 font-variant: small-caps;
`
const Linkek = styled.div`
justify-content: right;
font-size: 20px;
word-spacing: 20px;
cursor: pointer;
align-items: center;
display: flex;
`
const MenuIcons = styled.div`
cursor: pointer;
align-items: center;
font-size: 130px;
display: flex;
margin-left: 25px;

`
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 5,
        top: 5,
        border: `2px solid ${red}`,
       
        fontSize: `20px`,
    },
  }));
  


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
        <Center><Logo>FootFrenzy</Logo><Linkek> FŐOLDAL SNEAKEREK RELEASES INFO</Linkek>  </Center>
        <Right>
                <MenuIcons>
                               
                  
                <AccountCircle style={{fontSize:"40px", marginLeft:"10px", marginRight:"10px"}}></AccountCircle>
                <Search style={{fontSize:"40px", marginLeft:"10px", marginRight:"10px"}}></Search>
                <StyledBadge badgeContent={4} color="default">
                <LocalMall style={{fontSize:"40px", marginLeft:"10px", marginRight:"10px"}} color="inherit"></LocalMall> 
                </StyledBadge>  
                </MenuIcons>   
        </Right>
      </Wrapper>
    
  )
}

export default Navbar
