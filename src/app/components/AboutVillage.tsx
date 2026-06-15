import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Sprout, Home } from "lucide-react";
import { motion } from "motion/react";

export function AboutVillage() {
  const stats = [
    { icon: <Users className="text-[#8B5A2B]" size={24} />, label: "Populasi", value: "3.900+" },
    { icon: <Sprout className="text-[#8B5A2B]" size={24} />, label: "Potensi", value: "Pertanian" },
    { icon: <Home className="text-[#8B5A2B]" size={24} />, label: "Dusun", value: "3 Wilayah" },
  ];

  return (
    <section id="tentang-desa" className="py-24 bg-[#FAFAFA] font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
            <h4 className="text-[#8B5A2B] font-semibold tracking-wider text-sm mb-3 uppercase">Pengenalan Desa</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6 leading-snug">Desa Cigalontang: Harmoni Alam & Masyarakat</h2>
            <p className="text-[#555555] mb-6 leading-relaxed">Terletak di kaki gunung yang asri, Desa Cigalontang menawarkan keindahan alam yang memukau dan keramahan penduduk yang hangat. Mayoritas masyarakat bermata pencaharian sebagai petani, mengelola tanah subur yang menghasilkan padi dan sayuran berkualitas tinggi.</p>
            <p className="text-[#555555] mb-10 leading-relaxed">Melalui program KKN ini, kami berfokus pada pengembangan UMKM lokal, digitalisasi desa, dan pendidikan anak-anak untuk mendukung kemajuan Cigalontang tanpa menghilangkan nilai-nilai kearifan lokal.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">{stat.icon}</div>
                  <span className="text-xl sm:text-2xl font-bold text-[#333333]">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-zinc-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.2 }} className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-[#8B5A2B] rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <ImageWithFallback src="https://images.unsplash.com/photo-1559628233-100c798642d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbmF0dXJlJTIwYmVhdXRpZnVsJTIwc3VucmlzZSUyMGZpZWxkc3xlbnwxfHx8fDE3ODEzNTIwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Keindahan alam sawah di Desa Cigalontang saat matahari terbit" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
