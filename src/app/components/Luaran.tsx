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
    
    title: "Website Desa Cigalontang",
    shortDesc: "Platform digital untuk pengelolaan informasi desa.",
    fullDesc:
      "Website Desa Cigalontang yang telah tersedia sebelumnya masih bersifat statis sehingga aparat desa belum dapat memperbarui informasi secara mandiri. Penyampaian informasi mengenai profil, kegiatan, potensi desa, dan UMKM melalui media digital juga belum optimal. Sekarang sudah tersedianya website Desa Cigalontang yang bersifat dinamis dan dapat dikelola oleh aparat desa. Website dapat digunakan untuk memperbarui informasi, menambahkan berita dan kegiatan desa, serta memperkenalkan profil, potensi, dan UMKM Desa Cigalontang kepada masyarakat secara lebih mudah dan terstruktur.",
    image: "/",
    category: "MI",
  },
  {
    id: 2,
    title: "Website CMS SDN 1 Cigalontang",
    shortDesc: "Platform pengelolaan konten berbasis web.",

    fullDesc:
      "SDN 1 Cigalontong belum memiliki website resmi sebagai media publikasi dan penyebaran informasi sekolah. Informasi mengenai kegiatan, berita, dan prestasi siswa belum tersampaikan melalui media digital sekolah secara terstruktur. Sekarang telah tersedianya website resmi SDN 1 Cigalontong sebagai media publikasi informasi sekolah. Website dapat digunakan untuk menyampaikan berita, kegiatan, dan prestasi siswa kepada masyarakat serta telah diserahkan kepada pihak sekolah untuk dikelola dan diperbarui secara berkala.",
    image: "/sdciga.png",
    category: "MI",
  },
  {
    id: 3,
    title: "Website Profile KKN Desa Cigalontang",
    shortDesc: "Platform digital untuk mempublikasikan kegiatan KKN dan Luaran KKN.",
    fullDesc:
      "",
    image: "/profkkn.png",
    category: "MI",
  },
  {
    id: 4,
    title: "Website CMS SDN Girilintang",
    shortDesc: "Platform pengelolaan konten berbasis web.",
    fullDesc:
      "SDN Girilintang belum memiliki website resmi sebagai media publikasi dan penyebaran informasi sekolah. Informasi mengenai kegiatan, berita, dan prestasi siswa belum tersampaikan melalui media digital sekolah secara terstruktur. Sekarang telah tersedianya website resmi SDN Girilintang sebagai media publikasi informasi sekolah. Website dapat digunakan untuk menyampaikan berita, kegiatan, dan prestasi siswa kepada masyarakat serta telah diserahkan kepada pihak sekolah untuk dikelola dan diperbarui secara berkala.",
    image: "/girilintang.png",
    category: "MI",
  },
  {
    id: 5,
    title: "Buku Laporan Keuangan ",
    shortDesc: "Buku pencatatan keuangan untuk UMKM di Desa Cigalontang.",
    fullDesc:
      "Sebagian besar UMKM di Desa Cigalontang belum melakukan pencatatan keuangan usaha secara teratur dan masih mencampurkan keuangan pribadi dengan keuangan usaha, sehingga sulit mengetahui kondisi pemasukan, pengeluaran, maupun laba rugi usaha. Setelah program kerja dilaksanakan, UMKM yang sudah menerima buku laporan keuangan dapat digunakan untuk mencatat pemasukan dan pengeluaran usaha secara lebih teratur, sehingga membantu pelaku UMKM dalam mengelola dan memantau kondisi keuangan usahanya.",
    image: "/placeholder-mpab.svg",
    category: "MKP",
  },
  {
    id: 6,
    title: "Qris UMKM Bubur Abah Anes ",
    shortDesc: "QRIS sebagai salah satu metode pembayaran non tunai.",
    fullDesc:
      "Sebelum program kerja dilaksanakan, Pak Iwa sebagai pedagang bubur di Desa Cigalontang belum memiliki metode pembayaran QRIS sehingga transaksi dengan konsumen masih dilakukan secara tunai. Setelah program kerja dilaksanakan, Pak Iwa telah memiliki QRIS yang siap digunakan untuk menerima pembayaran secara non-tunai, sehingga memberikan alternatif pembayaran yang lebih mudah dan praktis bagi konsumen serta mendukung digitalisasi dalam kegiatan usahanya.",
    image: "/placeholder-mkp.svg",
    category: "MKP",
  },
  {
    id: 7,
    title: "Akun Market Place UMKM",
    shortDesc: "Akun marketplace BUMDES untuk mempromosikan produk UMKM di Desa Cigalontang.",
    fullDesc: "Sebelum program kerja dilaksanakan, sebagian besar UMKM di Desa Cigalontang masih melakukan penjualan secara offline dan belum memanfaatkan media digital maupun marketplace secara optimal. Keterbatasan pemahaman teknologi, terutama pada pelaku UMKM yang berusia lanjut, menjadi salah satu kendala dalam melakukan pemasaran dan penjualan secara online. Setelah program kerja dilaksanakan, dilakukan kerja sama dengan BUMDes Desa Cigalontang dalam pengelolaan marketplace melalui TikTok Shop sebagai wadah pemasaran dan penjualan produk UMKM secara online, sehingga produk UMKM Desa Cigalontang dapat dipasarkan secara lebih luas tanpa mengharuskan pelaku UMKM mengelola teknologi digital secara mandiri.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
  },
  {
    id: 8,
    title: "Akun Medsos BUMDes dan UMKM ",
    shortDesc: "Akun marketplace BUMDES untuk mempromosikan produk UMKM di Desa Cigalontang.",
    fullDesc: "Sebelum program kerja dilaksanakan, BUMDes Desa Cigalontang yang baru terbentuk pada tahun 2024 belum memiliki akun media sosial sebagai sarana untuk memperkenalkan profil BUMDes dan mempromosikan produk UMKM Desa Cigalontang. Selain itu, UMKM juga belum memiliki media khusus untuk melakukan pemasaran produk melalui konten digital. Setelah program kerja dilaksanakan, BUMDes Desa Cigalontang telah memiliki akun Instagram dan TikTok sebagai media publikasi dan promosi, serta dibuatnya akun TikTok UMKM yang dikelola oleh BUMDes untuk memasarkan produk melalui konten video. Dengan adanya akun tersebut, BUMDes dan UMKM memiliki media pemasaran digital yang dapat membantu memperluas jangkauan promosi, meningkatkan pengenalan produk, dan memudahkan masyarakat memperoleh informasi mengenai produk UMKM Desa Cigalontang.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
  },
  {
    id: 9,
    title: "Logo BUMDes ",
    shortDesc: "Pembuatan logo sebagai identitas visual resmi BUMDes sebagai representasi semangat kemandirian ekonomi desa dan potensi lokal.",
    fullDesc: "Sebelum program kerja dilaksanakan, BUMDes Desa Cigalontang belum memiliki logo sebagai identitas visual resmi karena BUMDes masih tergolong baru terbentuk. Kondisi tersebut membuat BUMDes belum memiliki identitas yang dapat merepresentasikan semangat kemandirian ekonomi desa dan potensi lokal. Setelah program kerja dilaksanakan, telah dibuat logo BUMDes Desa Cigalontang yang telah disepakati bersama oleh pihak BUMDes dan perangkat desa untuk digunakan sebagai identitas visual resmi dalam berbagai kegiatan dan media BUMDes.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
  },
   {
    id: 10,
    title: "Logo dan Banner UMKM Keripik NB",
    shortDesc: "Pembuatan logo dan banner sebagai identitas visual resmi UMKM Keripik NB sebagai representasi semangat kemandirian ekonomi desa dan potensi lokal.",
    fullDesc: "Usaha Bu Imin belum memiliki identitas visual dan media promosi yang dapat digunakan untuk memperkenalkan usaha kepada masyarakat. *After:* Usaha Bu Imin kini memiliki logo dan banner yang dapat digunakan untuk memperkenalkan serta memperkuat identitas usahanya.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 11,
    title: "Logo dan Banner UMKM Mak Iyos",
    shortDesc: "Pembuatan logo dan banner sebagai identitas visual resmi UMKM Mak Iyos sebagai representasi semangat kemandirian ekonomi desa dan potensi lokal.",
    fullDesc: "Promosi usaha Mak Iyos masih dilakukan tanpa didukung logo dan banner sebagai penanda usaha. Mak Iyos telah mendapatkan logo dan banner yang dapat dimanfaatkan untuk memperkenalkan produk sekaligus membuat usaha lebih mudah dikenali konsumen.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 12,
    title: "Banner UMKM Snack Bu Ratih",
    shortDesc: "Banner UMKM sebagai identitas visual resmi UMKM Snack Bu Ratih sebagai representasi semangat kemandirian ekonomi desa dan potensi lokal.",
    fullDesc: "Usaha Bu Ratih belum memiliki sarana promosi visual yang dapat menarik perhatian dan memberikan informasi kepada calon konsumen. Tersedianya banner memberikan Bu Ratih media promosi yang dapat digunakan untuk mengenalkan usaha dan produknya kepada masyarakat.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 13,
    title: "Logo & Banner  Kripik Singkong Arnetta",
    shortDesc: "",
    fullDesc: "Identitas usaha Bu Teti belum didukung dengan logo maupun media promosi berupa banner. Bu Teti kini memiliki logo dan banner yang dapat digunakan dalam kegiatan promosi serta menjadi identitas bagi usahanya.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 14,
    title: "Logo & Banner Wajit Bu Ejet ",
    shortDesc: " ",
    fullDesc: "Usaha Bu Ejet belum memiliki media visual yang dapat menjadi ciri khas sekaligus membantu mengenalkan produknya kepada masyarakat. *After:* Dibuatkan logo dan banner yang dapat menjadi identitas usaha serta membantu meningkatkan pengenalan produk kepada konsumen. ",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 15,
    title: "Banner Wajit Mak Eroh",
    shortDesc: " ",
    fullDesc: "Pengenalan produk Mak Eroh kepada masyarakat belum didukung dengan media promosi berupa banner. Mak Eroh telah memiliki banner yang dapat digunakan untuk memberikan informasi mengenai usaha dan produk kepada konsumen.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 16,
    title: "Logo Pandai Besi Pak  Epen",
    shortDesc: " ",
    fullDesc: "Usaha Pak Epen belum mempunyai logo yang dapat dijadikan sebagai ciri khas dan identitas visual usaha. Pak Epen telah memiliki logo yang dapat digunakan sebagai identitas usaha dalam berbagai kebutuhan promosi.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 17,
    title: "Logo & Banner Kicimpring Mak Iyek",
    shortDesc: " ",
    fullDesc: "Usaha Mak Iyek belum memiliki identitas visual dan media promosi yang mendukung pengenalan produknya kepada masyarakat. Mak Iyek mendapatkan logo dan banner yang dapat digunakan sebagai identitas sekaligus sarana untuk mempromosikan produk usahanya.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 18,
    title: "Logo & Banner UMKM Bu Ratna",
    shortDesc: " ",
    fullDesc: "Usaha Bu Ratna belum memiliki logo dan media promosi visual yang dapat membantu konsumen mengenali usaha dan produknya. Logo dan banner telah dibuat untuk Bu Ratna sehingga usaha memiliki identitas yang lebih jelas dan media untuk mendukung kegiatan promosi.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   },
   {
    id: 19,
    title: "Logo & Banner Pengrajin Pak Ajun",
    shortDesc: " ",
    fullDesc: "Usaha Pa Ajun belum memiliki identitas visual dan media promosi yang dapat menunjang pengenalan usaha kepada masyarakat. Pa Ajun telah memperoleh logo dan banner yang dapat digunakan sebagai identitas usaha serta mendukung kegiatan promosi kepada konsumen.",
    image: "/placeholder-mpab.svg",
    category: "MP & AB",
   }
   
  
  // {
  //   id: 7,
  //   title: "Jurnal Pengabdian: Transformasi Digital Desa",
  //   shortDesc: "Artikel jurnal terindeks SINTA 4 tentang digitalisasi administrasi desa.",
  //   fullDesc:
  //     "Jurnal Pengabdian Masyarakat berjudul \"Transformasi Digital Administrasi Desa Cigalontang Melalui Sistem Informasi Berbasis Web\" telah diterbitkan di Jurnal Abdimas Teknologi (SINTA 4, Vol. 7 No. 2, 2024). Artikel ini mendokumentasikan proses pengembangan, implementasi, dan evaluasi sistem informasi desa serta dampaknya terhadap efisiensi layanan publik. Tersedia secara open access di portal jurnal universitas.",
  //   image: "/placeholder-bukujurnal.svg",
  //   category: "Buku & Jurnal",
  // },
  // {
  //   id: 8,
  //   title: "Buku Panduan Pemetaan Potensi Desa",
  //   shortDesc: "Buku referensi metodologi partisipatif pemetaan sumber daya desa.",
  //   fullDesc:
  //     "Buku \"Pemetaan Partisipatif Potensi Desa: Metodologi dan Praktik di Desa Cigalontang\" (ISBN 978-623-XXX-XX-X) mengumpulkan metodologi Rapid Rural Appraisal (RRA) dan Participatory Rural Appraisal (PRA) yang disesuaikan konteks lokal. Berisi panduan langkah-langkah, studi kasus, templat formulir, dan rekomendasi kebijakan. Diterbitkan oleh LPPM Universitas Mitra, cetakan pertama 300 eksemplar.",
  //   image: "/placeholder-bukujurnal.svg",
  //   category: "Buku & Jurnal",
  // },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
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
        <DialogContent className="block max-w-[90vw] sm:max-w-[480px] lg:max-w-[640px] max-h-[90vh] overflow-y-auto p-0 border-none font-['Poppins']">
          {selectedItem && (
            <div className="flex flex-col w-full">
              <div className="relative shrink-0 w-full aspect-video overflow-hidden bg-zinc-100">
                <ImageWithFallback
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs font-semibold rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <DialogHeader className="mb-4 sm:mb-6">
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-[#333333] leading-tight">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-[#555555] leading-relaxed text-sm sm:text-base whitespace-pre-line text-justify">
                  {selectedItem.fullDesc}
                </DialogDescription>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 pt-6 border-t border-zinc-100">
                  <DialogClose className="flex items-center gap-2 text-sm text-[#8B5A2B] font-medium hover:text-[#6b451f] transition-colors">
                    <ChevronLeftIcon size={16} />
                    Kembali
                  </DialogClose>

                  <DialogClose className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#333333] transition-colors" aria-label="Tutup">
                    <XIcon size={18} />
                  </DialogClose>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}