import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 599px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 600px) and (max-width: 1600px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1601px) {
      ${props}
    }
  `;
};
