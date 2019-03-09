const request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open("GET", "secret.json", false);
request.send(null);
const mbObj = JSON.parse(request.responseText);

L.mapbox.accessToken = mbObj.mapboxAPIToken;
var map = L.mapbox
  .map("map")
  .setView([37.413386, -96.680958], 3.53)
  .addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));
