"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "./ui/utils";

type Category = "Semua" | "MI" | "MP & AB" | "MKP" | "Buku & Jurnal";

interface LuaranItem {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  category: Exclude<Category, "Semua">;
}

const luaranData: LuaranItem[] = [
  {
    id: 1,
    title: "Sistem Informasi Desa Digital",
    shortDesc: "Platform digital untuk pengelolaan data pendudukan dan administrasi desa.",
    fullDesc:
      "Sistem Informasi Desa Digital adalah aplikasi berbasis web yang dirancang untuk mempermudah pengelolaan data pendudukan, surat menyurat, dan administrasi pemerintahan desa. Fitur meliputi manajemen data warga, pencetakan surat keterangan, pelaporan statistik, dan dashboard monitoring real-time. Dibangun dengan React, Node.js, dan PostgreSQL.",
    image: "/placeholder-mi.svg",
    category: "MI",
  },
  {
    id: 2,
    title: "Aplikasi UMKM Desa Cigalontang",
    shortDesc: "Marketplace digital untuk memasarkan produk UMKM lokal ke pasar yang lebih luas.",
    fullDesc:
      "Aplikasi UMKM Desa Cigalontang merupakan platform e-commerce sederhana yang memungkinkan pelaku UMKM desa memasarkan produk mereka secara online. Fitur meliputi katalog produk, keranjang belanja, sistem pemesanan, integrasi pembayaran, dan manajemen toko untuk penjual. Dilengkapi panel admin untuk monitoring transaksi dan laporan penjualan bulanan.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
  },
  {
    id: 3,
    title: "Modul Pelatihan Kewirausahaan Pemuda",
    shortDesc: "Kurikulum pelatihan kewirausahaan untuk memberdayakan pemuda desa.",
    fullDesc:
      "Modul Pelatihan Kewirausahaan Pemuda adalah paket materi pelatihan terstruktur yang mencakup: mindset kewirausahaan, perencanaan bisnis, pemasaran digital, manajemen keuangan mikro, dan legalitas usaha. Modul ini disusun berbasis kebutuhan lokal dan telah diuji coba pada 30 pemuda desa dengan tingkat kepuasan 92%. Tersedia dalam format cetak dan digital (PDF + video tutorial).",
    image: "/placeholder-mkp.svg",
    category: "MKP",
  },
  {
    id: 4,
    title: "Sistem Monitoring Pertanian Cerdas",
    shortDesc: "IoT-based monitoring system untuk pertanian padi dan sayuran.",
    fullDesc:
      "Sistem Monitoring Pertanian Cerdas menggunakan sensor IoT untuk memantau kelembaban tanah, suhu, kelembaban udara, dan curah hujan secara real-time. Data dikirim ke dashboard web dan aplikasi mobile petani. Sistem memberikan notifikasi otomatis untuk penyiraman, pemupukan, dan prediksi hama. Sudah terpasang di 5 lahan demo di Desa Cigalontang.",
    image: "/placeholder-mi.svg",
    category: "MI",
  },
  {
    id: 5,
    title: "Buku Panduan Wisata Desa",
    shortDesc: "Panduan lengkap potensi wisata Desa Cigalontang dengan peta dan rute.",
    fullDesc:
      "Buku Panduan Wisata Desa Cigalontang berisi informasi lengkap objek wisata: curug, hutan pinus, sawah terasering, dan budaya lokal. Dilengkapi peta interaktif QR code, rute perjalanan, rekomendasi homestay, kuliner khas, dan kalender event tahunan. Dicetak 500 eksemplar dan didistribusikan ke Dinas Pariwisata, hotel mitra, dan titik informasi wisata.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
  },
  {
    id: 6,
    title: "Program Magang Mahasiswa Desa",
    shortDesc: "Skema magang terstruktur untuk mahasiswa di perangkat desa dan BUMDes.",
    fullDesc:
      "Program Magang Mahasiswa Desa menyediakan skema magang 3-6 bulan di perangkat desa, BUMDes, dan UMKM lokal. Mencakup: modul orientasi, logbook digital, sistem evaluasi berkala, sertifikat kompetensi, dan jalur rekrutmen prioritas. Telah menampung 15 mahasiswa dari 3 perguruan tinggi mitra dengan outcome 60% alumni magang terserap kerja di sektor terkait.",
    image: "/placeholder-mkp.svg",
    category: "MKP",
  },
  {
    id: 7,
    title: "Jurnal Pengabdian: Transformasi Digital Desa",
    shortDesc: "Artikel jurnal terindeks SINTA 4 tentang digitalisasi administrasi desa.",
    fullDesc:
      "Jurnal Pengabdian Masyarakat berjudul \"Transformasi Digital Administrasi Desa Cigalontang Melalui Sistem Informasi Berbasis Web\" telah diterbitkan di Jurnal Abdimas Teknologi (SINTA 4, Vol. 7 No. 2, 2024). Artikel ini mendokumentasikan proses pengembangan, implementasi, dan evaluasi sistem informasi desa serta dampaknya terhadap efisiensi layanan publik. Tersedia secara open access di portal jurnal universitas.",
    image: "/placeholder-bukujurnal.svg",
    category: "Buku & Jurnal",
  },
  {
    id: 8,
    title: "Buku Panduan Pemetaan Potensi Desa",
    shortDesc: "Buku referensi metodologi partisipatif pemetaan sumber daya desa.",
    fullDesc:
      "Buku \"Pemetaan Partisipatif Potensi Desa: Metodologi dan Praktik di Desa Cigalontang\" (ISBN 978-623-XXX-XX-X) mengumpulkan metodologi Rapid Rural Appraisal (RRA) dan Participatory Rural Appraisal (PRA) yang disesuaikan konteks lokal. Berisi panduan langkah-langkah, studi kasus, templat formulir, dan rekomendasi kebijakan. Diterbitkan oleh LPPM Universitas Mitra, cetakan pertama 300 eksemplar.",
    image: "/placeholder-bukujurnal.svg",
    category: "Buku & Jurnal",
  },
];

