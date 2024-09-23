import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fixing the default icon issue with Leaflet and React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LeafletMap = () => {
  // Coordonées de l'adresse "entrePOTE, 99 Rue de Clermont, 42300 Roanne"
  const position = [46.0396, 4.067]; // Les coordonnées fournies

  return (
    <MapContainer center={position} zoom={13} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>entrePOTE, 99 Rue de Clermont, 42300 Roanne</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
