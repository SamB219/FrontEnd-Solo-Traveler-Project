import React, { useRef } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SimpleMap() {
  const mapRef = useRef(null);
  const latitude = 40.416775;
  const longitude = -3.70379;

  return (
    <>
      {/* Map needs Height and Width to display */}
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        zoomControl={false}
        ref={mapRef}
        style={{
          height: "500px",
          width: "100vw",
          position: "relative",
          zIndex: "0",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {/* Additional map layers or components can be added here */}
      </MapContainer>
    </>
  );
}

export default SimpleMap;
