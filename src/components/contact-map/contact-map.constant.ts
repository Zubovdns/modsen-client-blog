import L, { LatLngTuple } from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png?url";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png?url";
import shadowUrl from "leaflet/dist/images/marker-shadow.png?url";

export const defaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const markerData: { position: LatLngTuple; label: string }[] = [
  { position: [48.8566, 2.3522], label: "Париж, Франция" },
  { position: [40.7128, -74.006], label: "Нью-Йорк, США" },
  { position: [35.6762, 139.6503], label: "Токио, Япония" },
];
