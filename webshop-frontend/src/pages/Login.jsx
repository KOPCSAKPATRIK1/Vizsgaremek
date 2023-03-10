import styled from "styled-components";
import Navbar from '../components/Navbar'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
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

 const Links = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
   
   color: white;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password })
    });
    if (response.ok) {
      const data = await response.json();
      // Login successful, store authentication token in local storage
      localStorage.setItem('sessionToken', data.sessionToken);
      localStorage.setItem('userId', data.userId);
      // Redirect user to home page
      window.location.href = '/';
    } else {
      // Login failed, display error message
      const data = await response.json();
      setError(data.message);
    }
  } catch (error) {
    // Network error, display error message
    console.error(error);
    setError('Network error, please try again later');
  }
};

  return (
    <div>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>BEJELENTKEZ??S</Title>
        <Form onSubmit={handleLogin}>
          <Input  type="email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input  type="text" placeholder="Felhaszn??l??n??v"   value={username} onChange={(event) => setUsername(event.target.value)} />
          <Input  type="password" placeholder="Jelsz??" value={password} onChange={(event) => setPassword(event.target.value)} />
          <Button type="submit">BEJELENTKEZ??S</Button>
           {error && <p>{error}</p>}
          <Links to="/register">ELFELEJTETTED A JELSZAVAD?</Links>
          <Links to="/register">NINCS FI??KOD? CSIN??LJ EGYET MOST!</Links>
        </Form>
      </Wrapper>
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Login;