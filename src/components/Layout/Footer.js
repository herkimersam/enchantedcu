import React from "react";
import styled from "styled-components";
// import { NavLink } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { colors } from "../../config";

const FooterContainer = styled.footer`
  width: 100%;
  background: ${colors.forest};
  p {
    color: ${colors.black};
    font-size: 1rem;
  }
  h6 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${colors.black};
    text-align:left;
  }
  a {
    text-decoration: none;
    color: ${colors.black};
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  img {
    margin-bottom: 10px;
    @media (max-width: 960px) {
      max-width: 50%;
      display: block;
      margin: 40px auto;
    }
  }
  img.logo {
    margin: 0 auto 2rem 0;
    display: block;
    @media (max-width: 900px) {
      margin: 2rem auto;
      max-width: 35%;
    }
  }
  hr {
    margin: 20px 0;
    color:white;
    border-bottom:1px solid white;
  }
  h6 {
    color: white;
    font-size: 2rem;
    font-family: "Lora", serif;
  }
  ul li a {
    color: white;
    text-decoration: underline;
  }
`;
const FooterContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 0;
  a, a img {
    display: inline-block;
    width:90%;
  }
`;

const LinkLists = styled(Grid)`
  width: 100%;
  ul {
    list-style: none;
    li {
      line-height: 1.5;
      color: white;
      font-weight: bold;
    }
  }
  .copyright {
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: ${colors.white};
    font-size: 13px;
  }
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterContent>
        <LinkLists container spacing={0}>
          <Grid item xs={12}>
            <p className="copyright">
              Copyright Colleen Falllaw
              <br />
              Website Licensed GPL, Data Licensed CC NC Attribution
            </p>
          </Grid>
        </LinkLists>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;