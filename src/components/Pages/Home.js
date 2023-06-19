import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { NavBar, Footer } from "../../components";
import { colors } from "../../config/index";
import logo from "../../sparkle.svg";

const HomePage = styled.div`
  h1 {
    font-family: "Lora", serif;
    font-size: 4rem;
    font-weight: 300;
    text-align: left;
    color: ${colors.black};
    width: 80vw;
    max-width: 940px;
    margin: 0 0 40px 0;
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  hr {
    max-width: 1140px;
    margin: 6em auto;
    border: 0;
    border-top: 1px solid ${colors.darkgray};
  }
  p {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: ${colors.darkgray};
  }
  a {
    color: ${colors.chicagoBlue};
  }

  .photo2 {
    width: 100%;
    @media (max-width: 960px) {
      max-height: 40vh;
      width: auto;
      margin: 0 auto;
      display: block;
    }
  }
  .logoScrollText {
    font-size: 2rem;
    color: black;
    font-family: "Lora", serif;
    padding-bottom: 2rem;
  }
`;

const HomePageContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Enchanted = styled.div`
  width: 100%;
  max-width: 1140px;
  text-align: center;
  color: ${colors.lightgray};
  margin: 0 auto;
  padding: 50px 10px 0 10px;
  p {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 1.25rem;
    font-stretch: normal;
    text-align: left;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    padding: 2rem 0;
  }
  #button-cta {
    font-family: "Lora", serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1.75px;
    line-height: 5;
    text-align: center;
    background-color: #ffffff;
    color: ${colors.darkgray};
    padding: 1rem 1.5rem;
    margin: 1rem;
    // border-radius: .3rem;
    text-decoration: none;
  }

  #button-search {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-align: center;
    text-transform: uppercase;
    background-color: ${colors.darkgray};
    color: #ffffff;
    padding: 1rem 1.5rem;
    text-decoration: none;
    line-height: 2.5;
  }

  .small-text {
    font-size: 0.75rem;
    a {
      font-size: 0.75rem;
      color: ${colors.orange};
      text-decoration: none;
    }
  }
  video {
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px;
  }
  .map-caption {
    font-size: 0.9rem;
    text-align: left;
  }
`;

const CentralFeature = styled.div`
  padding: 2em 0;
  margin: 1em 0;
  h2 {
    color: ${colors.darkgray};
    text-align: center;
    font-size: 2rem;
    font-family: "Lora", serif;
    margin: 0 0 0.5rem 0.5rem;
    padding: 0;
  }
  p {
    color: ${colors.light};
    font-family: "Roboto", sans-serif;
    text-align: center;
    line-height: 1.1;
    margin: 0.5rem 0 0 0;
    padding: 0;
    font-size: 1rem;
    max-width: 95%;
  }
  a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    background: ${colors.forest};
    color: white;
    border-radius: 0.3rem;
    margin: 0.5rem 1rem 0 0;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 5px 5px 20px ${colors.forest}55;
    transition: 250ms all;
    @media (max-width: 900px) {
      margin: 1rem auto 2rem auto;
      text-align: center;
    }
    &:hover {
      background: ${colors.fuschia};
      box-shadow: 5px 10px 20px ${colors.forest}88;
    }
  }
`;

const ThreeUpGrid = styled(Grid)`
  padding: 2em 0;
  margin: 1em 0;
  h2 {
    color: ${colors.darkgray};
    text-align: left;
    font-size: 2rem;
    font-family: "Lora", serif;
    margin: 0 0 0.5rem 0.5rem;
    padding: 0;
  }
  p {
    color: ${colors.light};
    font-family: "Roboto", sans-serif;
    text-align: left;
    line-height: 1.1;
    margin: 0.5rem 0 0 0;
    padding: 0;
    font-size: 1rem;
    max-width: 95%;
  }
  img {
    width: 80%;
    max-width: 10em;
    display: block;
  }
  a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    background: ${colors.forest};
    color: white;
    border-radius: 0.3rem;
    margin: 0.5rem 1rem 0 0;
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
    display: table;
    box-shadow: 5px 5px 20px ${colors.forest}55;
    transition: 250ms all;
    @media (max-width: 900px) {
      margin: 1rem auto 2rem auto;
      text-align: center;
    }
    &:hover {
      background: ${colors.fuschia};
      box-shadow: 5px 10px 20px ${colors.forest}88;
    }
  }
`;

export default function Home() {
  return (
    <HomePage>
      <NavBar />
      <HomePageContent className="notFooter">
        <Enchanted>
          <h1>
            <i>Enchanted</i> Champaign-Urbana.
          </h1>
          <p>
            Have you ever entered Crystal Lake Park and felt like you crossed a
            Threshold into a meaningfully different place? Or encountered a
            building that seems much older than its neighbors? This map can be a
            vehicle for perceiving and imagining some spaces in an enchanted
            way.
          </p>
          <CentralFeature>
            <img
              className="photo"
              src={logo}
              alt="large sparkle"
              loading="lazy"
            />

            <h2>Enchanted Champaign-Urbana</h2>

            <Link to="/map">
              Explore <i>Enchanted</i> Champaign-Urbana
            </Link>
          </CentralFeature>

          <p>Or explore other maps of the area...</p>
          <ThreeUpGrid container spacing={0}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img
                    className="photo"
                    src={
                      "https://www.urbanaparks.org/assets/1/6/675674fd979441a3a3e17dbbffdbcb061.png"
                    }
                    alt="Urbana Park District Leaf Logo"
                    loading="lazy"
                  />
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <h2>
                    Urabana
                    <br />
                    Parks
                  </h2>
                </Grid>
              </Grid>
              <Link to="https://www.urbanaparks.org/assets/1/6/UPD-map-chart.pdf">
                Explore Urbana's Parks
              </Link>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img
                    className="photo"
                    src={
                      "https://marketing.illinois.edu/wp-content/uploads/2021/09/block-I-primary.png"
                    }
                    alt="block I"
                    loading="lazy"
                  />
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <h2>
                    UIUC Campus <br />
                    Area
                  </h2>
                </Grid>
              </Grid>
              <Link to="https://goo.gl/maps/BETUXtqjQQ7gTs7w5">
                Explore Campus
              </Link>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Grid container spacing={0} alignItems="center">
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <img
                    className="photo"
                    src={
                      "https://champaignparks.com/wp-content/uploads/2016/11/CPDLogo-4C-01.png"
                    }
                    alt="Champaign Park District pinetree logo"
                    loading="lazy"
                  />
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <h2>
                    Champaign <br />
                    Parks
                  </h2>
                </Grid>
              </Grid>
              <Link to="https://champaignparks.com/parks-facilities/">
                Explore Champaign's Parks
              </Link>
            </Grid>
          </ThreeUpGrid>
        </Enchanted>
      </HomePageContent>
      <Footer />
    </HomePage>
  );
}
