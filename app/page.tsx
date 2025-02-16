import { Hero } from "@/components/ui/landing/Hero";
import NavBar from "@/components/ui/landing/NavBar";
import Events from "@/components/ui/landing/Events";
import Workshops from "@/components/ui/landing/Workshops";
import AboutUs from "@/components/ui/landing/AboutUs";
import ContactUs from "@/components/ui/landing/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A29] via-purple-900 to-pink-900">
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Events />
        <Workshops />
        <AboutUs />
        <ContactUs />
      </div>

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-[#0A0A29]/40 backdrop-blur-[120px] -z-10" />
    </div>
  );
}
