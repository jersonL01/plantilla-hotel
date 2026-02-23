import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsappBtn from "@/app/components/WhatsappBtn";
import HeroSlider from "@/app/components/HeroSlider";
import RoomsSection from "@/app/components/RoomSection";
import Service from "@/app/components/Services";
import Location from "@/app/components/Location";
const HERO_IMG =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=80";

const ROOMS = [
  {
    name: "Standard",
    price: "desde $49.990",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    desc: "Cama queen, baño privado, TV, WiFi.",
  },
  {
    name: "Deluxe",
    price: "desde $69.990",
    img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb21012?auto=format&fit=crop&w=1400&q=80",
    desc: "Más espacio, escritorio, vista ciudad.",
  },
  {
    name: "Suite",
    price: "desde $89.990",
    img: "https://images.unsplash.com/photo-1560067174-8943bd50f6b8?auto=format&fit=crop&w=1400&q=80",
    desc: "Living, minibar, experiencia premium.",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
            <HeroSlider intervalMs={5000} />
        {/* ROOMS */}
        <RoomsSection rooms={ROOMS} />

        {/* SERVICE */}
        <Service/>
        {/* LOCATION */}
        <Location/>
      </main>

      <Footer />

      {/* BOTÓN WHATSAPP */}
      <WhatsappBtn />
    </>
  );
}