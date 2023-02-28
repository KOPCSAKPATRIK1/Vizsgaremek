import styled from "styled-components";
import Navbar from '../components/Navbar'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2f2f2f;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
 
  border: 2px solid #ffa1ff;
  width: 20%;
  padding: 20px;
  background-color: white;
  text-align: center;
  box-shadow: 0px 0px 20px #1f1f1f;
  background: #494949;
  color:white;
 
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 5px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid #323232;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #626262;
  color: white;
  cursor: pointer;
  letter-spacing: 3px;
  border: 2px solid #323232;
  font-weight: 400;
`;

const Register = () => {
  return (
    <div>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>REGISZTRÁCIÓ</Title>
        <Form>
          <Input placeholder="Keresztnév" />
          <Input placeholder="Vezetéknév" />
          <Input placeholder="E-mail" />
          <Input placeholder="Jelszó" />
          <Input placeholder="Jelszó újra" />
          <Agreement>
          Fiók létrehozásával hozzájárulok személyes adataim  <b>ADATVÉDELMI SZABÁLYZAT</b> szerinti kezeléséhez 
          </Agreement>
          <Button>FIÓK LÉTREHOZÁSA</Button>
        </Form>
      </Wrapper>
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Register;