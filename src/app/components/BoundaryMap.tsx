import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ==========================================
// 1. DATA KOORDINAT MANUAL KHUSUS DESA CIGALONTANG
// (Garis batas oranye yang akan menonjol di tengah kecamatan)
// ==========================================
const dataBatasDesaCigalontang = {
  type: "Feature",
  properties: { name: "Desa Cigalontang", jenis: "Fokus Utama" },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [108.018, -7.345],
        [108.026, -7.341],
        [108.034, -7.340],
        [108.042, -7.344],
        [108.046, -7.350],
        [108.044, -7.357],
        [108.036, -7.361],
        [108.026, -7.363],
        [108.018, -7.359],
        [108.014, -7.352],
        [108.014, -7.347],
        [108.018, -7.345]
      ]
    ]
  }
};

// ==========================================
// 2. DATA KOORDINAT FASILITAS DI DALAM DESA
// ==========================================
const detailFasilitas = [
  { name: "Kantor Kepala Desa Cigalontang", coords: [-7.3495, 108.0285] as [number, number], info: "Pusat Pemerintahan Desa" },
  { name: "SMP Negeri 1 Cigalontang", coords: [-7.3452, 108.0368] as [number, number], info: "Fasilitas Pendidikan Menengah" },
  { name: "SDN 1 Cigalontang", coords: [-7.3538, 108.0215] as [number, number], info: "Fasilitas Pendidikan Dasar" },
];

// Generator Ikon Pin Kustom (Tailwind)
const buatIkonKustom = (nama: string) => {
  const warnaBg = nama.includes("Kantor") ? "bg-red-600" : "bg-blue-600";
  return L.divIcon({
    html: `
      <div class="flex flex-col items-center relative">
        <span class="absolute inline-flex h-4 w-4 animate-ping rounded-full ${warnaBg} opacity-25"></span>
        <div class="w-3.5 h-3.5 ${warnaBg} rounded-full border-2 border-white shadow-md z-50"></div>
        <div class="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[5px] ${nama.includes("Kantor") ? "border-t-red-600" : "border-t-blue-600"} -mt-[1px]"></div>
      </div>
    `,
    className: "custom-marker-pin",
    iconSize: [16, 20],
    iconAnchor: [8, 18],
    popupAnchor: [0, -18]
  });
};

// ==========================================
// 3. HELPER AUTO FOKUS UNTUK SKALA SATU KECAMATAN (ZOOM OUT)
// ==========================================
function AutoFokusKecamatan({ kecData }: { kecData: any }) {
  const map = useMap();
  useEffect(() => {
    if (kecData) {
      const layer = L.geoJSON(kecData);
      // Kamera otomatis nge-zoom OUT sedikit agar seluruh area kecamatan termuat di layar
      map.fitBounds(layer.getBounds(), { 
        padding: [40, 40],
        maxZoom: 12 // DIKUNCI KE-12: Agar peta melebar memperlihatkan desa-desa sekitar
      });
    }
  }, [kecData, map]);
  return null;
}

// ==========================================
// 4. KOMPONEN UTAMA PETA
// ==========================================
export function BoundaryMap() {
  const [kecamatanData, setKecamatanData] = useState<any>(null);

  useEffect(() => {
    // Mengambil data batas satu KECAMATAN Cigalontang penuh secara online
    const url = "https://nominatim.openstreetmap.org/search?q=Kecamatan+Cigalontang,+Tasikmalaya&format=json&polygon_geojson=1";
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const wilayahKecamatan = data.find(
            (item: any) =>
              item.geojson &&
              (item.geojson.type === "Polygon" || item.geojson.type === "MultiPolygon")
          );
          if (wilayahKecamatan) {
            setKecamatanData(wilayahKecamatan.geojson);
          }
        }
      })
      .catch((err) => console.error("Gagal memuat batas kecamatan:", err));
  }, []);

  return (
    <div className="w-full h-screen relative z-0 bg-gray-50">
      
      {/* PANEL LEGENDA MAP */}
      <div className="absolute top-4 left-4 z-[1000] bg-white p-4 rounded-xl shadow-xl border-l-4 border-amber-600 max-w-xs pointer-events-auto">
        <h1 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Peta Administrasi</h1>
        <h2 className="text-lg font-black text-amber-800 m-0 leading-tight">KEC. CIGALONTANG</h2>
        <p className="text-xs text-gray-500 mt-0.5">Tasikmalaya, Jawa Barat</p>
        
        <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-5 h-3 bg-amber-500/20 border-2 border-amber-600 rounded"></span>
            <span className="text-xs font-bold text-gray-700">Desa Cigalontang (Highlight)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-3 bg-gray-300/10 border border-gray-400 border-dashed rounded"></span>
            <span className="text-xs text-gray-500">Batas Luar Kecamatan</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
            <span className="text-xs text-gray-600">Kantor Desa</span>
          </div>
        </div>
      </div>

      <MapContainer
        center={[-7.3515, 108.0285]} 
        zoom={12} // Start default zoom langsung diset agak jauh (12)
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* LAYER 1: Menggambar Batas LUAR KECAMATAN (Warna Abu-Abu Tipis / Dashed) */}
        {kecamatanData && (
          <GeoJSON
            data={kecamatanData}
            style={{
              color: "#9ca3af",       // Abu-abu halus
              weight: 2,              // Garis tipis
              opacity: 0.8,
              fillColor: "#000000",
              fillOpacity: 0.02,      // Arsiran sangat tipis agar tidak menutupi peta dasar
              dashArray: "6, 6"       // Membuat garis luar kecamatan jadi putus-putus estetis
            }}
          />
        )}

        {/* LAYER 2: Menggambar Batas KHUSUS DESA CIGALONTANG (Oranye Tebal Menyala) */}
        <GeoJSON
          data={dataBatasDesaCigalontang as any}
          style={{
            color: "#D97706",      // Oranye Tua
            weight: 5,             // Tebal agar mencolok di dalam kecamatan
            opacity: 1.0,
            fillColor: "#F59E0B",  
            fillOpacity: 0.2,      // Arsiran oranye transparan di area desanya saja
          }}
        />

        {/* MENAMPILKAN PIN FASILITAS DI DALAM DESA */}
        {detailFasilitas.map((item, index) => (
          <Marker key={index} position={item.coords} icon={buatIkonKustom(item.name)}>
            <Popup>
              <div className="p-1 min-w-[130px]">
                <h3 className="font-bold text-amber-900 m-0 text-sm">{item.name}</h3>
                <p className="text-xs text-gray-600 m-0 mt-0.5">{item.info}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Otomatis zoom-out memposisikan kamera se-Kecamatan */}
        {kecamatanData && <AutoFokusKecamatan kecData={kecamatanData} />}
      </MapContainer>
    </div>
  );
}