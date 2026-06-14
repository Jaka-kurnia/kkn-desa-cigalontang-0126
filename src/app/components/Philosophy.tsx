import { Leaf, Droplets, Sun, HandHeart } from "lucide-react";
import { motion } from "motion/react";

export function Philosophy() {
  const philosophies = [
    {
      icon: <Leaf className="text-[#8B5A2B]" size={28} />,
      title: "Daun Hijau",
      desc: "Melambangkan pertumbuhan, kesejahteraan, dan komitmen kami terhadap kelestarian alam desa.",
    },
    {
      icon: <Sun className="text-amber-500" size={28} />,
      title: "Matahari Terbit",
      desc: "Simbol harapan baru dan masa depan yang cerah untuk pendidikan dan ekonomi masyarakat.",
    },
    {
      icon: <Droplets className="text-blue-500" size={28} />,
      title: "Tiga Tetes Air",
      desc: "Mewakili Tri Dharma Perguruan Tinggi: Pendidikan, Penelitian, dan Pengabdian.",
    },
    {
      icon: <HandHeart className="text-rose-500" size={28} />,
      title: "Tangan Merangkul",
      desc: "Sinergi antara mahasiswa dan warga desa dalam membangun komunitas yang solid dan harmonis.",
    },
  ];

  return (
    <section id="filosofi" className="py-24 bg-white font-['Poppins'] relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h4 className="text-[#8B5A2B] font-semibold tracking-wider text-sm mb-3 uppercase">Makna & Identitas</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">Filosofi Logo Kami</h2>
          <p className="text-[#555555]">
            Setiap elemen dalam logo kelompok kami memiliki makna mendalam yang menjadi pedoman dalam setiap langkah pengabdian kami di Desa Cigalontang.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Logo Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-100 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-64 h-64 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center p-8 border border-zinc-100">
                <div className="text-center">
                  <Leaf size={64} className="text-[#8B5A2B] mx-auto mb-2" />
                  <span className="text-xl font-bold text-[#333333] tracking-wide">KKN</span>
                  <div className="text-xs text-[#555555] font-medium tracking-widest mt-1">MENGABDI</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 bg-[#FAFAFA] rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all border border-transparent hover:border-zinc-200 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
