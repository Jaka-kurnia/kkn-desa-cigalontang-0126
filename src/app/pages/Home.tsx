import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutVillage } from "../components/AboutVillage";
import { Philosophy } from "../components/Philosophy";
import { Members } from "../components/Members";
import { Location } from "../components/Location";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333]">
      <Navbar />
      <main>
        <Hero />
        <AboutVillage />
        <Philosophy />
        <Members />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
