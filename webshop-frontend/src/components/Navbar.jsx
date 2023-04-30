import { AccountCircle, LocalMall } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import { mobile} from "../responsive";
import { useMediaQuery } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #212121;
  color: #ffa1ff;
  height: 80px;
  border-bottom: 2px solid #ffa1ff;
  ${mobile({ height: "40px" })}
`;
const Left = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;

  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 40px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  word-spacing: 20px;
  cursor: pointer;
  ${mobile({ flex: 3, justifyContent: "center" })}
`;
const Language = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-right: 30px;
  ${mobile({ display: "none" })}
`;

const Logo = styled.div`
  flex: 1;
  margin-right: 30px;
  align-items: center;
  cursor: pointer;
  font-variant: small-caps;
  ${mobile({ fontSize: "17px" })}
  ${mobile({ display: "none" })}
`;
const Linkek = styled.div`
  justify-content: right;
  font-size: 20px;
  word-spacing: 20px;
  cursor: pointer;
  align-items: center;
  display: flex;
`;

const NavbarLink = styled(Link)`
  justify-content: right;
  font-size: 20px;
  word-spacing: 20px;
  cursor: pointer;
  align-items: center;
  display: flex;
  color: #ffa1ff;
  margin: 15px;
  text-decoration: none;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
  &:hover,
  &:focus {
  }
  &:active {
  }
`;
const IconLink = styled(Link)`
  justify-content: right;
  font-size: 20px;
  word-spacing: 20px;
  cursor: pointer;
  align-items: center;
  display: flex;
  color: #ffa1ff;
  margin: 1px;
  text-decoration: none;

  &:hover,
  &:focus {
  }
  &:active {
  }
`;
const MenuIcons = styled.div`
  cursor: pointer;
  align-items: center;
  font-size: 130px;
  display: flex;

  margin-left: 25px;
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 5,
    border: `2px solid ${red}`,

    fontSize: `20px`,
  },
}));

const Username = styled.h1`
  font-size: 20px;
  word-spacing: 2px;
  text-transform: uppercase;

  ${mobile({ fontSize: "15px", width: "150px", textAlign: "right" })}
`;

const userString = localStorage.getItem("user"); // get the value of "user" from localStorage
let user = null; // initialize user variable as null

if (userString) {
  // check if userString is not null or undefined
  try {
    user = JSON.parse(userString); // attempt to parse userString as JSON
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error); // handle parse error
  }
}

const username = user?.username;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <Wrapper>
      <Left>
        <Language>HU</Language>
      </Left>
      <Center>
        <Logo>FootFrenzy</Logo>
        <Linkek>
          {" "}
          {!isDesktop && <DropdownMenu />}
          {isDesktop && <NavbarLink to="/"> FŐOLDAL </NavbarLink>}{" "}
          {isDesktop && <NavbarLink to="/products"> SNEAKEREK </NavbarLink>}{" "}
          {isDesktop && <NavbarLink to="/releases"> MEGJELENÉSEK </NavbarLink>}{" "}
          {isDesktop && <NavbarLink to="/info"> INFÓ </NavbarLink>}{" "}
        </Linkek>{" "}
      </Center>
      <Right>
        <MenuIcons>
        {username ? (
            <React.Fragment>
              <Username>{username}</Username>
            </React.Fragment>
          ) : (
            <NavbarLink to="/login">  <Username>Bejelentkezés</Username> </NavbarLink>
          )}
          <IconLink to="/login">
            <AccountCircle
              style={{
                fontSize: "40px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            ></AccountCircle>
          </IconLink>

          <StyledBadge badgeContent={quantity} color="default">
            {username ? (
              <IconLink to="/cart">
                <LocalMall
                  style={{
                    fontSize: "40px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                  color="inherit"
                ></LocalMall>{" "}
              </IconLink>
            ) : (
              <Tooltip title="Jelentkezz be a kosár használatához!">
                <span>
                  <IconLink to="/login">
                    <LocalMall
                      style={{
                        fontSize: "40px",
                        marginLeft: "10px",
                        marginRight: "10px",
                        color: "#a675a6",
                        cursor: "not-allowed",
                      }}
                    ></LocalMall>{" "}
                  </IconLink>
                </span>
              </Tooltip>
            )}
          </StyledBadge>
        </MenuIcons>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
