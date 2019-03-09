import mapboxgl from "mapbox-gl";
import { default as myMapbox } from "./private/mapbox.js";
import { default as familyMarkers } from "./private/familyTrips.js";
import { default as adultMarkers } from "./private/adultTrips.js";

import mapPage from "./index.html";
import css from "./map.css";

mapboxgl.accessToken = myMapbox.mapbox.accessToken;

var map = new mapboxgl.Map({
  center: [-96.680958, 37.413386],
  container: "map",
  style: myMapbox.mapbox.style,
  zoom: 3.75
});

function placeMarkers(marker, tripType) {
  // create a HTML element for each feature
  var el = document.createElement("div");
  el.className = "marker";
  el.classList.add("fas");

  if (tripType === "adult") {
    el.classList.add("fa-map-marker-alt");
  } else if (tripType === "family") {
    el.classList.add("fa-car-side");
  }

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
}

familyMarkers.geojson.features.forEach(function(element) {
  placeMarkers(element, "family");
});
adultMarkers.geojson.features.forEach(function(element) {
  placeMarkers(element, "adult");
});
