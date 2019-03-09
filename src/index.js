import mapboxgl from "mapbox-gl";
import myMapbox from "./private/mapbox.js";
import geojson from "./private/geojson.js";

import mapPage from "./index.html";
import css from "./map.css";

mapboxgl.accessToken = myMapbox.mapbox.accessToken;

var map = new mapboxgl.Map({
  center: [-96.680958, 37.413386],
  container: "map",
  style: myMapbox.mapbox.style,
  zoom: 3.75
});

map.on("load", function() {
  map.addLayer(geojson.geojson);
});
