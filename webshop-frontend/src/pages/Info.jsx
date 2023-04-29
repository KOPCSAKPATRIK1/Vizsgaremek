import styled from "styled-components";
import Navbar from '../components/Navbar'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import LogoutButton from "../components/LogoutButton";
import {mobile, tablet} from "../responsive"
import Products from "../components/Products";
import Liked from "../components/Liked";
import MapContainer from "../components/MapContainer";

const Container = styled.div`

  background-size: cover;

  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ffa1ff ;

  margin: auto;
`;

const Wrapper = styled.div`
  max-width: 40%;
  margin: auto;
  text-align: center;
  ${mobile({maxWidth:"80%" })}
  ${tablet({maxWidth:"80%" })}
`;

const Title = styled.h1`
  margin-top: 50px;
  color: white;
  text-align: center;
  font-size: 40px;
  text-shadow: 0px 0px 10px black;
  font-weight: bold;
`;

const Text = styled.div`
  margin-top: 50px;
  color: white;
  text-align: center;
  font-size: 17px;
  text-shadow: 0px 0px 3px black;
  line-height:1.5;
  letter-spacing: 1px;
  margin-bottom: 50px;
 
`;

const Opening = styled.div`
  margin-top: 5px;
  color: white;
  text-align: center;
  font-size: 12px;
  text-shadow: 0px 0px 3px black;
  line-height:1.5;
  letter-spacing: 1px;
  margin-bottom: 50px;
 
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

const Image = styled.img`
 width: 60%;

border: 2px solid #ffa1ff;
box-shadow: 0px 0px 10px black;
margin-top: 30px;
${mobile({width:"80%" })}
${tablet({width:"80%" })}
`;

const Info = () => {
   
    return (
      <div>
        <Navbar />
        <Container>
            <Wrapper>
     <Title>RÓLUNK</Title>
      
     <Text>
        Üdvözöljük a Foot Frenzy-n, az új online sneaker értékesítő oldalon! Célunk, hogy kielégítsük a leglelkesebb sneaker rajongók igényeit, akik az állandó megújulást és a stílusos kiegészítőket keresik a szekrényükbe. Büszkék vagyunk arra, hogy az egyik legjobb választékot kínáljuk a legnépszerűbb márkák legújabb cipőiből, és minden egyes termékünket nagyon gondosan válogatjuk ki, hogy biztosak lehessünk abban, hogy minőségi és divatos lábbeliket kínálunk az ügyfeleinknek.
        </Text> <Image src="https://media.discordapp.net/attachments/896444367403896832/1101941723480993832/asdsdasdad.png" alt="Foot Frenzy" /><Text>
A Foot Frenzy csapata teljes elkötelezettséggel dolgozik azért, hogy minden ügyfelünk elégedett legyen a szolgáltatásunkkal és a kínálatunkkal. Értékeljük a minőségi ügyfélszolgálatot, és minden kérdésre, észrevételre vagy javaslatra készséggel válaszolunk. Ügyfeleink elégedettsége az elsődleges célunk, és minden lépésnél figyelembe vesszük az igényeiket és a visszajelzéseiket.
</Text><Text>
A Foot Frenzy nem csak egy online bolt, hanem egy közösség is, amelyet a sneaker kultúra és az érdeklődés összeköt. Bármelyik termékünket megvásárolva, csatlakozhatsz az online közösségünkhöz és különleges ajánlatokat, promóciókat és értesítéseket kaphatsz az újabb sneaker kiadásokról és a szakmabeliek új trendjeiről.
</Text>
<Text>
<Title>ÜZLETÜNK</Title>
     <MapContainer></MapContainer>
     <Opening>
Nyitvatartás:
Hétfő-Csütörtök: 12:00-20:00 • Péntek-Szombat: 10:00-20:00 • Vasárnap: 12:00-18:00
</Opening>
Köszönjük, hogy ellátogattál a Foot Frenzy oldalára, és reméljük, hogy találsz valami különlegeset a számodra is az áruházunkban!
</Text>

</Wrapper>
      </Container>
      <Footer/>
      </div>
    );
  };
  
  export default Info;