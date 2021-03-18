import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  const center: { lat: number; long: number; zoom: number } = {
    lat: -8.6,
    long: 115.2126,
    zoom: 12,
  };

  return (
    <div className="leaflet-container">
      <MapContainer
        center={[center.lat, center.long]}
        zoom={center.zoom}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}
