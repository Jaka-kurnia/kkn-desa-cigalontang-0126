import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import aldyImg from "./img/aldyana.jpeg";
import vanesaImg from "./img/vanesa.jpeg";
import nadinImg from "./img/nadin.jpeg";
import listiaImg from "./img/listia.jpeg";
import nurhayatiImg from "./img/nurhayati.jpeg";
import jakaImg from "./img/jaka.jpeg";
import lisnaImg from "./img/lisna.jpeg";
import anisaImg from "./img/anisa.jpeg";


export function Members() {
  const members = [
    {
      name: "ALDYANA",
      role: "Ketua  / Manajemen Informatika",
      img: aldyImg,
    },
    {
      name: "VANNECA DIVA FADILA",
      role: "Wakil Ketua / Manajemen Keuangan Perbankan",
      img: vanesaImg,
    },
    {
      name: "ANISA RAHIM",
      role: "Sekretaris l / Administrasi Bisnis",
      img: anisaImg,
    },
    // 
    {
      name: "HELMI DEVANA NURSYAHRONI",
      role: "Sekretaris ll / Administrasi Bisnis",
      img: "https://images.unsplash.com/photo-1531299669378-dd18b44a8dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBnaXJsJTIwc21pbGluZ3xlbnwxfHx8fDE3ODEzNTIwNjd8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "NADIN PUTRI RAMADHANI",
      role: "Bendahara l / Manajemen Keuangan Perbankan",
      img: nadinImg, 
    },
    {
      name: "LISTIANINGSIH",
      role: "Bendahara ll / Manajemen Keuangan Perbankan",
      img: listiaImg, 
    },
     {
      name: "YUNAN ARIFIN",
      role: "Pendidikan l  / Manajemen Pemasaran",
      img: "https://images.unsplash.com/photo-1729821728830-068bbff90645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBib3klMjBzbWlsaW5nfGVufDF8fHx8MTc4MTM1MjA2N3ww&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "NIZAR ABDUSSALAM ",
      role: "Pendidikan ll  / Manajemen Keuangan Perbankan",
      img: "https://images.unsplash.com/photo-1729821728830-068bbff90645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBib3klMjBzbWlsaW5nfGVufDF8fHx8MTc4MTM1MjA2N3ww&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "JIHAN INTAN SARI",
      role: "Pendidikan lll / Manajemen Keuangan Perbankan",
      img: "https://images.unsplash.com/photo-1729821728830-068bbff90645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBib3klMjBzbWlsaW5nfGVufDF8fHx8MTc4MTM1MjA2N3ww&ixlib=rb-4.1.0&q=80&w=400",
    },
     {
      name: "RISMA RISMAYA",
      role: "Humas l / Manajemen Informatika",
      img: "https://images.unsplash.com/photo-1531299669378-dd18b44a8dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBnaXJsJTIwc21pbGluZ3xlbnwxfHx8fDE3ODEzNTIwNjd8MA&ixlib=rb-4.1.0&q=80&w=400", // Reusing girl image since I only have 3 distinct good ones
    },
     {
      name: "AZZAHRA PUTRI RAGIL",
      role: "Humas ll / Administrasi Bisnis",
      img: "https://images.unsplash.com/photo-1531299669378-dd18b44a8dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBnaXJsJTIwc21pbGluZ3xlbnwxfHx8fDE3ODEzNTIwNjd8MA&ixlib=rb-4.1.0&q=80&w=400", // Reusing girl image since I only have 3 distinct good ones
    },
      {
      name: "JAKA KURNIA",
      role: "Humas lll / Manajemen Informatika",
      img: jakaImg,
    },
      {
      name: "NURHAYATI",
      role: "Humas llll / Administrasi Bisnis",
      img: nurhayatiImg, 
    },
      {
      name: "ADHITYA RAHMAN PUTRA",
      role: "PDD l / Manajemen Pemasaran",
      img: "https://images.unsplash.com/photo-1729821728830-068bbff90645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBib3klMjBzbWlsaW5nfGVufDF8fHx8MTc4MTM1MjA2N3ww&ixlib=rb-4.1.0&q=80&w=400",
    },
      {
      name: "MUHAMMAD ZULFAN ALI",
      role: "PDD ll / Manajemen Pemasaran",
      img: "https://images.unsplash.com/photo-1729821728830-068bbff90645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBib3klMjBzbWlsaW5nfGVufDF8fHx8MTc4MTM1MjA2N3ww&ixlib=rb-4.1.0&q=80&w=400",
    },
      {
      name: "LISNA SARI NURHASANAH",
      role: "PDD lll / Manajemen Pemasaran",
      img: lisnaImg,
    },
  ];

  return (
    <section id="anggota" className="py-24 bg-[#FAFAFA] font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[#8B5A2B] font-semibold tracking-wider text-sm mb-3 uppercase">Tim Kami</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">Penggerak Perubahan</h2>
          <p className="text-[#555555]">
            Mengenal lebih dekat para mahasiswa berdedikasi di balik program-program pengembangan Desa Cigalontang.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group flex flex-col border border-zinc-100"
            >
              <div className="w-full aspect-square overflow-hidden relative bg-zinc-100">
                <ImageWithFallback
                  src={member.img}
                  alt={`Foto profil ${member.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Modern overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Social icons overlay appearing on hover */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#333333] hover:text-white hover:bg-[#8B5A2B] transition-colors shadow-lg">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#333333] hover:text-white hover:bg-[#8B5A2B] transition-colors shadow-lg">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#333333] hover:text-white hover:bg-[#8B5A2B] transition-colors shadow-lg">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center flex-1 bg-white relative z-10">
                <h3 className="text-lg font-bold text-[#333333] mb-1">{member.name}</h3>
                <p className="text-sm text-[#8B5A2B] font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
