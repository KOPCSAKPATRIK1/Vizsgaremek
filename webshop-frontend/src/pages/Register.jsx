import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { mobile, tablet } from "../responsive";

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
  color: white;
  ${mobile({ width: "60%" })}
  ${tablet({ minWidth: "60%" })}
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

const Error = styled.p`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
const InputWrapper = styled.div`
    flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  min-width: 80%;
  input {
    padding-right: 40px;
    min-width: 45%;
  }
`;

const EyeIcon= styled.div`
color: #5a5a5a;
position: absolute;
  right: 15px;
  top: 71%;
  transform: translateY(-50%);
  cursor: pointer;
`


const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Hibás email cím");
      return;
    }

    // Username validation
    const usernamePattern = /^[a-zA-Z0-9_-]{3,15}$/;
    if (!usernamePattern.test(username)) {
      setError(
        "A felhasználónévnek 3 és 15 karakter között kell lennie, és csak betűket, számokat, aláhúzást és kötőjeleket tartalmazhat"
      );
      return;
    }

    // Password validation
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "A jelszónak legalább 8 karakter hosszúnak kell lennie, és tartalmaznia kell legalább egy nagybetűt, egy kisbetűt és egy számot"
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });
      const data = await response.json();
      // Registration successful, display message and redirect user to login page
      setRegistrationSuccess(true);
      setTimeout(() => {
        window.location.href = "/login";
      }, 6000);
    } catch (error) {
      // Registration failed, display error message
      console.error(error);
      setError("Registration failed");
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>REGISZTRÁCIÓ</Title>
          <Form onSubmit={handleRegistration}>
            <Input
              type="text"
              placeholder="Felhasználónév"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Jelszó"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                
              />
              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </EyeIcon>
            </InputWrapper>
            <Agreement>
              Fiók létrehozásával hozzájárulok személyes adataim{" "}
              <b>ADATVÉDELMI SZABÁLYZAT</b> szerinti kezeléséhez
            </Agreement>
            <Button type="submit">FIÓK LÉTREHOZÁSA</Button>
            {error && <Error>{error}</Error>}
            {registrationSuccess && (
              <p>
                Sikeres regisztráció! Átirányítás a bejelentkezés oldalra...
              </p>
            )}
          </Form>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Register;
