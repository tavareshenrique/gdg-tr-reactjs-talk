import React from "react";

import Airbnb from "../../assets/images/airbnb.png";
import Instagram from "../../assets/images/instagram.png";
import Medium from "../../assets/images/medium.png";
import Netflix from "../../assets/images/netflix.png";
import Printerest from "../../assets/images/Printerest.png";
import Reddit from "../../assets/images/reddit.png";
import Twitter from "../../assets/images/twitter.png";
import Uber from "../../assets/images/Uber.png";
import Yahoo from "../../assets/images/yahoo.png";
import Zaal from "../../assets/images/zaal-logo.png";

import { Container } from "./styles";

const Companies = () => {
  return (
    <Container>
      <img src={Airbnb} alt="Airbnb" />

      <img src={Instagram} alt="Instagram" />

      <img src={Medium} alt="Medium" />

      <img src={Netflix} alt="Netflix" />

      <img src={Printerest} alt="Printerest" />

      <img src={Reddit} alt="Reddit" />

      <img src={Twitter} alt="Twitter" />

      <img src={Uber} alt="Uber" />

      <img src={Yahoo} alt="Yahoo" />

      <img src={Zaal} alt="Zaal" />
    </Container>
  );
};

export default Companies;
