import React, { useEffect } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 2px solid #ffa1ff;
  border-radius: 30px;
  text-transform: uppercase;

  box-shadow: 0px 4px 30px black;

  background-color: #4a4a4a;
  
  font-weight: 500;
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
`;

const Popup = ({ message, handleClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [handleClose]);

  return (
    <PopupContainer>
      <p>{message}</p>
    </PopupContainer>
  );
};

export default Popup;
