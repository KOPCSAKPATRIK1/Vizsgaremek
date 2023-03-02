import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";

  
  const Container = styled.div`
    display: flex;
    background-color: #1b1b1b;
    color: white;
   
  `;
  
  const Left = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 15vw;
  `;
    
  const Center = styled.div`
    flex: 1;
    padding: 20px;

  `;
  
 const Right = styled.div`
  flex: 0.5;
  padding: 20px;
  margin-right: 15vw;
`;

  const SocialContainer = styled.div`
    display: flex;
    color: #242424;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffa1ff;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  

  
  const Title = styled.h3`
    margin-bottom: 30px;
   
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 40%;
    margin-bottom: 10px;
  `;
  

  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
  `;
  
  const Payment = styled.div`
      height: 8vh;
      background-color: #0f0f0f;
      width: 99%;
      align-items: center;
      
      display: flex;
      padding: 10px;
      justify-content: space-evenly;
      
     
      
  `;
  
  const Footer = () => {
    return (
    <div>
      <Container>
        
        <Left>
            
          <Title>KÖVESS MINKET!</Title>
      
          <SocialContainer>
            <SocialIcon color="242424">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="242424">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="242424">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title>SEGÍTSÉG ÉS INFORMÁCIÓ</Title>
          <List>
            <ListItem>Vásárlás</ListItem>
            <ListItem>Mérettáblázat</ListItem>
            <ListItem>Adatvédelmi irányelvek</ListItem>
            <ListItem>ÁSZF</ListItem>
            <ListItem>Vásárlás előtti tudnivalók</ListItem>
            <ListItem>FAQ</ListItem>
          </List>
        </Center>
        
        <Right>
          <Title>KAPCSOLAT</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Budapest, Thököly út 48-54, 1146
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +36 70 123 4567
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> footfrenzy.kapcsolat@gmail.com
          </ContactItem>
          
        </Right>
     
      </Container>
      <Payment>
            <img src="https://static.footshop.com/themes/default-bootstrap/dist/images/services/paypal.png" alt=""/>
            <img src="https://static.footshop.com/themes/default-bootstrap/dist/images/services/visa.png" alt="" />
            <img src="https://static.footshop.com/themes/default-bootstrap/dist/images/services/mastercard.png" alt="" />
            <img src="https://static.footshop.com/themes/default-bootstrap/dist/images/services/maestro.png" alt="" />
        </Payment>
      </div>
    );
  };
  
  export default Footer;
  