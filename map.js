// map.js
// Initialisation de la carte
var map = L.map("map").setView([46.0301495, 4.0666698], 8); // Vue centrée sur le premier point

// Ajout d'une couche de tuiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Marqueurs pour les deux adresses
var marker1 = L.marker([46.0301495, 4.0666698])
  .addTo(map)
  .bindPopup("Emplacement 1 : Latitude 46.0301495, Longitude 4.0666698")
  .openPopup();

var marker2 = L.marker([45.86116409301758, 4.760488033294678])
  .addTo(map)
  .bindPopup(
    "Emplacement 2 : Latitude 45.86116409301758, Longitude 4.760488033294678"
  );
