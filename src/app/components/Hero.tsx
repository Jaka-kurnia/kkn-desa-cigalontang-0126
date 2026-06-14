import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "./img/pangangonan.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden font-['Poppins']">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroImg}
          alt="Desa Cigalontang beautiful rural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6">
          <MapPin size={16} className="text-[#8B5A2B]" />
          <span>KKN POLITEKNIK LP3I KAMPUS TASIKMALAYA 2026</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
          Membangun Masa Depan di <br/>
          <span className="text-[#8B5A2B] bg-white/90 px-4 py-1 rounded-2xl inline-block mt-2 shadow-lg drop-shadow-sm">Desa Cigalontang</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl font-light">
          Bersama masyarakat, kami hadir untuk mengabdi, berinovasi, dan membawa dampak positif yang berkelanjutan bagi potensi desa yang luar biasa.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#tentang-desa" className="px-8 py-4 rounded-xl bg-[#8B5A2B] text-white font-semibold text-lg hover:bg-[#6F4E37] transition-all shadow-[0_4px_14px_0_rgba(139,90,43,0.39)] flex items-center gap-2 group w-full sm:w-auto justify-center">
            Mulai Penjelajahan
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#filosofi" className="px-8 py-4 rounded-xl bg-white text-[#333333] font-semibold text-lg hover:bg-zinc-100 transition-all w-full sm:w-auto justify-center flex">
            Kenali Kami
          </a>
        </div>
      </div>
    </section>
  );
}
