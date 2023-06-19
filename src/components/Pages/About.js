import React from "react";
import styled from "styled-components";
import { ContentContainer } from "../../styled_components/index";
import { NavBar, Footer } from "../../components";

const AboutPage = styled.div`
  background: white;
`;

export default function About() {
  return (
    <AboutPage>
      <NavBar />
      <ContentContainer className="notFooter">
        <h1>About </h1>
        <hr />

        <p>
          Enchanted CU is a technology exploration project to develop and
          demonstrate familiarity with <a href="https://react.dev/">React.js</a>
          , <a href="https://www.mapbox.com/">Mapbox</a>, GeoJSON, and
          Geographic Information Systems.
        </p>

        <p>
          This project is brought to you by <b>Colleen Fallaw</b>, adapting
          stories from David Abzug and adapting code from the
          <a href="https://github.com/GeoDaCenter/chicago-environment-explorer">
            <i> ChiVes</i>
          </a>{" "}
          project.
        </p>
      </ContentContainer>
      <Footer />
    </AboutPage>
  );
}
