import React from "react";
import styled from "styled-components";
import { ContentContainer, Gutter } from "../../styled_components";
import { NavBar, Footer } from "../../components";
import { colors } from "../../config";

const DataPage = styled.div`
  background: white;

  // const TableStyle  = styled.div
`;

const Enchanted = styled.div`
  width: 100%;
  max-width: 1140px;
  text-align: center;
  color: ${colors.lightgray};
  margin: 0 auto;
  padding: 50px 10px 0 10px;
  a {
    font-family: "Lora", sans-serif;
    font-size: 13px;
    font-stretch: normal;
    text-align: left;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    padding: 2rem 0;
  }
  p,
  .license-description a {
    font-family: "Lora", sans-serif;
    font-size: 1.25rem;
    font-stretch: normal;
    text-align: left;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    padding: 2rem 0;
    &.license-description {
      text-align: center;
    }
  }
  #button-search {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.75px;
    line-height: 5;
    text-align: center;
    background-color: ${colors.forest};
    color: #ffffff;
    padding: 1rem 1.5rem;
    margin: 1rem;
    // border-radius: .3rem;
    text-decoration: none;
  }
`;

export default function Data() {
  return (
    <DataPage>
      <NavBar />
      <ContentContainer>
        <h1>Data</h1> <hr />
        <Gutter h={10} />
        <p>
          <i>Enchanted CU</i> uses custom crafted data. Read more on our{" "}
          <a href="/About">About</a> page.
          <br />
          <br />
          Download the latest version of our data here:
          <br />
        </p>
        <Enchanted>
          <h2> Current Data Release (2023-05-16)</h2>
          <a
            href={`${process.env.PUBLIC_URL}/data/places.json`}
            id="button-search"
            download
          >
            JSON
          </a>
          <p className="license-description">
            This data is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc/2.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons Attribution Non-Commercial license.
            </a>
            <br />
            <br />
          </p>
        </Enchanted>
      </ContentContainer>
      <Footer />
    </DataPage>
  );
}
