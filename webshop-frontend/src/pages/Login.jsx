import styled from "styled-components";
import Navbar from '../components/Navbar'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import LogoutButton from "../components/LogoutButton";
import {mobile} from "../responsive"

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
  ${mobile({width:"60%" })}
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
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken && accessToken !== 'undefined') { // Check if accessToken is present and not 'undefined'
    // Redirect user to home page or dashboard
    window.location.href = '/profile';
  }
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = async (event) => {
    event.preventDefault();
    if (!usernameOrEmail) {
      setError('Please enter your email or username');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: usernameOrEmail, password })
      });
      if (response.ok) {
        const data = await response.json();
        // Login successful, store authentication token in local storage
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));
        document.cookie = `jwt=${data.accessToken}; Path=/; HttpOnly; SameSite=Lax`;
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
      <Navbar />
      <Container>
        <Wrapper>
          <Title>BEJELENTKEZÉS</Title>
          <Form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Felhasználónév vagy E-mail"
              value={usernameOrEmail}
              onChange={(event) => setUsernameOrEmail(event.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Jelszó"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <Button type="submit">BEJELENTKEZÉS</Button>      
            {error && <p>{error}</p>}
          <Links to="/register">ELFELEJTETTED A JELSZAVAD?</Links>
          <Links to="/register">NINCS FIÓKOD? CSINÁLJ EGYET MOST!</Links>
        </Form>
      </Wrapper>
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Login;