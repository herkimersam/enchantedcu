import React from "react";
import styled from "styled-components";
import { NavBar, Footer } from "../../components";

const MapPage = styled.div`
  background: white;
`;

export default function EnchantedMap() {
  return (
    <MapPage>
      <NavBar />
      <h1>Map </h1>
      <hr />
      <p>Not yet implemented</p>
      <Footer />
    </MapPage>
  );
}
