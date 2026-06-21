import { motion } from "motion/react";
import logoImg from "./logo_kkn/logo.png";
import imgBintang from "./logo_kkn/bintang.png";
import imgGunung from "./logo_kkn/gunung.png";
import imgRumah from "./logo_kkn/rumah.png";
import imgBuku from "./logo_kkn/buku.png";
import imgFigurManusia from "./logo_kkn/figur-manusia.png";
import imgDaun from "./logo_kkn/daun.png";
import imgPohon from "./logo_kkn/pohon.png";
import imgLingkaran from "./logo_kkn/lingkaran.png";

export function Philosophy() {
  const leftItems = [
    { img: imgBintang, title: "Bintang", desc: "Melambangkan cita-cita, harapan, dan nilai luhur pedoman KKN. Menggambarkan semangat mahasiswa untuk berkontribusi." },
    { img: imgGunung, title: "Gunung", desc: "Merepresentasikan kondisi geografis Cigalontang. Melambangkan keteguhan, kekuatan, dan semangat berkembang." },
    { img: imgRumah, title: "Rumah Desa", desc: "Masyarakat sebagai pusat program. Mencerminkan nilai kekeluargaan, kebersamaan, dan kedekatan mahasiswa dengan warga." },
  ];

  const rightItems = [
    { img: imgDaun, title: "Daun", desc: "Melambangkan pertumbuhan dan komitmen berkelanjutan. Program diharapkan memberikan dampak positif yang terus berkembang." },
    { img: imgPohon, title: "Pohon", desc: "Merepresentasikan kehidupan. Akar kuat menggambarkan kearifan lokal, pertumbuhannya mencerminkan kesejahteraan." },
    { img: imgLingkaran, title: "Lingkaran", desc: "Melambangkan persatuan, kekompakan, dan hubungan harmonis. Mencerminkan kesinambungan program dan pengabdian." },
  ];

  const topItem = { img: imgBuku, title: "Buku Terbuka", desc: "Menggambarkan identitas akademik mahasiswa. Simbol pembelajaran, edukasi, dan pertukaran pengetahuan selama KKN." };
  const bottomItem = { img: imgFigurManusia, title: "Figur Manusia", desc: "Sinergi antara mahasiswa, masyarakat, dan institusi. Mencerminkan kerja sama dan gotong royong membangun desa." };

  return (
    <section id="filosofi" className="py-24 bg-[#FAFAFA] font-['Poppins'] relative overflow-hidden">
      {/* Abstract Light Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h4 className="text-[#8B5A2B] font-semibold tracking-wider text-sm mb-3 uppercase">Makna & Identitas</h4>
          <h2 className="text-2xl md:text-4xl font-bold text-[#333333] mb-4">Filosofi Logo Kami</h2>
          <p className="text-[#555555]">
            Setiap elemen dalam logo kelompok kami memiliki makna mendalam yang menjadi pedoman dalam setiap langkah pengabdian kami di Desa Cigalontang.
          </p>
        </motion.div>

        {/* Radial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center justify-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12 lg:gap-20 order-2 lg:order-1">
            {leftItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.2, type: "spring" }}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-5 text-center lg:text-right justify-end group"
              >
                <div className="order-2 lg:order-1 flex-1">
                  <h3 className="font-bold text-[#333333] text-xl mb-2 group-hover:text-[#8B5A2B] transition-colors">{item.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed max-w-[300px] mx-auto lg:ml-auto lg:mr-0">{item.desc}</p>
                </div>
                <div className="order-1 lg:order-2 w-24 h-24 shrink-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full p-4 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-zinc-100 transition-all duration-500 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain relative z-10" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN (Top Item + Main Logo + Bottom Item) */}
          <div className="flex flex-col items-center justify-between gap-12 order-1 lg:order-2 relative py-8">
            {/* Top Item */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              className="flex flex-col items-center text-center gap-5 group"
            >
              <div className="w-24 h-24 shrink-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full p-4 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-zinc-100 transition-all duration-500 relative">
                <img src={topItem.img} alt={topItem.title} className="w-full h-full object-contain relative z-10" />
              </div>
              <div>
                <h3 className="font-bold text-[#333333] text-xl mb-2 group-hover:text-[#8B5A2B] transition-colors">{topItem.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed max-w-[280px]">{topItem.desc}</p>
              </div>
            </motion.div>

            {/* Central Main Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="relative my-8 lg:my-16"
            >
              <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center p-6 border border-zinc-100 z-10 group">
                <img 
                  src={logoImg} 
                  alt="Logo KKN Desa Cigalontang 0126" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl"
                />
              </div>
            </motion.div>

            {/* Bottom Item */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
              className="flex flex-col items-center text-center gap-5 group"
            >
              <div>
                <h3 className="font-bold text-[#333333] text-xl mb-2 group-hover:text-[#8B5A2B] transition-colors">{bottomItem.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed max-w-[280px]">{bottomItem.desc}</p>
              </div>
              <div className="w-24 h-24 shrink-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full p-4 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-zinc-100 transition-all duration-500 relative">
                <img src={bottomItem.img} alt={bottomItem.title} className="w-full h-full object-contain relative z-10" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-12 lg:gap-20 order-3">
            {rightItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.2 + 0.1, type: "spring" }}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-5 text-center lg:text-left justify-start group"
              >
                <div className="w-24 h-24 shrink-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full p-4 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-zinc-100 transition-all duration-500 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain relative z-10" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#333333] text-xl mb-2 group-hover:text-[#8B5A2B] transition-colors">{item.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed max-w-[300px] mx-auto lg:mr-auto lg:ml-0">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
