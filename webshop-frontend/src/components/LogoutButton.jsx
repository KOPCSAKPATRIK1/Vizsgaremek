import React from 'react';
import styled from "styled-components";
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

function LogoutButton() {
  function handleLogout() {
    // Clear authentication token and user data from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    // Reload the current page to force a logout
    window.location.href = '/login';

  }

  return (
    <Button onClick={handleLogout}>
      KIJELENTKEZÉS
    </Button>
  );
}

export default LogoutButton;