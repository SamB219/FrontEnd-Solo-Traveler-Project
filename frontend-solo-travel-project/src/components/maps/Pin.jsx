import React from "react";
import { Marker, Popup } from "react-leaflet";
/* import Pin from "../maps/Pin-location.png"; */
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Pin({ posts }) {
  const myIcon = L.icon({
    iconUrl: icon, // icon png
    iconSize: [25, 30], // size of the icon
    iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
  });

  L.Marker.prototype.options.icon = myIcon;

  return (
    <>
      {posts.map((post) => {
        let coordinates = [post.location[3], post.location[2]];
        return (
          <Marker position={coordinates}>
            <Popup>{post.title}</Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default Pin;
