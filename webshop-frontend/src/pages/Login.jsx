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
  border-bottom: 1px solid #ffa1ff;
  
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #494949;
  border: 2px solid #ffa1ff;
  color: white;
  text-align: center;
  box-shadow: 0px 0px 20px #1f1f1f;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 5px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #323232;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #626262;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  letter-spacing: 3px;
  border: 2px solid #323232;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <div>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>BEJELENTKEZÉS</Title>
        <Form>
          <Input placeholder="E-mail" />
          <Input placeholder="Jelszó" />
          <Button>BEJELENTKEZÉS</Button>
          <Link>ELFELEJTETTED A JELSZAVAD?</Link>
          <Link>NINCS FIÓKOD? CSINÁLJ EGYET MOST!</Link>
        </Form>
      </Wrapper>
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Login;