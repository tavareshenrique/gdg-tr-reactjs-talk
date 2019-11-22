import React from "react";

import GDGFooter from "../GDGFooter";

import ProfilePhoto from "../../assets/images/profile.jpg";
import Zaal from "../../assets/images/zaal-logo.png";

import { Container, Profile, Informations, Details, Work } from "./styles";

const About = () => (
  <Container>
    <Profile>
      <Informations>
        <img src={ProfilePhoto} alt="Profile" />
        <Details>
          <h3>Henrique Tavares</h3>
          <span>22 anos</span>
          <span>Análise de Sistemas</span>
        </Details>
      </Informations>

      <Work>
        <span>
          Desenvolvedor Front-End na Zaal Tecnologia.{" "}
          <img src={Zaal} alt="Zaal" />
        </span>
      </Work>
    </Profile>

    <GDGFooter />
  </Container>
);

export default About;
