import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { ContentContainer } from "../../styled_components/index";
import { NavBar, Footer } from "../../components";
import { Map as LayeredMap, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "../Map/pin";
import placeFeatures from "../../data/places.geojson.json";
import mapboxgl from "mapbox-gl";

mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; // eslint-disable-line import/no-webpack-loader-syntax

const MapPage = styled.div`
  background: white;
`;

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const places = placeFeatures["features"].map((feature) => {
  return {
    name: feature.properties.name,
    image: feature.properties.image,
    latitude: feature.geometry.coordinates[1],
    longitude: feature.geometry.coordinates[0],
    lore: feature.properties.lore,
  };
});

export default function EnchantedMap() {
  const [popupInfo, setPopupInfo] = useState(null);

  const [viewState, setViewState] = useState({
    latitude: 40.113,
    longitude: -88.2347,
    zoom: 12,
  });

  const pins = useMemo(
    () =>
      places.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={place.longitude}
          latitude={place.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );
  return (
    <MapPage>
      <NavBar />
      <ContentContainer>
        <h1>Map</h1>
        <hr />
        <LayeredMap
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{ height: 600 }}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {pins}
          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
            >
              <div>
                {popupInfo.name}
                <hr />
                {popupInfo.lore}
              </div>
              <img width="100%" src={popupInfo.image} alt={popupInfo.name} />
            </Popup>
          )}
        </LayeredMap>
      </ContentContainer>
      <Footer />
    </MapPage>
  );
}
