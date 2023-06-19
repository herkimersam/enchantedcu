import React from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import { ContentContainer, Gutter } from "../../styled_components";
import { NavBar, Footer } from "../../components";
import { colors } from "../../config";
import placeFeatures from "../../data/places.geojson.json";

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

const places = placeFeatures["features"].map((feature) => {
  return {
    name: feature.properties.name,
    image: feature.properties.image,
    latitude: feature.geometry.coordinates[1],
    longitude: feature.geometry.coordinates[0],
    lore: feature.properties.lore,
  };
});

const headers = [
  { label: "Name", key: "name" },
  { label: "Image", key: "image" },
  { label: "Latitude", key: "latitude" },
  { label: "Longitude", key: "longitude" },
  { label: "Lore", key: "lore" },
];

const csvReport = {
  data: places,
  headers: headers,
  filename: "places.csv",
};

export default function Data() {
  return (
    <DataPage>
      <NavBar />
      <ContentContainer className="notFooter">
        <h1>Data</h1> <hr />
        <Gutter h={10} />
        <p>
          <i>Enchanted CU</i> uses custom crafted data. The stories were
          contributed by David Abzug, the photos are public domain, and the
          coordinates are from Google maps.
          <br />
          Download the latest version of our data here:
          <br />
        </p>
        <Enchanted>
          <h2> Current Data Release (2023-06-18)</h2>
          <a
            href={`${process.env.PUBLIC_URL}/data/places.geojson`}
            id="button-search"
            download
          >
            GeoJSON
          </a>
          <CSVLink {...csvReport} id="button-search">
            CSV / Excel
          </CSVLink>
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
