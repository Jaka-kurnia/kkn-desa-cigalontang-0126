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
import yunanImg from "./img/yunan.jpeg";
import azzahraImg from "./img/azzahra.jpeg";
import addhityaImg from "./img/aditya.jpeg";
import nizarImg from "./img/nizarreal.jpeg";
import rismaImg from "./img/risma.jpeg";
import jihanImg from "./img/jihan.jpeg";
import helmiImg from"./img/helmi.jpeg";

type Member = {
  name: string;
  role: string;
  img: string;
};

const MemberCard = ({ member, idx }: { member: Member; idx: number }) => {
  const roleParts = member.role.split('/');
  const jabatan = roleParts[0]?.trim();
  const prodi = roleParts[1]?.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden relative mb-5 shadow-lg border-4 border-white group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-zinc-100">
        <ImageWithFallback
          src={member.img}
          alt={`Foto profil ${member.name}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
          <a href="#" className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#333333] hover:text-white hover:bg-[#8B5A2B] transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-300">
            <Instagram size={14} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#333333] hover:text-white hover:bg-[#8B5A2B] transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <Linkedin size={14} />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#333333] hover:text-white hover:bg-[#8B5A2B] transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
            <Mail size={14} />
          </a>
        </div>
      </div>
      <h3 className="text-lg font-bold text-[#333333] mb-1">{member.name}</h3>
      <p className="text-sm text-[#8B5A2B] font-bold">{jabatan}</p>
      {prodi && <p className="text-xs text-[#555555] mt-1">{prodi}</p>}
    </motion.div>
  );
};

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
      name: "AZZAHRA PUTRI RAGIL",
      role: "Sekretaris ll / Administrasi Bisnis",
      img:azzahraImg,
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
      img: yunanImg,
    },
    {
      name: "NIZAR ABDUSSALAM ",
      role: "Pendidikan ll  / Manajemen Keuangan Perbankan",
      img: nizarImg,
    },
    {
      name: "JIHAN INTAN SARI",
      role: "Pendidikan lll / Manajemen Keuangan Perbankan",
      img: jihanImg,
    },
    {
      name: "NURHAYATI",
      role: "Humas l / Administrasi Bisnis",
      img: nurhayatiImg,
    },
      {
      name: "JAKA KURNIA",
      role: "Humas ll / Manajemen Informatika",
      img: jakaImg,
    },
    {
      name: "MUHAMMAD ZULFAN ALI",
      role: "Humas lll / Manajemen Pemasaran",
      img: helmiImg,
    },
  
    {
      name: "RISMA RISMAYA",
      role: "Humas llll / Administrasi Bisnis",
      img: nurhayatiImg,
    },
    {
      name: "ADHITYA RAHMAN PUTRA",
      role: "PDD l / Manajemen Pemasaran",
      img: addhityaImg,
    },
    {
      name: "HELMI DEVANA NURSYAHRONI",
      role: "PDD ll / Administrasi Bisnis",
      img: helmiImg,
    },
    {
      name: "LISNA SARI NURHASANAH",
      role: "PDD lll / Manajemen Pemasaran",
      img: lisnaImg,
    },
  ];

  const ketua = members[0];
  const wakilKetua = members[1];
  const sekreBenda = members.slice(2, 6);
  const pendidikan = members.slice(6, 9);
  const humas = members.slice(9, 13);
  const pdd = members.slice(13, 16);

  return (
    <section id="anggota" className="py-24 bg-[#FAFAFA] font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[#8B5A2B] font-semibold tracking-wider text-sm mb-3 uppercase">Tim Kami</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">Penggerak Perubahan</h2>
          <p className="text-[#555555]">Mengenal lebih dekat para mahasiswa berdedikasi di balik program-program pengembangan Desa Cigalontang.</p>
        </div>

        {/* Inti (Ketua & Wakil) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-16">
          <MemberCard member={ketua} idx={0} />
          <MemberCard member={wakilKetua} idx={1} />
        </div>

        {/* Sekretaris & Bendahara */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-[#333333] border-b-2 border-[#8B5A2B] inline-block pb-1">Sekretaris & Bendahara</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {sekreBenda.map((m, idx) => (
            <MemberCard key={m.name} member={m} idx={idx + 2} />
          ))}
        </div>

        {/* Divisi Pendidikan */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-[#333333] border-b-2 border-[#8B5A2B] inline-block pb-1">Divisi Pendidikan</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {pendidikan.map((m, idx) => (
            <MemberCard key={m.name} member={m} idx={idx + 6} />
          ))}
        </div>

        {/* Divisi Humas */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-[#333333] border-b-2 border-[#8B5A2B] inline-block pb-1">Divisi Humas</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
          {humas.map((m, idx) => (
            <MemberCard key={m.name} member={m} idx={idx + 9} />
          ))}
        </div>

        {/* Divisi PDD */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-[#333333] border-b-2 border-[#8B5A2B] inline-block pb-1">Divisi PDD</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pdd.map((m, idx) => (
            <MemberCard key={m.name} member={m} idx={idx + 13} />
          ))}
        </div>
      </div>
    </section>
  );
}