const categories: Category[] = ["Semua", "MI", "MP & AB", "MKP", "Buku & Jurnal"];

export function Luaran() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");
  const [selectedItem, setSelectedItem] = useState<LuaranItem | null>(null);
  const [detailIndex, setDetailIndex] = useState(0);

  const filteredItems = activeCategory === "Semua"
    ? luaranData
    : luaranData.filter((item) => item.category === activeCategory);

  const currentCategoryItems = luaranData.filter(
    (item) => item.category === (selectedItem?.category ?? "MI")
  );

  const openDetail = (item: LuaranItem) => {
    setSelectedItem(item);
    setDetailIndex(currentCategoryItems.findIndex((i) => i.id === item.id));
  };

  const navigateDetail = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    const items = currentCategoryItems;
    const newIndex = direction === "next"
      ? (detailIndex + 1) % items.length
      : (detailIndex - 1 + items.length) % items.length;
    setDetailIndex(newIndex);
    setSelectedItem(items[newIndex]);
  };

  return (
    <section id="luaran" className="py-24 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[#8B5A2B] font-semibold tracking-wider text-sm mb-3 uppercase">Luaran KKN</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">Hasil Karya & Inovasi</h2>
          <p className="text-[#555555]">Dokumentasi luaran program KKN yang berupa sistem, aplikasi, modul, dan produk nyata untuk Desa Cigalontang.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] focus:ring-offset-2",
                activeCategory === cat
                  ? "bg-[#8B5A2B] text-white shadow-[0_4px_14px_rgb(139,90,43,0.4)]"
                  : "bg-zinc-100 text-[#555555] hover:bg-zinc-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-zinc-100"
              onClick={() => openDetail(item)}
            >
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-zinc-100">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#8B5A2B] rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#333333] mb-2 line-clamp-1 group-hover:text-[#8B5A2B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555] line-clamp-2 flex-1">{item.shortDesc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-[#8B5A2B] font-medium group-hover:gap-2 transition-all">
                  Lihat Detail
                  <ChevronRightIcon size={14} />
                </span>
              </div>
            </motion.div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12 text-[#555555]">
              Belum ada luaran untuk kategori ini.
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedItem && (
            <>
              <div className="relative aspect-video overflow-hidden bg-zinc-100">
                <ImageWithFallback
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs font-semibold rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-[#333333]">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-[#555555] leading-relaxed text-base">
                  {selectedItem.fullDesc}
                </DialogDescription>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-100">
                  <DialogClose className="flex items-center gap-2 text-sm text-[#8B5A2B] font-medium hover:text-[#6b451f] transition-colors">
                    <ChevronLeftIcon size={16} />
                    Kembali
                  </DialogClose>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => navigateDetail("prev")}
                      className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#333333] transition-colors"
                      aria-label="Sebelumnya"
                    >
                      <ChevronLeftIcon size={18} />
                    </button>
                    <span className="text-sm text-[#555555] min-w-[80px] text-center">
                      {detailIndex + 1} / {currentCategoryItems.length}
                    </span>
                    <button
                      onClick={() => navigateDetail("next")}
                      className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#333333] transition-colors"
                      aria-label="Selanjutnya"
                    >
                      <ChevronRightIcon size={18} />
                    </button>
                  </div>

                  <DialogClose className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#333333] transition-colors" aria-label="Tutup">
                    <XIcon size={18} />
                  </DialogClose>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}