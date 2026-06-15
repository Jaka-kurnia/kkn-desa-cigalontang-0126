import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BoundaryMap } from "./BoundaryMap";

export function Location() {
  return (
    <section id="lokasi" className="py-24 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Side Panel Info */}
          <div className="lg:col-span-1 bg-[#8B5A2B] rounded-3xl p-8 text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(139,90,43,0.2)]">
            <div>
              <h3 className="text-2xl font-bold mb-2">Posko Utama KKN</h3>
              <p className="text-white/80 text-sm mb-8">Kunjungi posko kami untuk informasi lebih lanjut atau kolaborasi program.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-orange-200" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Alamat</h5>
                    <p className="text-white/80 text-sm mt-1">Balai Desa Cigalontang, Kec. Cigalontang, Kab. Tasikmalaya, Jawa Barat</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-orange-200" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Jam Operasional</h5>
                    <p className="text-white/80 text-sm mt-1">Senin - Jumat: 08:00 - 16:00<br/>Sabtu: 09:00 - 13:00</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-orange-200" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Kontak Person</h5>
                    <p className="text-white/80 text-sm mt-1">+62 812-3456-7890 (Aldyana)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="mt-12 w-full py-4 rounded-xl bg-white text-[#8B5A2B] font-bold text-sm hover:bg-orange-50 transition-colors shadow-sm">
              Buka di Google Maps
            </button>
          </div>

          {/* Map Mockup */}
          <div className="lg:col-span-2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-zinc-100 group border border-zinc-200">
            {/* Embedded Map iframe */}
            <div className="absolute inset-0 z-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <BoundaryMap />
            </div>
            
            {/* Custom Map Overlay/Marker */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
              <div className="relative group-hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-[#8B5A2B] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-2 bg-black/20 rounded-[100%] blur-[2px] mt-1"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
