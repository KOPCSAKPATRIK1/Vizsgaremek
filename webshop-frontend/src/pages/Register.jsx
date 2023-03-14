import styled from "styled-components";
import Navbar from '../components/Navbar'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import React, { useState } from 'react';

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

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
      });
      const data = await response.json();
      // Registration successful, redirect user to login page
      window.location.href = '/login';
    } catch (error) {
      // Registration failed, display error message
      console.error(error);
    }
  };

  return (
    <div>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>REGISZTRÁCIÓ</Title>
        <Form onSubmit={handleRegistration}>
          <Input   type="text" placeholder="Felhasználónév" value={username} onChange={(event) => setUsername(event.target.value)} required/>
          <Input type="email" placeholder="E-mail" value={email}  onChange={(event) => setEmail(event.target.value)} required/> 
          <Input  type="password"  placeholder="Jelszó"   value={password}  onChange={(event) => setPassword(event.target.value)} required />
          <Agreement>
          Fiók létrehozásával hozzájárulok személyes adataim  <b>ADATVÉDELMI SZABÁLYZAT</b> szerinti kezeléséhez 
          </Agreement>
          <Button type="submit">FIÓK LÉTREHOZÁSA</Button>
        </Form>
      </Wrapper>
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Register;