import { Leaf, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-zinc-300 font-['Poppins'] pt-20 pb-8 border-t border-[#8B5A2B]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Left: Brand & Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#8B5A2B] flex items-center justify-center text-white">
                <Leaf size={24} />
              </div>
              <span className="text-2xl font-bold text-white">KKN Politeknik LP3I Tasikmalaya 0126</span>
            </div>
            <p className="text-zinc-400 mb-8 max-w-sm leading-relaxed text-sm">Kelompok Mahasiswa KKN Politeknik LP3I Kampus Tasikmalaya 0126 yang berdedikasi membangun dan memberdayakan potensi Desa Cigalontang melalui program inovatif dan berkelanjutan.</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/kkn0126.cigalontang" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B5A2B] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B5A2B] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B5A2B] hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-white font-semibold mb-6 text-lg">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#home" className="hover:text-[#8B5A2B] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-desa" className="hover:text-[#8B5A2B] transition-colors">
                  Profil Desa
                </a>
              </li>
              <li>
                <a href="#filosofi" className="hover:text-[#8B5A2B] transition-colors">
                  Filosofi Logo
                </a>
              </li>
              <li>
                <a href="#anggota" className="hover:text-[#8B5A2B] transition-colors">
                  Anggota Tim
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#8B5A2B] transition-colors">
                  Galeri Kegiatan
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right: Contact */}
          <motion.div id="kontak" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h4 className="text-white font-semibold mb-6 text-lg">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#8B5A2B] mt-0.5 shrink-0" />
                <span>Balai Desa Cigalontang, Kab. Tasikmalaya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#8B5A2B] shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#8B5A2B] shrink-0" />
                <span>kknlp3i0126.cigalontang@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom: Copyright */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; 2026 KKN Politeknik LP3I Kampus Tasikmalaya 0126. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Dikembangkan Oleh TIM KKN LP3I TASIK
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
