import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tentang Desa", href: "#tentang-desa" },
    { name: "Filosofi", href: "#filosofi" },
    { name: "Anggota", href: "#anggota" },
    { name: "Lokasi", href: "#lokasi" },
    { name: "Galeri", href: "#galeri" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Poppins'] ${
        isScrolled
          ? "bg-[#FAFAFA]/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#8B5A2B] flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-lg">
            <Leaf size={24} />
          </div>
          <span className={`text-xl font-bold ${isScrolled ? "text-[#333333]" : "text-white drop-shadow-md"}`}>
            KKN Mengabdi
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-[#8B5A2B] ${
                    isScrolled ? "text-[#555555]" : "text-white/90 drop-shadow-sm"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontak"
            onClick={(e) => handleScrollTo(e, "#kontak")}
            className="px-6 py-2.5 rounded-xl bg-[#8B5A2B] text-white text-sm font-semibold shadow-[0_4px_14px_0_rgba(139,90,43,0.39)] hover:shadow-[0_6px_20px_rgba(139,90,43,0.23)] hover:-translate-y-0.5 transition-all"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg ${
            isScrolled ? "text-[#333333]" : "text-white drop-shadow-md"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FAFAFA] shadow-lg border-t border-zinc-100 flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo(e, link.href);
              }}
              className="text-[#555555] font-medium py-2 border-b border-zinc-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleScrollTo(e, "#kontak");
            }}
            className="mt-4 px-6 py-3 rounded-xl bg-[#8B5A2B] text-white text-center font-semibold"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}
