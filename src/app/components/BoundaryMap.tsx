import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Helper component to auto-zoom to the boundary
function MapBounds({ geoData }: { geoData: any }) {
  const map = useMap();
  
  useEffect(() => {
    if (geoData) {
      const layer = L.geoJSON(geoData);
      map.fitBounds(layer.getBounds(), { padding: [10, 10], maxZoom: 15 });
    }
  }, [geoData, map]);
  return null;
}

export function BoundaryMap() {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    // Fetch boundary for Cigalontang, Tasikmalaya
    fetch("https://nominatim.openstreetmap.org/search?q=Cigalontang,Tasikmalaya&format=json&polygon_geojson=1")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          // Find the relation or polygon
          const area = data.find((d: any) => d.geojson && (d.geojson.type === "Polygon" || d.geojson.type === "MultiPolygon")) || data[0];
          if (area && area.geojson) {
            setGeoData(area.geojson);
          }
        }
      })
      .catch((err) => console.error("Failed to fetch map boundary:", err));
  }, []);

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[-7.3621, 108.0289]} // Approximate center of Cigalontang
        zoom={12}
        style={{ width: "100%", height: "100%", background: "#f4f4f4" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoData && (
          <>
            <GeoJSON 
              data={geoData} 
              style={{
                color: "#8B5A2B", // Brand color
                weight: 4,
                opacity: 0.8,
                fillColor: "#8B5A2B",
                fillOpacity: 0.15,
                dashArray: "5, 10"
              }} 
            />
            <MapBounds geoData={geoData} />
          </>
        )}
      </MapContainer>
    </div>
  );
}
