import { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 1. DATA KOORDINAT BATAS WILAYAH (GEOJSON) DESA CIGALONTANG
const dataBatasDesaCigalontang = {
  type: "Feature",
  properties: { name: "Desa Cigalontang" },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [108.015, -7.345],
        [108.025, -7.342],
        [108.035, -7.340],
        [108.045, -7.346],
        [108.048, -7.352],
        [108.042, -7.358],
        [108.035, -7.362],
        [108.028, -7.365],
        [108.020, -7.362],
        [108.012, -7.355],
        [108.010, -7.349],
        [108.015, -7.345] 
      ]
    ]
  }
};

// 2. DATA KOORDINAT FASILITAS PENTING
const detailFasilitas = [
  { name: "Kantor Kepala Desa Cigalontang", coords: [-7.3485, 108.0315] as [number, number], info: "Pusat Pelayanan & Pemerintahan Desa" },
  { name: "SMP Negeri 1 Cigalontang", coords: [-7.3510, 108.0350] as [number, number], info: "Fasilitas Pendidikan Menengah Pertama" },
  { name: "SDN 1 Cigalontang", coords: [-7.3525, 108.0320] as [number, number], info: "Fasilitas Pendidikan Dasar" },
  { name: "Masjid Jami Cigalontang", coords: [-7.3515, 108.0285] as [number, number], info: "Tempat Ibadah Utama Desa" },
];

// 3. MEMBUAT IKON PIN KUSTOM (Solusi agar marker 100% muncul tanpa gambar eksternal)
const buatIkonKustom = (nama: string) => {
  // Gunakan warna berbeda untuk Kantor Desa agar menonjol
  const warnaBg = nama.includes("Kantor") ? "bg-red-600" : "bg-blue-600";
  
  return L.divIcon({
    html: `
      <div class="flex flex-col items-center strings-attached">
        <span class="absolute inline-flex h-6 w-6 animate-ping rounded-full ${warnaBg} opacity-20"></span>
        <div class="w-4 h-4 ${warnaBg} rounded-full border-2 border-white shadow-lg z-50"></div>
        <div class="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] ${nama.includes("Kantor") ? "border-t-red-600" : "border-t-blue-600"} -mt-[2px]"></div>
      </div>
    `,
    className: "custom-pin-container", // Kosongkan class default Leaflet agar tidak merusak style Tailwind
    iconSize: [24, 24],
    iconAnchor: [12, 16], // Supaya ujung lancip pas menunjuk titik koordinat
    popupAnchor: [0, -16]  // Supaya popup muncul tepat di atas pin
  });
};

// Helper untuk otomatis zoom kamera
function AutoFokusPeta() {
  const map = useMap();
  useEffect(() => {
    const layer = L.geoJSON(dataBatasDesaCigalontang as any);
    map.fitBounds(layer.getBounds(), { padding: [50, 50] });
  }, [map]);
  return null;
}

export function BoundaryMap() {
  return (
    <div className="w-full h-screen relative z-0">
      
      {/* PANEL LEGENDA (Pojok Kiri Atas) */}
      <div className="absolute top-4 left-4 z-[1000] bg-white p-4 rounded-lg shadow-xl border-l-4 border-amber-600 max-w-sm pointer-events-auto">
        <h1 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Peta Administrasi</h1>
        <h2 className="text-xl font-black text-amber-800 m-0 leading-tight">DESA CIGALONTANG</h2>
        <p className="text-xs text-gray-500 mt-1">Kecamatan Cigalontang, Tasikmalaya, Jawa Barat</p>
        
        <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-5 h-3 bg-amber-500/20 border border-amber-600 rounded"></span>
            <span className="text-xs font-semibold text-gray-700">Garis Batas Desa (Orange)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-600 rounded-full inline-block"></span>
            <span className="text-xs text-gray-600">Kantor Pemerintahan Desa</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
            <span className="text-xs text-gray-600">Fasilitas Umum (Sekolah / Masjid)</span>
          </div>
        </div>
      </div>

      <MapContainer
        center={[-7.3515, 108.0315]} 
        zoom={14}
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* GARIS BATAS WILAYAH ORANJE */}
        <GeoJSON
          data={dataBatasDesaCigalontang as any}
          style={{
            color: "#D97706",      
            weight: 4,             
            opacity: 1.0,          
            fillColor: "#F59E0B",  
            fillOpacity: 0.15,     
          }}
        />

        {/* MENAMPILKAN MARKER KUSTOM YANG PASTI MUNCUL */}
        {detailFasilitas.map((item, index) => (
          <Marker 
            key={index} 
            position={item.coords}
            icon={buatIkonKustom(item.name)} // <--- Memanggil fungsi icon kustom di sini
          >
            <Popup>
              <div className="p-1 min-w-[150px]">
                <h3 className="font-bold text-amber-900 m-0 text-sm">{item.name}</h3>
                <p className="text-xs text-gray-600 m-0 mt-1">{item.info}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        <AutoFokusPeta />
      </MapContainer>
    </div>
  );
}